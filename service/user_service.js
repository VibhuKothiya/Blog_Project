const { userSchema} = require("../model")

const register = async (body) =>{
    console.log(body, "service body");
    return userSchema.create(body)
}

module.exports = {register}