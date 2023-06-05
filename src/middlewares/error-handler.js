const errorHandlerMiddleware = (err, req, res, next) => {
  const errStatus = err.statusCode;
  const errMsg = err.message;

  res.status(errStatus).send({
    message: errMsg
  })
}

module.exports = { errorHandlerMiddleware }