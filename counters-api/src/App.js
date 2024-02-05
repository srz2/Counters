const config = require('dotenv').config();
const express = require('express');
const pg = require('pg')
const cors = require('cors');
const bodyParser = require('body-parser');

// Database Hookup
const Pool = pg.Pool
const connectionStr = `postgresql://${process.env.sql_username}:${process.env.sql_password}@${process.env.sql_hostname}:${process.env.sql_port}/${process.env.sql_database}?sslmode=verify-full`
const pool = new Pool({
    connectionString: connectionStr
})

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        "message": "The counter's api service is running"
    })
})

app.get('/stats', async (req, res) => {
    var result = null;
    var isRunning = false;
    try {
        result = await pool.query("SELECT COUNT(*) from recipes");
        isRunning = true;
    } catch (error) {
        result = error;
    }
    res.json({
        "status" : (isRunning ? "Api is Running" : "Api is NOT Running"),
        "number_of_recipes": isRunning ? result.rows[0].count : "N/A"
    })
})

app.get('/recipes', async (req, res) => {
    const recipies = await pool.query("SELECT * FROM recipes");
    res.json(recipies.rows);
})

app.post('/recipes', async (req, res) => {
    var result = null;
    try {
        result = await pool.query(`INSERT INTO recipes VALUES ('${req.body.id}', '${req.body.title}', '${req.body.image}', '${req.body.author}', '${req.body.time}')`);   
    } catch (error) {
        result = error
    }
    res.status(200).json({
        "action" : "adding new recipe",
        "dbquery": `SELECT * FROM recipes WHERE recipeid=${req.params.id}`,
        "postquery": req.body,
        "result": result
    });
});

app.listen(3000, () => {
    console.log("Listening...")
})