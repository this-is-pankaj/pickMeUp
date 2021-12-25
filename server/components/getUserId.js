const { decrypt } = require('../utils/common');

module.exports = (req, res, next) => {
  try {
    const headerName = 'app-token';
    req.userId = decrypt(req.headers[headerName]);
    next();
  } catch (exc) {
    throw exc;
  }
};