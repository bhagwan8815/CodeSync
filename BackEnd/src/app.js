const express = require("express");
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors');
const {generateFile} = require("./services/generateFile");
const {executeCpp}  = require("./services/executeCpp");
const {executePy} = require("./services/executePy");


const app = express();
app.use(express.urlencoded({extended:true}));  //for send post data in the form of json
app.use(express.json());
app.use(express.json());  //if we not use this it gives error like this ReferenceError: exp is not defined
app.use(cors());

app.listen(3000, ()=>{
    console.log("Server is running on http://localhost:3000")
})

//check route  
app.get('/',(req,res)=>{
    res.send("Hello world:")
})




// executeCpp("test.cpp")
//     .then(output => console.log("Output:", output))
//     .catch(err => console.error("Execution Error:", err));


app.post("/run", async(req, res)=>{
//    const language = req.body.language;
//    const code = req.body.code;

   const {language, code} = req.body; //if you dont get any language the default value is cpp
   console.log("language is :"+ language, code.length);
   if(code === undefined){
    return res.status(400).json(
        {
            suceess:false,
            error:"Empty code body!"
        });
   }

   //we need to generate a c++ file with content from the requesst 
     const filepath = await generateFile(language, code)
     console.log("filepath is as follow :"+ filepath);
   //we need to run the file and send the response
   let output;
   if(language==="cpp"){
    output = await executeCpp(filepath);
    console.log("output is " + output);
   }else if(language==="py"){
   output = await executePy(filepath);
   console.log("output is " + output);
   }else if(language==="java"){
     output = await executeJava(filepath);
   }else{
     output = await executeJs(filepath);
   }
  
   console.log("output is as follow :"+output);
   return res.json({filepath, output});
})

app.use('/ai', aiRoutes)
module.exports=app;