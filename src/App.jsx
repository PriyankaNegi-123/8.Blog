import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import { Routes } from "react-router-dom";
import { Router } from "react-router-dom";

function App(){
    return(
        <div className="container">
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/blog/:id' element={<Blog/>}/>
        </Routes>
        </div>
    )
}

export default App;