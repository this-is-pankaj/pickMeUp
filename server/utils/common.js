const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');

const secret = 'secret';
const uuid = () => {
  return uuidv4();
};

const encrypt = (text) => {
  const cipher =  crypto.createCipher('aes128', secret);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
};

const decrypt = (text) =>{
    const decipher = crypto.createDecipher('aes128', secret);
    let decrypted = decipher.update(text, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
};

module.exports = {
  uuid,
  encrypt,
  decrypt,
};
