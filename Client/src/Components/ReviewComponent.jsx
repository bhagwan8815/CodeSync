import React from "react";
import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";
import "../App.css";

export default function ReviewComponent() {
  const [code, setCode] = useState(` function sum() {
        return 1 + 1
      }`);

  const [review, setReview] = useState(``);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    const response = await axios.post("http://localhost:3000/ai/get-review", {
      code,
    });
    setReview(response.data);
  }

  return (
    // <div className='dark:bg-gray-600' >
    //    <main className='dark:bg-gray-700'>
    // <div className="left ">
    //   <div className="code">
    //     <Editor
    //       value={code}
    //       onValueChange={code => setCode(code)}
    //       highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
    //       padding={10}
    //       style={{
    //         fontFamily: '"Fira code", "Fira Mono", monospace',
    //         fontSize: 16,
    //         border: "1px solid #ddd",
    //         borderRadius: "5px",
    //         height: "100%",
    //         width: "100%"
    //       }}
    //     />
    //   </div>
    //   <div
    //     onClick={reviewCode}
    //     className="review">Review</div>
    // </div>
    //     <div className="right">
    //       {/* Correct way to use ReactMarkdown inside the component */}
    //       <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
    //         {review}
    //       </ReactMarkdown>
    //     </div>
    //   </main>
    // </div>

//    <div className="dark:bg-gray-700 ">
//      <div className="grid grid-cols-2  gap-3  ">
//       {/* left part code vala  // bg-[#a19c9c] */}
//       <div className="bg-gray-400 flex dark:bg-gray-600">   
//         <div className="code">
//           <Editor
//             value={code}
//             onValueChange={(code) => setCode(code)}
//             highlight={(code) =>
//               prism.highlight(code, prism.languages.javascript, "javascript")
//             }
//             padding={10}
//             style={{
//               fontFamily: '"Fira code", "Fira Mono", monospace',
//               fontSize: 16,
//               borderRadius: "5px",
//               height: "100%",
//               width: "100%",
//             }}
//           />

//           <div
//             onClick={reviewCode}
//             className="border-none w-[80px] rounded-md flex items-end justify-end mx-auto bg-primarycolor p-2 font-bold cursor-pointer hover:bg-secondarycolor"
//           >
//             Review
//           </div>
          
//         </div>
//       </div>


// {/* right part output vala */}
//       <div className="bg-gray-300 dark:bg-gray-500 h-[620px]">
//         {/* Correct way to use ReactMarkdown inside the component */}
//         <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
//           {review}
//         </ReactMarkdown>
//       </div>
//     </div>
//    </div>

<div className="dark:bg-gray-700">
  <div className="grid grid-cols-2 gap-3">
    
    {/* Left part - Code editor */}
    <div className="bg-gray-500 dark:bg-gray-600 flex flex-col p-4 h-[640px] relative">
      {/* Code Editor Container */}
      <div className="flex-1 overflow-auto">
        <Editor
          value={code}
          onValueChange={(code) => setCode(code)}
          highlight={(code) =>
            prism.highlight(code, prism.languages.javascript, "javascript")
          }
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 16,
            borderRadius: "5px",
            height: "100%",
            width: "100%",
            overflow: "auto", // Fixes scrolling issue
            whiteSpace: "pre-wrap", // Prevents layout shifts
          }}
        />
      </div>

      {/* Review Button at Bottom Right */}
      <div
        onClick={reviewCode}
        className="w-[80px] absolute bottom-4 right-4 rounded-md bg-primarycolor p-2 font-bold cursor-pointer hover:bg-secondarycolor text-center"
      >
        Review
      </div>
    </div>

    {/* Right part - Output */}
    <div className="bg-gray-300 dark:bg-gray-500 h-[640px] p-4 overflow-auto">
      <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
        {review}
      </ReactMarkdown>
    </div>
  </div>
</div>


  );
}
