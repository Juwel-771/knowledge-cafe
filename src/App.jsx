import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blogs from './components/Blogs]/Blogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-red-500'>Knowledge Cafe</h1>
      <Blogs></Blogs>
    </>
  )
}

export default App
