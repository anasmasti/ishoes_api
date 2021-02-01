const express = require('express')
const cors = require('cors')
const url = require('./config/db.config.js')
const bodyParser = require('body-parser')
const PostRouter = require('./routes/post.js')
const SeasonRouter = require('./routes/season.js')
const HomeRouter = require('./routes/home.js')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 5000


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors({
    origin : '*',
    methods : [
        'GET','POST','PUT','DELETE'
    ],
    allowedHeaders : 'Content-Type, X-Requested-With, Accept, Origin, Authorization'
}))

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to MongoDB");    
}).catch(err => {
    console.log('Could not connect. Exiting now...', err);
    process.exit();
});

app.use('/', HomeRouter);
app.use('/api/posts', PostRouter);
app.use('/api/seasons', SeasonRouter);

// @ts-ignore
app.listen(port, console.log("app run on port: "+ port))