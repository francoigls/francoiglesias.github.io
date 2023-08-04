import React from "react";
import './Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';//importo la libreria font awesome icons para poder utilizarla
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCuttlefish } from '@fortawesome/free-brands-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';

const Technologies = ()=> {



         return (
 
    <div className="Technologies " id="skills">
      <div>
       <h3 className="Subtext" > SKILLS</h3>
       <p className="Parrafo"> FRONTEND</p>
        <div className="ContainerSymbol">
          <div className="SoftwareSymbol">
            <FontAwesomeIcon icon={faHtml5} className="html"/>   {/* hago una llamada vector necesario */}
           </div>
           <div className="SoftwareSymbol">
            <FontAwesomeIcon icon={faCss3Alt} className="css"/>
           </div>
           <div className="SoftwareSymbol">
            <FontAwesomeIcon icon={faJsSquare} className="js" />
           </div>
        </div>

          <div>
          <p className="Parrafo"> LIBRERIAS Y FRAMEWORKS</p>
           <div className="ContainerSymbol">
           <div className="SoftwareSymbol ">
            <FontAwesomeIcon icon={faReact} className="react"/>
           </div>
         <div className="SoftwareSymbol  ">
         <FontAwesomeIcon icon={faBootstrap} className="Bootstrap"/>
          </div>
          </div>
          </div>
      
          <div>
          <p className="Parrafo"> BACKEND</p>
         <div className="SoftwareSymbol ContainerSymbol">
           <FontAwesomeIcon icon={faCuttlefish} className="c" />
          </div>
          </div>

          </div>
     </div>


 )    
}


export default Technologies
