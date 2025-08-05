import React from 'react'
import './parts.css'
export default function part({svg , title}) {
  return (
    <div className='part'>
    <span>{svg}</span>
    <h3>{title}</h3>
    </div>
  )
}
