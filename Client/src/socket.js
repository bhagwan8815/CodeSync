// import { io } from "socket.io-client";

// export const initSocket = async () => {
//     const options = {
//         transports: ["websocket"],
//         reconnectionAttempts: 5,
//         timeout: 5000
//     };
//     return io("http://localhost:5000", options);
// };









// import { io } from "socket.io-client";

// export const initSocket = async () => {
//     const options = {
//         transports: ["websocket"],
//         reconnectionAttempts: 5,
//         timeout: 5000
//     };
//     return io("http://localhost:5000", options);  // Ensure this URL matches your backend
// };





import {io} from "socket.io-client";

export const initSocket = async ()=>{
    const option ={
        "force new connection": true,
        reconnectionAttempt: "infinity",
        timeout : 10000,
        transports: ["websocket"],
    };
    return io(process.env.REACT_APP_BACKEND_URL , option);
}