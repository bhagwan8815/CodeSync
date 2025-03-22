const fs = require('fs');
const path =require('path');
const{v4:uuid} = require("uuid");

const dirCodes = path.join(__dirname, "codes");
if(!fs.existsSync(dirCodes)){
    fs.mkdirSync(dirCodes,{recursive:true});
}


const generateFile= async(format, content)=>{

    //create  a uuid for each file
    const jobId = uuid();
    const filename = `${jobId}.${format}`
    //create a file path
    const filepath = path.join(dirCodes, filename);
    //write a content in this file
    await fs.writeFileSync(filepath, content);
    return filepath;

    
};

module.exports ={
    generateFile

};

