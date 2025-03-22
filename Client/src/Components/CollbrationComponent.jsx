import React, { useEffect } from 'react'

import {useState} from 'react'
import Client from './Client'
import CollbrationEditor from './CollbrationEditor'
import { initSocket } from '../socket';
import { useLocation, useNavigate, Navigate, useParams } from 'react-router-dom';
import { useRef } from 'react';
import {toast} from "react-hot-toast"



export default function CollbrationComponent() {

  const [clients,setClients] = useState([ ]);
  const socketRef = useRef(null);
  const codeRef = useRef(null);
  const {roomId} = useParams();
  const location = useLocation();
  const Navigate = useNavigate();
  useEffect(()=>{
    const init = async () =>{
      socketRef.current = await initSocket();
      socketRef.current.on('connect_error', (err) => handleError(err));
      socketRef.current.on('connect_failed', (err) => handleError(err));

      const handleError=(e)=>{
        console.log("socket error =>" ,e);
        toast.error("socket connection failed");
          Navigate("/")
      }
     
       socketRef.current.emit('join',{
        roomId,
        username:location.state?.username,
       });
       socketRef.current.on("joined", ({ clients, username,socketId})=>{
        if(username !== location.state?.username){
          toast.success(`${username} joined the room`);
          
        }
        setClients(clients);
        // socketRef.current.emit('sync-code',codeRef.current);
        socketRef.current.emit('code-change',{
          code:codeRef.current,
          socketId
        });
       });

       //disconnected  (if any user leave the room then )
       socketRef.current.on("disconnected", ({socketId , username}) =>{
        toast.error(`${username} left the room`);
        setClients((prev)=>{
          return prev.filter(
            (client) => client.socketId != socketId
          )
        })
       })
    };
    init();

    


    //if we add this code it dont show out collbration editor, so that's why i commentd this code 

  //   return () =>{
  //     socketRef.current.disconnect();
  //     socketRef.current.off("joined");
  //     socketRef.current.off("disconnected");
  //   }
  //
   },[]);
  

  if(!location.state){
    return <Navigate to="/"/>
  }


  // const copyRoomId = async ()=>{
  //   try{
  //     await navigator.clipboard.writeText(roomId);
  //     toast.success("Room Id is copied.")
  //   }catch(error){
  //     toast.error("Unable to copy room id");
  //   }
  // }

  const copyRoomId = async () => {
  if (!roomId) {
    toast.error("Room ID is not available.");
    return;
  }

  try {
    await navigator.clipboard.writeText(roomId);
    toast.success("Room ID copied!");
  } catch (error) {
    toast.error("Unable to copy Room ID.");
  }
};

  const leaveRoom =()=>{
    // toast.error(` left the room` );
    Navigate("/");
  }
  return (
   <div className='grid grid-cols-12 gap-3'>

    {/* left pannel */}
   <div className='col-span-2 flex flex-col h-screen bg-gray-200 dark:bg-gray-400 rounded-md p-2'>
     <img src="/images/logo.webp" alt="logo"  width="150px" height="50px" className='mx-auto'/>
     <hr className='mt-2 ' />

     {/* list of users */}
     <div className='flex flex-col overflow-auto h-[330px] '>
      {clients.map((client)=>(
        <Client key={client.socketId} username={client.username}/>
      ))}
  

     </div>

     {/* button  */}
     <hr  className='mb-2'/>
     <button onClick={copyRoomId} className='border-none bg-green-600 p-2 text-white text-bold hover:bg-green-800 mt-2 rounded-lg'>Copy Room ID</button>
     <button onClick={leaveRoom} className='border-none bg-red-600 p-2 text-white text-bold hover:bg-red-800 mt-2 rounded-lg'>Leave Room</button>


   </div>

    
   {/* right code editor pannel */}
   <div className='col-span-10  flex flex-col h-screen bg-gray-400 rounded-md p-2'>
   <CollbrationEditor socketRef={socketRef} roomId={roomId} onCodeChange={(code)=>(codeRef.current = code)}/>
     </div>

   </div>
   
  )
}


