import React from "react";
import './Header.css'
import Subtitulo from './Subtitulo.js'
import CvDownloadButton from './Buttom'
import GitSimbol from "../Simbols/GitSimbol";
import InstagramSimbol from "../Simbols/InstagramSimbol";
import LinkedingSimbol from "../Simbols/LinkedingSimbol";

const Header = () => {
    return (
        <div className="name" id="home">
            <h1>Franco Iglesias </h1>
            <Subtitulo />
            <CvDownloadButton />
            <div className="ContainerSimbolsHeader">
                <a href="https://github.com/francoigls">
                    <GitSimbol className='git' />
                </a>
                <a href="https://www.instagram.com/francoigls/">
                    <InstagramSimbol />
                </a>
                <a href="https://www.linkedin.com/in/franco-iglesias-81a825243/">
                    <LinkedingSimbol />
                </a>
            </div>
        </div>
    );
}

export default Header;
