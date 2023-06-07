const jwt = require('jsonwebtoken');
const  User  = require('../models/user');
const { NotAuthorized, adminYaCreado} = require('../exceptions/user-exceptions')



async function login(name, password) {
  const user = await User.findOne({
    where: {
      name: name,
      password: password
    }
  })
  if (!user) {
    throw new NotAuthorized("Email y/o password incorrectos")
  }
  if ((user.name === name) && (user.password === password)) {
    const token = jwt.sign({ id: user.id, name: user.name }, 'configsecret');
    return {
      accessToken: token
    };

  }
}
async function newAdmin() {
const adminUser = await User.findOne({ where: { name:'admin' } });
if (adminUser) {
  throw new adminYaCreado("admin ya creado")
}

const newUser = await User.create({
  name: 'admin',
  password: 'admin',

});
return newUser
}
module.exports = { login , newAdmin};