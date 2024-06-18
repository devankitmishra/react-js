import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username : "Ankit",
    age : 21

  }

  return (
    <>
    <div className="flex">

      <h1 className="bg-green-400 text-black rounded-xl p-4 m-5">Tailwind & Props</h1>
      <Card username="Ankit"/>
      <Card channel="chaiAurCode" username="ChaiAurCode"/>
      <Card/>
    </div>


    </>
  )
}

export default App
