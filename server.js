const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

const app = express();
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');


const db = knex({
    client: 'pg',
    connection: {
        host: '',
        user: '',
        password: '',
        database: ''
    }
});



app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => { res.send('it is working') })
//sign in
app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt) })

//register
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })

//profile
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db) })

//image update image entries
app.put('/image', (req, res) => { image.handleImage(req, res, db) })

//image url api call
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res) })

app.listen(process.env.PORT || 3000, () => {
    console.log(`app is running on port ${process.env.PORT}`);
})
