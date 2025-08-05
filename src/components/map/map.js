import React from "react";
import "./map.css";
export default function map() {
  return (
    <>
      <div class="title">
        <h2 className="title-work2">آدرس ما  </h2>
      </div>
      <div className="MAP-CONTEINER">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1534.373799119412!2d57.1003985957669!3d30.306852051694136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfa!2s!4v1748155388867!5m2!1sfa!2s"
          width="80%"
          height="400"
          style={{ border: " 3px solid orange" }} // تغییر اینجا: استفاده از آبجکت به جای رشته
          allowFullScreen="" // توجه: در JSX باید camelCase باشد (allowFullScreen نه allowfullscreen)
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" // توجه: camelCase (referrerPolicy نه referrerpolicy)
        />

      </div>
      <div class="conteinermaplogo">
        <ul>
            <li className="map">مکان  : کرمان </li>
            <li className="map">  amirking@gmail.com : ایمیل</li>
            <li className="map">شماره تماس : 0912324824</li>
        </ul>
      </div>
      <div class="footer-end">
        <p>کلیه حقوق مطعلق به امیرحسین عباس زاده هست </p>
      </div>
    </>
  );
}
