var express = require('express')
var history = require('connect-history-api-fallback');
app = express()

mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

port = process.env.PORT || 5001
User = require('./api/models/userModel.js')
Contact = require('./api/models/contactModel.js')
mongoose.Promise = global.Promise

url = "mongodb+srv://backend:backend@cluster0.e78gh.mongodb.net/ContactList?retryWrites=true&w=majority"

const connectionParams={
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true 
}

mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

const { appendFile } = require('fs')
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var routes = require('./api/routes/contactRoutes')
routes(app)

if (process.env.NODE_ENV === 'production'){
    app.use(history()); 
    app.use(express.static('frontend/dist'))
}

app.listen(port)
console.log('ContactList started on : ' + port)