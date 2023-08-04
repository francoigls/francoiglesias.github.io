import React from "react";  
import './Header.css'
import  Subtitulo from'./Subtitulo.js'
import CvDownloadButton from './Buttom'
import GitSimbol from "../Simbols/GitSimbol";
import InstagramSimbol from "../Simbols/InstagramSimbol";
import LinkedingSimbol from "../Simbols/LinkedingSimbol";




const Header = () => {

   
        
return (

    <div  className="name" id="home">

     <h1>Franco Iglesias </h1>
     <Subtitulo />
     <CvDownloadButton  />
    <div className="ContainerSimbolsHeader">

     <GitSimbol className='git' />
     <InstagramSimbol />
     <LinkedingSimbol />
    </div>


     
    </div>





)



}


export default Header