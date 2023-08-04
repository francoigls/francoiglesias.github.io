import React from "react";  
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';//importo la libreria font awesome icons para poder utilizarla
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';//importo el vector desde la web oficial
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
const Footer = () =>{
  
return (

  <div className="footer" id="footer">
     
    <h3 className="Subtext" > CONTACTAME!</h3>
     <div className="ContainerFooter">
       <div className="ContactFooter">
       <FontAwesomeIcon icon={faEnvelope} />
          <p >   EMAIL <span className="Redes">francoigls99@gmail.com</span></p>
       </div>
       <div className="ContactFooter">
       <FontAwesomeIcon icon={faWhatsapp} />
          <p>   WHATSAPP <span className="Redes">+543413729706</span></p>
       </div>
       <div className="ContactFooter">
       <FontAwesomeIcon icon={faLinkedinIn} />
          <p>   LINKEDING <span className="Redes">in/fancoiglesias</span></p>
        </div>

     </div>
    
  </div>

)


}


export default Footer