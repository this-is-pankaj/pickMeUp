const users = require('../data/users');
const { decrypt } = require('../utils/common');

module.exports = (req, res, next) => {
  try {
    const headerName = 'app-token';
    const incomingToken = req.headers[headerName];

    const sessionObj = JSON.parse(decrypt(incomingToken));
    const { userId } = sessionObj;
    // Check if the session is a valid one
    const user = users.find((u) => (u.id === userId));
    if(!user.sessions.includes(incomingToken)) {
      throw 'Token has expired';
    }
    req.userId = userId;
    next();
  } catch (exc) {
    res.status(403).send('Token is Invalid/ expired');
    throw exc;
  }
};