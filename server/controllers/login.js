const users = require("../data/users");
const { encrypt } = require("../utils/common");

const loginController = async (req, res) => {
  try {
    const {username, password} = req.body;
    const user = users.find((u) => {
      return (u.username === username);
    });
    // The length of user should only be 1
    if(!user || user.password !==password) {
      res.status(401).send('Invalid credentials');
      return;
    }

    const token = encrypt(JSON.stringify({userId: user.id, timestamp: Date.now()}));
    user.sessions.push(token);
    const resObj = {...user, token };
    delete resObj.password;
    res.status(200).send(resObj);
    return;
  } catch (exc) {
    console.log(exc);
    res.status(500).send('Internal Server Error');
  }
};

const logout = (req, res) => {
  try {
    const { userId } = req;
    const matchingUser = users.find((u) => u.id === userId);
    matchingUser.sessions = matchingUser.sessions.map((s) => {
      return s!==req.headers['app-token'];
    });
    res.status(200).send('Logged out successflly');
  } catch(exc) {
    res.status(500).send(exc);
  }
}

module.exports = {
  loginController,
}