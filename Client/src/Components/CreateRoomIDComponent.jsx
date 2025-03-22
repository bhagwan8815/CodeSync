import React, { useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function CreateRoomIDComponent() {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const generateRoomId = () => {
    const id = uuid();
    setRoomId(id);
    toast.success("Room ID is created.");
  };

  const JoinRoom = (e) => {
    e.preventDefault();
    
    if (!roomId.trim() || !username.trim()) {
      toast.error("Both fields are required.");
      return;
    }
    
    // ✅ Navigate only when inputs are valid
    navigate(`/collbration/${roomId}`, { state: { username } });
    toast.success("Room is Created.");
  };

  return (
    <div className="bg-violet-50 flex pt-4 dark:bg-gray-700 h-[700px]">
      <div className="flex flex-col p-11 justify-items-center rounded-md items-center border border-black-10 mx-auto pt-[80px]  w-[600px]">
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-xl mx-auto bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 dark:bg- dark:from-yellow-500 dark:to-red-500 ">Enter OR Create Room ID</h1>
        
        <form className="flex flex-col gap-5">
          <input
            className="w-[400px] h-9 border border-violet-700 rounded pl-3"
            type="text"
            placeholder="Enter Room ID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />

          <input
            className="w-[400px] h-9 border border-violet-700 rounded pl-3"
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <button 
            onClick={JoinRoom} 
            className="border-none bg-blue-600 p-2 font-bold text-white rounded-md hover:bg-blue-900 transition-all"
          >
            Join
          </button>
        </form>

        <p className="pl-[45px]">
          Don't have a Room ID? Create{" "}
          <span className=" bg-clip-text font-bold text-transparent bg-gradient-to-r from-blue-500 to-purple-500 dark:bg- dark:from-yellow-500 dark:to-red-500 cursor-pointer" onClick={generateRoomId}>
            New Room ID
          </span>
        </p>
      </div>
    </div>
    </div>
    
  );
}

// import React, { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import {v4 as uuid} from "uuid";
// import { useNavigate } from "react-router-dom";


// export default function CreateRoomIDComponent() {
//   const [roomId, setRoomId] = useState("");
//   const [username , setUsername] = useState("");
//   const navigate = useNavigate();

//   const generateRoomId =(e) =>{
//     e.preventDefault();
//     const id = uuid();
//     setRoomId(id);
//     toast.success("Room Id is created.")
//   };

//   const JoinRoom =()=>{
//     if(!roomId || !username){
//       toast.error("Both the field is required.");
//       return;
//     }
//     //otherwise we will nevigate
//   //   navigate(`/collbration/${roomId}`,{
//   //     state: {username},
      
//   //   })
//   //   toast.success("Room is Created.")
//   // }

//   useEffect(() => {
//     if (shouldNavigate) {
//       navigate(`/collbration/${roomId}`, { state: { username } });
//       toast.success("Room is Created.");
//       setShouldNavigate(false); // Reset the flag after navigation
//     }
//   });
 
//   return (
//     <div className="flex flex-col p-11 justify-items-center rounded-md items-center border border-black-10 mx-auto bg-violet-50 w-[600px] ">
//       <div className="flex flex-col gap-5">
//         <h1 className="font-bold text-xl text-red-400 pl-[55px]">
//           Enter OR Create Room Id
//         </h1>
//         <form action="" className="flex flex-col gap-5">
//           <input
//             className="w-[400px] h-9 border border-violet-700 rounded pl-3"
//             type="text "
//             placeholder="Enter Room ID"
//             value={roomId}
//             onChange={(e)=> setRoomId(e.target.value)}
//           />

//           <input
//             className="w-[400px] h-9 border border-violet-700 rounded pl-3"
//             type="text"
//             name=""
//             id=""
//             placeholder="Enter UserName"
//             value={username}
//             onChange={(e)=>setUsername(e.target.value)}

//           />

//           <button onClick={JoinRoom} className="border-none bg-blue-600 p-2 font-bold text-white rounded-md hover:bg-blue-900 transition-all">
//             Join
//           </button>
//         </form>
//         <p className="pl-[45px]">
//           Don't have a Room Id? create{" "}
//           <span className="text-green-400 cursor-pointer" onClick={generateRoomId}>New Room ID</span>
//         </p>
//       </div>
//     </div>
//   );
// }
// }
