import React from 'react'
import Pizza from './Pizza'

function Menu() {
  return (
    <div className='menu flex flex-col items-center'>
      <h2>OUR MENU</h2>
        <Pizza />
        <Pizza />
        
    </div>
  )
}

export default Menu;