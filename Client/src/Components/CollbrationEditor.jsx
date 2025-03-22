import React, { useEffect, useRef } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/theme/dracula.css";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import CodeMirror from "codemirror";

export default function CollaborationEditor({ socketRef, roomId,onCodeChange }) {
  const editorRef = useRef(null);


  useEffect(() => {
    const init = async () =>{
      const editor = CodeMirror.fromTextArea(
        document.getElementById("realTimeEditor"),
        {
          mode: { name: "javascript", json: true },
        theme: "dracula",
        autoCloseTags: true,
        autoCloseBrackets: true,
        lineNumbers: true,
        }
      );
      editorRef.current = editor;
      editor.setSize(null, "100%");
      editorRef.current.on("change", (instance , changes)=>{
        const {origin} = changes;
        const code = instance.getValue();
        onCodeChange(code);
        if(origin !=="setValue"){
          socketRef.current.emit("code-change",{
            roomId,
            code
          });
        }
      })
    };

    init();
  },[]);

  //data receive from server 
  useEffect(()=>{
    if(socketRef.current){
      socketRef.current.on("code-change",({code})=>{
        if(code !==null){
          editorRef.current.setValue(code);
        }
      });
    }})
  //   return ()=>{
  //     socketRef.current.off("code-change");
  //   };
  // },[socketRef.current]);
  return (
    <div className="bg-red-600" style={{ height: "600px" }}>
      <textarea ref={editorRef} id="realTimeEditor"></textarea>
    </div>
  );
}


// import React, { useEffect, useRef } from "react";
// import "codemirror/lib/codemirror.css";
// import "codemirror/mode/javascript/javascript";
// import "codemirror/theme/dracula.css";
// import "codemirror/addon/edit/closetag";
// import "codemirror/addon/edit/closebrackets";
// import CodeMirror from "codemirror";

// export default function CollaborationEditor({ socketRef, roomId }) {
//   const editorRef = useRef(null);
//   const editorInstance = useRef(null); // Store the editor instance

//   useEffect(() => {
//     if (editorInstance.current) return; // Prevent multiple initializations

//     if (editorRef.current) {
//       editorInstance.current = CodeMirror.fromTextArea(editorRef.current, {
//         mode: { name: "javascript", json: true },
//         theme: "dracula",
//         autoCloseTags: true,
//         autoCloseBrackets: true,
//         lineNumbers: true,
//       });

//       editorInstance.current.setSize("100%", "700px");

//       // Listen for editor changes
//       editorInstance.current.on("change", (instance, changes) => {
//         const { origin } = changes;
//         const code = instance.getValue();
//         if (origin !== "setValue" && socketRef.current) {
//           socketRef.current.emit("code-change", {
//             roomId,
//             code,
//           });
//         }
//       });

//       // Register socket event
//       const handleCodeChange = ({ code }) => {
//         if (code !== null && editorInstance.current) {
//           editorInstance.current.setValue(code);
//         }
//       };

//       if (socketRef.current) {
//         socketRef.current.off("code-change", handleCodeChange); // Remove existing listener
//         socketRef.current.on("code-change", handleCodeChange);
//       }
//     }

//     // Cleanup function to remove event listeners when unmounting
//     return () => {
//       if (socketRef.current) {
//         socketRef.current.off("code-change");
//       }
//     };
//   }, [socketRef, roomId]);

//   return (
//     <div style={{ height: "600px" }}>
//       <textarea ref={editorRef} id="realTimeEditor"></textarea>
//     </div>
//   );
// }



// import React, { useEffect, useRef } from "react";
// import "codemirror/lib/codemirror.css";
// import "codemirror/mode/javascript/javascript";
// import "codemirror/theme/dracula.css";
// import "codemirror/addon/edit/closetag";
// import "codemirror/addon/edit/closebrackets";
// import CodeMirror from "codemirror";

// export default function CollaborationEditor({socketRef , roomId}) {

//   const editorRef = useRef(null);
//   const editorInstance = useRef(null); // Store the editor instance

//   useEffect(() => {
//     if (editorInstance.current) return; // Prevent multiple initializations

//     if (editorRef.current) {
//       editorInstance.current = CodeMirror.fromTextArea(editorRef.current, {
//         mode: { name: "javascript", json: true },
//         theme: "dracula",
//         autoCloseTags: true,
//         autoCloseBrackets: true,
//         lineNumbers: true,
//       });

//       editorInstance.current.setSize("100%", "700px");
//       editorInstance.current.on('change',(instance,changes)=>{
//         //console.log(`changes` , instance , changes);
//         const {origin} = changes;
//         const code = instance.getValue();
//         if(origin !== "setValue"){
//           socketRef.current.emit("code-change" , {
//             roomId ,
//             code,
//           });
//         }

//       });
//       // socketRef.current.on("code-change",({code}) =>{
//       //   if(code!==null){
//       //     editorInstance.current.setValue(code);
//       //   }
//       // });
      
//     };
//   }, []);


//   return (
//     <div style={{ height: "600px" }}>
//       <textarea ref={editorRef} id="realTimeEditor"></textarea>
//     </div>
//   );
// }







//this is code before adding the features of collbrative code editor

// import React, { useEffect, useRef } from "react";
// import "codemirror/lib/codemirror.css";
// import "codemirror/mode/javascript/javascript";
// import "codemirror/theme/dracula.css";
// import "codemirror/addon/edit/closetag";
// import "codemirror/addon/edit/closebrackets";
// import CodeMirror from "codemirror";

// export default function CollaborationEditor() {

//   const editorRef = useRef(null);
//   const editorInstance = useRef(null); // Store the editor instance

//   useEffect(() => {
//     if (editorInstance.current) return; // Prevent multiple initializations

//     if (editorRef.current) {
//       editorInstance.current = CodeMirror.fromTextArea(editorRef.current, {
//         mode: { name: "javascript", json: true },
//         theme: "dracula",
//         autoCloseTags: true,
//         autoCloseBrackets: true,
//         lineNumbers: true,
//       });

//       editorInstance.current.setSize("100%", "700px");
//     }
//   }, []);

//   return (
//     <div style={{ height: "600px" }}>
//       <textarea ref={editorRef} id="realTimeEditor"></textarea>
//     </div>
//   );
// }







