import { useState } from 'react'
import './App.css'
import Layout from './components/layout'
import List from './components/list'
import MainModal from './components/Modal'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* <Layout/> */}

        {/* <List/> */}

        <MainModal/>
    </>
  )
}

export default App
