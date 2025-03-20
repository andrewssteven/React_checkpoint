import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='flex justify-between p-3 items-center'>
        <div>
            <p>My Navbar</p>
        </div>
        <ul className='flex gap-10'>
            <li>About</li>
            <li>Home</li>
            <li>Services</li>
            <li>Products</li>
        </ul>
        <div className='space-x-2'>
            <Button text={'Sign in'} className={'bg-green-600 text-white'} />
            <Button text={'Sign up'} className={'bg-blue-600 text-white'}/>
        </div>
    </nav>
  )
}

export default Navbar