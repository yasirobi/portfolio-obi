import React from 'react';
import { FaFacebookF, FaTwitter, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { IconContext } from "react-icons/lib";
import { SiGmail, SiGithub } from 'react-icons/si'

import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
 import "../sliders/slide.css";
 import 'swiper/swiper-bundle.css';
 //import 'swiper/css/effect-cards'
//  import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation,EffectFade, Scrollbar, A11y } from "swiper";
// import { Button } from "react-bootstrap";

// install Swiper modules
SwiperCore.use([Autoplay,Scrollbar, A11y, Pagination, Navigation,EffectFade]);


const SocialIconsSlider = () => {

    const slide1 = [
        {
            icon: <FaFacebookF/>,
            title:"facebook",
           
          },
          {
            icon: <FaPhone/>,
            title:"phone",
            
          },
          {
            icon: <FaWhatsapp />,
            title:"whatsapp",
           
          },
          {
            icon: <FaTwitter/>,
            title:"twitter",
           
          },
          {
            icon: <SiGithub/>,
            title:"github",
           
          },
          {
            icon: <SiGmail/>,
            title:"gmail",
           
          },
          
        ]
    
  return(

   <IconContext.Provider value={{ color: "#fff" }}>
<Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
        className="mySwiper"
      >

      
        {slide1.map((data, index) => (
        <SwiperSlide key={index}>
            
                
               <div className="slide-items">
                   <h5>{data.title}</h5>
                     <span>{data.icon}</span>  
               </div>
               
     
        </SwiperSlide>
      ))}
        
       
      </Swiper>

   </IconContext.Provider>   
  ) 
};



export default SocialIconsSlider;
