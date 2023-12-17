import 'tailwindcss/tailwind.css';
import { useState } from 'react'
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Admin from './Pages/Admin';
Admin
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Admin/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
