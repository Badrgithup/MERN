require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const { logger } = require('./middelware/logger')
const errorHandler = require('./middelware/errorHandler')
const PORT = process.env.PORT || 3500
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const cookieParser = require('cookie-parser')


app.use(logger)
app.use(cors(corsOptions))
app.use('/',express.static(path.join(__dirname, '/public')))

app.use('/',require('./routes/root'))

app.use(express.json())
app.use(cookieParser())
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Server Error')
})
app.use(errorHandler)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})  
