// @author: rishisant
// @date: 2022-20-11

import { useNavigate  } from "react-router-dom";
import React from "react";
import Base from '../styles/Base.css';
import AboutStyle from '../styles/AboutStyle.css';
import { select_EN, select_FR, select_JP } from "../js/ChangeLang";

const About = () => {
    const navigate = useNavigate();

    return (
        <div>
            <body>
                
                <div className="logocontainer">
                    <div className="navlinks">

                    <div className="atelier">
                        <img className="atelierlogo" src={require('../img/atelier_logo.png')}></img>
                    </div>
                        <div className="navlink" id="about" onClick={()=>navigate('/')}>Vote</div>
                        <div className="navlink" id="users" onClick={()=>navigate('/Users')}>Users</div>
                    </div>

                    <div className="about_div">
                        <div id="ourstory">Atelier's Story</div>
                        <div id="os_text">
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            Atelier provides a unique and convenient platform for artists to showcase their work, and for art lovers to discover new and exciting artists and artworks. 
                            With Atelier, everyone can appreciate and support the arts in a fun and easy way. 
                            
                            <br></br><br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            I founded Atelier for the sole purpose of removing the barriers that prevent artists from sharing their work with the world, as well as improve feedback
                            mechanisms such as like buttons, substituting them for a more meaningful and engaging voting system.
                        
                            <br></br><br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            I am a true believer in the power of artwork in uniting and inspiring people, and I hope that Atelier can help artists and art lovers alike to connect with each other
                            and share their love for the arts. I am an artist myself, painting in multiple different mediums. I am also a software engineer, and I am passionate about building
                            products that can make a positive impact on the world. I hope that Atelier can be one of those products.

                            <br></br><br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            Atelier is a work in progress, and I am always looking for ways to improve the platform. If you have any suggestions, please feel free to reach out to me at
                            my discord: @santanamu#0247.
                        </div>

                        <div className="changelanguage">
                            <div className="langbutton" id="to_en" onClick={select_EN} >EN</div>
                            <div className="langbutton" id="to_jp" onClick={select_JP} >JP</div>
                            <div className="langbutton" id="to_fr" onClick={select_FR} >FR</div>
                        </div>
                    </div>

                    

                </div>
            
            </body>
        </div>

    )

};

export default About;

