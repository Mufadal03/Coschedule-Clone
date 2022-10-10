const express = require("express")
const { connection } = require("./config/db")
const { RegisterController } = require("./routes/Register.routes")
const cors = require("cors")
const app = express()

require("dotenv").config()

app.use(cors())

app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 4000 
app.get("/", (req, res) => {
    res.send("Project Update Testing")
})
    
app.use("/user",RegisterController)




app.listen(PORT, async () => {
    try {
        await connection
        console.log("Connected to db")
    } catch(e) {
        console.log(e)
    }
}) 