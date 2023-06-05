const express = require('express')
const authRoutes = require('./src/routes/authRoutes');
const LibraryRoutes = require('./src/routes/libraryRoutes');
const bookRoutes = require('./src/routes/bookRoutes');

const { errorHandlerMiddleware } = require('./src/middlewares/error-handler')
const { initializeAuthentication } = require('./src/auth/auth')
const { initializeDB} = require("./src/db/sequelize-config");
const app = express()
const port = 5001

initializeAuthentication()

app.use(express.json())
app.use('/user', authRoutes);
app.use('/Book', bookRoutes);
app.use('/Library',LibraryRoutes)

app.use(errorHandlerMiddleware)


app.listen(port, async () => {
  await initializeDB();
  console.log(`API con express corriendo en el puerto: ${port}`);
  
});