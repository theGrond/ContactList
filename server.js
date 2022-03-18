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

// /// deploy
// const path = require('path')

// // Serve static files from the React frontend app
// app.use(express.static(path.join(__dirname, '../Contact_List/build')))

// // AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/../Contact_List/build/index.html'))
// })
// ///

if (process.env.NODE_ENV === 'production'){
    app.use(history()); 
    app.use(express.static('frontend/dist'))
}

app.listen(port)
console.log('ContactList started on : ' + port)