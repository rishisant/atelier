// @author: @rishisant
// @date: 2022-20-11

import { useNavigate  } from "react-router-dom";
import React from "react";
import Base from '../styles/Base.css';
import { castVote } from "../js/Vote";
import UserStyle from '../styles/UserStyle.css';

const Users = () => {
    const navigate = useNavigate();
    return (
        <div>
            <body>
                <div className="logocontainer">
                    <div className="navlinks">

                    <div className="atelier">
                        <img className="atelierlogo" src={require('../img/atelier_logo.png')}></img>
                    </div>
                        <div className="navlink" id="home" onClick={()=>navigate('/')}>Vote</div>
                        <div className="navlink" id="about" onClick={()=>navigate('/About')}>About</div>
                    </div>

                    <div className="userList">
                        <div id="userlist_title">Top 10 Artists</div>

                        <div className="user">
                            <div id="goldmedal">#1</div>
                            <img className="userlogo" src={require('../img/user4.png')}></img>
                            <div className="username">EducatedRhino903</div>
                        </div>

                        <div className="user">
                            <div id="silvermedal">#2</div> 
                            <img className="userlogo" src={require('../img/user7.png')}></img>
                            <div className="username">StonedPanda8</div>
                        </div>

                        <div className="user">
                            <div id="bronzemedal">#3</div>
                            <img className="userlogo" src={require('../img/user10.png')}></img>
                            <div className="username">ShyCord083</div>
                        </div>

                        <div className="user">
                            <img className="userlogo" src={require('../img/user8.png')}></img>
                            <div className="username">ChillCrocodile6592</div>
                        </div>

                        <div className="user">
                            <img className="userlogo" src={require('../img/user1.png')}></img>
                            <div className="username">InnocuousBernard92</div>
                        </div>

                        <div className="user">
                            <img className="userlogo" src={require('../img/user3.png')}></img>
                            <div className="username">BasedPeacock7560</div>
                        </div>

                        <div className="user">
                            <img className="userlogo" src={require('../img/user5.png')}></img>
                            <div className="username">RoyalSnake101</div>
                        </div>

                        <div className="user">
                            <img className="userlogo" src={require('../img/user6.png')}></img>
                            <div className="username">RedPanda11</div>
                        </div>

                        <div className="user">
                            <img className="userlogo" src={require('../img/user2.png')}></img>
                            <div className="username">PolarHacker417</div>
                        </div>

                        <div className="user">
                            <img className="userlogo" src={require('../img/user9.png')}></img>
                            <div className="username">AmbitiousVirus013</div>
                        </div>

                    </div>
                </div>

            </body>
        </div>
    )

};

export default Users;