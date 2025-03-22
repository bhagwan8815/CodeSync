import "prismjs/themes/prism-tomorrow.css";

import { Route, Routes } from "react-router-dom";
import "highlight.js/styles/github-dark.css";


import "./App.css";

import CodeReviewPage from "./Pages/CodeReviewPage"
import Navbar from "./Components/Navbar";
import HomeComponent from "./Components/HomeComponent";
import CodeCollbrationPage from "./Pages/CodeCollbrationPage";
import CodeEditorPage from "./Pages/CodeEditorPage";
import HomePage from "./Pages/HomePage";
import CreateRoomIDComponent from "./Components/CreateRoomIDComponent";
import CollbrationComponent from "./Components/CollbrationComponent";
import {Toaster} from "react-hot-toast";


function App() {
 

  return (
    <>
 
     {/* create routes  */}

    <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<HomePage/>} />
        <Route path="/review" element={<CodeReviewPage/>} />
        <Route path="/collbration" element={<CreateRoomIDComponent/>} />
        <Route path="/collbration/:roomid" element={<CollbrationComponent/>} />
        <Route path="/editor" element={<CodeEditorPage/>} />
        
      </Routes>
      <Toaster position="top-center" />

 
    </>
  );
}

export default App;
