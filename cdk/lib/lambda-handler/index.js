const serverless = require("serverless-http")
const express = require("express")
// require("dotenv").config()
const { postMeal, putMeal, getMeal, deleteMeal, getMeals } = require('./db-helpers')
const app = express()

const cors = require("cors")

// Have a title on the process to help us stop it - see package.json
const process = require("process")
process.title = "MyExpressApp"
app.use(express.static(__dirname))


// This lets us handle JSON directly
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({ allowedHeaders: ["Content-Type"] }))



app.get("/", (req, res) => {
    res.status(200).send("Hello World! I love dragons 🐉 and unicorns 🦄!")
})

app.get("/meal", getMeal)
app.post("/meal", postMeal)
app.put("/meal", putMeal)
app.delete("/meal", deleteMeal)

app.get("/meals", getMeals)

module.exports.handler = serverless(app)

