const mongoose = require("mongoose")

const SignupSchema = mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
})

const SignupModel = mongoose.model("user", SignupSchema)

module.exports={SignupModel}