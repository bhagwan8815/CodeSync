const { resource } = require("../app");
const aiService = require("../services/ai.service")


module.exports.getReview = async(req, res)=>{
    const code = req.body.code; //if we use body then we use a middle whire in app.js

    if(!code){
        return res.status(400).send("prompt is required :")
    }


    const response = await aiService(code);

    res.send(response);
}