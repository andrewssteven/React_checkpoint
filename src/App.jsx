import React from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'

const App = () => {
  return (
    <main className='m-4'>
      <Navbar/>
      <h1 className='text-2xl font-semibold text-center'>My React Heading</h1>
      <Cards/>
    </main>
  )
}

export default App