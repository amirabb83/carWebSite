import React from 'react'
import Cars from './cars/cars'
import './logo.css'

const Logos = [
    {logo: 'img/logo/bmw-logo-1963-download.png'},
    {logo: 'img/logo/tesla-logo-2007-full-640.png'},
    {logo: 'img/logo/porsche-logo-2014-full-640.png'},
    {logo: 'img/logo/Mitsubishi-logo-2000x2500.png'},
    {logo: 'img/logo/Mercedes-Benz-logo-2011-1920x1080.png'},
    {logo: 'img/logo/ferrari-logo-2002-640.png'},
    
]
export default function logos() {
  return (
    <div>
  <div className='logos-container'>
    <Cars{...Logos[0]}/>
    <Cars{...Logos[1]}/>
    <Cars{...Logos[2]}/>
    <Cars{...Logos[3]}/>
    <Cars{...Logos[4]}/>
    <Cars{...Logos[5]}/>
    </div>
    <hr/>
    </div>
    
  )
}
