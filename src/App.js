import React from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./component/Header";


function App() {
  return (
  
    <BrowserRouter>
     <Header />
      <div className="Container pt-4">
       
        <Routes> 
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
        </div>
   </BrowserRouter>
  );
}

export default App;
