const users = require("../data/users");
const { encrypt } = require("../utils/common");

const loginController = async (req, res) => {
  try {
    const {username, password} = req.body;
    let isCredValid = false;
    const user = users.filter((u) => {
      if(u.username === username) {
        isCredValid = u.password === password;
        return u; 
      }
    });
    // The length of user should only be 1
    if(!user || !user.length || !isCredValid) {
      res.status(401).send('Invalid credentials');
      return;
    }
    const resObj = {...user[0], access_token: encrypt(user[0].id)};
    delete resObj.password;
    res.status(200).send(resObj);
    return;
  } catch (exc) {
    console.log(exc);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  loginController,
}