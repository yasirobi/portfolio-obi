import { AiFillApi,AiOutlineFolderView } from 'react-icons/ai'
import { BsFillLaptopFill } from 'react-icons/bs'
import {MdApi } from 'react-icons/md'



export const serviceList = [
    {
      id:1,
      name: "responsive web design ",
      fa: <BsFillLaptopFill/>,
      text: "i can build a fully responsive website to all media devices. i aims to make web pages render well on a variety of devices and window or screen sizes from minimum to maximum display size to ensure usability "
    },
    {
      id:2,
      name: "front-end development",
      fa: <AiOutlineFolderView/>,
      text: "as a front-end developer, i would like to build a UI website, where the users can feel a great website. and i like to build a visual layout for users who can appreciates the company achievments."
    },
    {
      id:3,
      name: "back-end development",
      fa:<MdApi/> ,
      text: "i have a skills to build any kind of secure rest-api using express js and mongoDb and the front end developer can easily integrate with. user and admin role base authentication and authorization"
    },
    // {
    //   id:4,
    //   name: "secure restfull-api",
    //   fa:<AiFillApi/> ,
    //   text: "Sed sagittis sodales lobortis. Curabitur in eleifend turpis, id vehicula odio."
    // },
    
  ];