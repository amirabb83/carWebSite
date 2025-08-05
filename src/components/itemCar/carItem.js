import React from 'react'
import './carItem.css'
export default function CarItem() {
  return (
    <div>
      <div class="title">
        <h2  className="title-work2">طیف رنگی خاص را با ما تجربه کنید</h2>
      </div>    
    <div class="conteiner-car">
        <div class="car">
            <img className='car-item-img' src="/img/car-item/166b79614f67897478ebda24a47ad896.jpg" alt=""/>
            <div class="overlay" style={{color:"red" }}><h1>قرمز</h1></div>
        </div>
        <div class="car">
            <img className='car-item-img' src="/img/car-item/45ba47699dc88c1aecd7a638310c1460.jpg" alt=""/>
            <div class="overlay" style={{color:"green" ,}}><h1>سبز</h1></div>
        </div>
        <div class="car">
            <img className='car-item-img' src="/img/car-item/b59f71065169a8abebbf0d96beb99a25.jpg" alt=""/>
            <div class="overlay" style={{color:"black"}}><h1>سیاه</h1></div>
        </div>
        <div class="car">
            <img className='car-item-img' src="/img/car-item/fa2f4fec8306fd7b2bcaf5d9fbaa8f0e.jpg" alt=""/>
            <div class="overlay" style={{color:"blue"}}><h1>آبی</h1></div>
        </div>
        <div class="car">
            <img className='car-item-img' src="/img/car-item/HD-wallpaper-mustang-ford-gt-car-supercar-muscle-america-new-2019.jpg" alt=""/>
            <div class="overlay" style={{color:"black"}}><h1>و...</h1></div>
        </div>
    </div>
      <hr/>
    </div>
  )
}
