import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; //importo el vector en especifico para llarlo

const GitSimbol =()=>{
    return (

<div className="SoftwareSymbol">
           <FontAwesomeIcon icon={faGithub} className="react"/>
          </div>
    )
}


export default GitSimbol