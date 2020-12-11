require('dotenv').config();

const express = require('express');
const ctrl = require('./controllers/authController')
const massive = require('massive');
const session = require('express-session');

const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING} = process.env;
const auth = require('./controllers/authController');
const goals = require('./controllers/goalsController');
const progController = require('./controllers/progController');

const app = express();

app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then( db => {
    app.set('db', db)
    console.log(`I ain't saying you're a goal digger...`)
}).catch( err => console.log(err));

// Auth endpoints
app.post('/auth/register', auth.register);
app.post('/auth/login', auth.login);
app.post('/auth/logout', auth.logout);
app.get('/api/user', auth.getUser);
// Goal endpoints
app.post('/api/goal', goals.setNewGoal);
app.put('/api/goal/:id', goals.updateGoal);
app.get('/api/goal/:id', goals.getGoalData);
app.post('/api/progress', progController.totalGoal);


app.listen(SERVER_PORT, () => console.log(`Hello Seattle, I'm listening... on port ${SERVER_PORT}`));
