import { useState } from 'react'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Homepage from './pages/homepage';
import Resultpage from "./pages/resultpage";


function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/result' element={<Resultpage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
