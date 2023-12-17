import 'tailwindcss/tailwind.css';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import CustomModal from './components/CustomModal';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CustomModal />

   
    </>
  )
}

export default App
