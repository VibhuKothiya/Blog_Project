const {userService} = require("../service")

const userRegister = async (req, res) =>{
        try{
            const body = req.body

            let user = await userService.register(body)

            res.status(200).json({
                sucess : true,
                message : "user registred successfully",
                data : user
            })
        }
        catch(err){
            res.status(400).json({
                success : false,
                message : err.message 
            })
        }
}

module.exports = { userRegister}