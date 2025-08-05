import React from 'react'
import './cars.css'
export default function cars({logo}) {
  return (
    <div>
      <div class="logocontainer">
        <img src={logo} alt="a" className='logo'/>
      </div>
    </div>
  )
}
