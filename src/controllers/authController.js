const authService = require('../services/authService');

async function login(req, res,next) {
  const { name, password } = req.body;
  try {
  const token = await authService.login(name, password);
  res.status(200).send({ token })
  }catch(error){
    next(error)
  }
}
async function newAdmin(req, res,next) {
 
  try {
  const admin = await authService.newAdmin();
  res.status(201).send({ admin })
  }catch(error){
    next(error)
  }
}


module.exports = { login , newAdmin};


