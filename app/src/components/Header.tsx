import React from 'react'
import QHLogo from '../assets/QHLogo.png'

function Header() {

  return (
    <div>
      <header className='flex items-center justify-center '>
        <img src={QHLogo} alt="QHLogo" className='w-40 h-40' />
      </header>
    </div>
  )
}

export default Header;
