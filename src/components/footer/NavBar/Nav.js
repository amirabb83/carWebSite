import "./Nav.css";
import React from "react";
let scroll = document.querySelector('.scroll');

window.addEventListener('scroll', function(){
    let scroolY = window.scrollY

    let sumHeght = document.body.clientHeight

    let nowHight = window.innerHeight

    let scrollpercent = scroolY / (sumHeght - nowHight)

    let scrollRonded = Math.round(scrollpercent * 100)
  
    scroll.style.width = scrollRonded + '%'
})

export default function Nav() {

  
  return (
    <div className="fix">

      <div className="container">
        <div className="item first-item ">
          <h2> Work Logo </h2>
          <img src="https://icongr.am/entypo/500px-with-circle.svg?size=34&color=fd9608" />
        </div>
        <div className="item">
          <ul>
            <li className="menu">خانه </li>
             <div class="menu-conteiner">
            <li className="menu">درباره ما </li>
            <div class="list-menue">
              <p>شماره</p>
              <p>ایمیل</p>
              <p>آدرس</p>
            </div>
             </div>
             <div class="menu-conteiner">
            <li className="menu">خدمات</li>
             <div class="list-menue">
              <p>گارانتی </p>
              <p>خدمات پس از فروش </p>
              <p>ضمانت قیمت</p>
              </div>
             </div>
            <li className="menu">نمونه کار ها</li>
            <li className="menu">تیم </li>
            <li className="menu">تماس با ما</li>
          </ul>
        </div>
        <div className="item">
          <a href="#" className="btn">
            شروع کنید{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
