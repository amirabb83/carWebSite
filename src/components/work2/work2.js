import React from "react";
import ItemsWork2 from './items-work2'
import './work2.css'
import { GiAlliedStar } from "react-icons/gi";

const Work2 = () => {
    let info = [
        {svg: <GiAlliedStar style={{width: 50, height:50}}/>,title: 'لورم اپیسوم', para: "برای آرامش بخشیدن و لذت بردن از مفاسد ، چه دردها و چه دردسرهایی را دریافت خواهند کرد"},
        {svg: <GiAlliedStar style={{width: 50, height:50}}/>,title: 'اما همانطور که مشاهده می کنید', para:"آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند"},
        {svg: <GiAlliedStar style={{width: 50, height:50}}/>, title: 'دردهای بزرگ', para: "آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند"},
        {svg: <GiAlliedStar style={{width: 50, height:50}}/>, title: 'هیچکس دیگر', para: "آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند"},
        {svg: <GiAlliedStar style={{width: 50, height:50}}/>, title: 'لولا را پاک کنید', para: "اما در واقع ما هم آنها را متهم می کنیم و هم با یک نفرت عادلانه شایسته چاپلوسی هستیم"},
        {svg: <GiAlliedStar style={{width: 50, height:50}}/>,title: 'دیوا دان', para: "روشها یا تلاشهای ما علاوه بر این ، خطا فرار می کند ، بگذار کوچکتر عاقل باشد"},
    ]
  return (
    <div>
      <div class="title">
        
        <h2  className="title-work2">خدمات مارا برسی کنید</h2>
      </div>
      <div class="container-work2">
        {info.map(item =>(
            <ItemsWork2 key={item.title} {...item} />
        ))}
      </div>
      <hr/>
    </div>
  );
};

export default Work2;
