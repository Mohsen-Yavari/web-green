import React from 'react';
import {about} from "../dummydata";


const About = () => {
    return (
        <>
              <section className="about">
        <div className="container">
        <div className="about-itemContent">
       
      
         {
             about.map((data)=>{
                 const {name,email,phone,fax,dob,nation,heading,title,desc} = data

                 return (
                     <>
                     <div className="about-countent flex">
                         <div className="about-left">
                             <div className="details flex">
                                 <div className="h2Top">نام :</div>
                                 <h2>{name}</h2>
                             </div>
                             <div className="details flex">
                                 <div className="h2Top">ایمیل :</div>
                                 <h2>{email}</h2>
                             </div>
                             <div className="details flex">
                                 <div className="h2Top">موبایل :</div>
                                 <h2>{phone}</h2>
                             </div>
                             <div className="details flex">
                                 <div className="h2Top">فکس :</div>
                                 <h2>{fax}</h2>
                             </div>
                             <div className="details flex">
                                 <div className="h2Top">تولد :</div>
                                 <h2>{dob}</h2>
                             </div>
                             <div className="details flex">
                                 <div className="h2Top">ملیت :</div>
                                 <h2>{nation}</h2>
                             </div>
                             <button className="primry-btn">
                             <i class="ri-arrow-right-circle-fill"></i>دانلود رزمه
                             </button>
                         </div>
                  
                     <div className="about-right">
                         <div className="heading">
                             <h1>{heading}</h1>
                         </div>
                         <div className="para">
                             <span>سلام</span>
                             <h3>{title}</h3>
                             <p>{desc}</p>
                         </div>
                     </div>
                     </div>
                       
                     </>
                 )
             })
         }
 
        </div>
        </div>
        </section>
            
        </>
    );
};

export default About;