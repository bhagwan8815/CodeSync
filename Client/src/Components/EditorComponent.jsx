import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { languages } from 'prismjs';

export default function EditorComponent() {
  const [code, setCode] = useState('');
  const [language , setLanguage] = useState("cpp");
  const [output, setOutput] = useState('');

  const handleSubmit = async () =>{
    const payload ={
      language,
      code
    };
    try{
    const {data} = await axios.post("http://localhost:3000/run", payload);
   console.log(data);
   setOutput(data.output);
   // console.log("the output is :" +ans);
    }catch({response}){
      if(response){
        const errMsg = response.data.err.stderr;
        setOutput(errMsg);
      }else{
        setOutput("Error connecting to server...");
      }
    }
  }
  return (
    <div>
      <h1>Online Code compiler</h1>
      <div>
        <label>Select Language</label>
      <select
      value={language}
      onChange={(e)=>{
        setLanguage(e.target.value);
        console.log(e.target.value);
      }}>
        <option value="cpp">C++</option>
        <option value="py" >Python</option>
        <option value="java">Java</option>
        <option  value="js">Java Script</option>
      </select>
      </div>
      <textarea 
      rows="20" 
      cols="75"
      value={code}
      onChange={(e)=>{
        setCode(e.target.value);
      }}
      >
      </textarea>
      <br />
      <button onClick={handleSubmit}>Submit</button>


      <p>{output}</p>
    </div>
  )
}
