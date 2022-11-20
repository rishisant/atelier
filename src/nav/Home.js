// @author: rishisant
// @date: 2022-19-11

import { useNavigate  } from "react-router-dom";
import React from "react";
import Base from '../styles/Base.css';
import { castVote } from "../js/Vote";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <body>

            <div className="logocontainer">
                <div className="navlinks">

                <div className="atelier">
                    <img className="atelierlogo" src={require('../img/atelier_logo.png')}></img>
                </div>
                    <div className="navlink" id="about" onClick={()=>navigate('./About')}>About</div>
                    <div className="navlink" id="users" onClick={()=>navigate('./Users')}>Users</div>
                </div>
            </div>

           
        
            <div className="post_container">
                <div className="idcontainer">
                    <img className="userlogo" src={require('../img/user1.png')}></img>
                    <b>InnocuousBernard92</b>
                </div>
                <div className="post">
                    <img className="userimage" src={require('../img/usersubmissions/retroguitar.png')}></img>
                    <div className="nameVotes">
                        <div className="names" id="name1" onClick={() => castVote(1,0)}>The American Standard</div>
                        <div className="names" id="name2" onClick={() => castVote(2,0)}>Vintage Reissue</div>
                        <div className="names" id="name3" onClick={() => castVote(3,0)}>Jazzmaster</div>
                    </div>
                    <div className="vf">Pick a name!</div>
                </div>
            </div>

            <div className="post_container">
            <div className="idcontainer">
                    <img className="userlogo" src={require('../img/user2.png')}></img>
                    <b>PolarHacker417</b>
                </div>
                <div className="post">
                    <img className="userimage" src={require('../img/usersubmissions/woodworklibrary.png')}></img>
                    <div className="nameVotes">
                        <div className="names" id="name4" onClick={() => castVote(4,1)}>Calm After the Storm</div>
                        <div className="names" id="name5" onClick={() => castVote(5,1)}>Shelves of Knowledge</div>
                        <div className="names" id="name6" onClick={() => castVote(6,1)}>The Forgotten Room</div>
                    </div>
                    <div className="vf">Pick a name!</div>
                </div>
            </div>

            <div className="post_container">
            <div className="idcontainer">
                    <img className="userlogo" src={require('../img/user3.png')}></img>
                    <b>BasedPeacock7560</b>
                </div>
                <div className="post">
                    <img className="userimage" src={require('../img/usersubmissions/flowerfield.png')}></img>
                    <div className="nameVotes">
                        <div className="names" id="name7" onClick={() => castVote(7,2)}>Serene Moonlight</div>
                        <div className="names" id="name8" onClick={() => castVote(8,2)}>Moonlight in the Field</div>
                        <div className="names" id="name9" onClick={() => castVote(9,2)}>Peaceful Petals</div>
                    </div>
                    <div className="vf">Pick a name!</div>
                </div>
            </div>

            <div className="post_container">
            <div className="idcontainer">
                    <img className="userlogo" src={require('../img/user4.png')}></img>
                    <b>EducatedRhino903</b>
                </div>
                <div className="post">
                    <img className="userimage" src={require('../img/usersubmissions/lonesomegrasshopper.png')}></img>
                    <div className="nameVotes">
                        <div className="names" id="name10" onClick={() => castVote(10,3)}>Field Marshall</div>
                        <div className="names" id="name11" onClick={() => castVote(11,3)}>Lonesome Locust</div>
                        <div className="names" id="name12" onClick={() => castVote(12,3)}>Solitary Dilemma</div>
                    </div>
                    <div className="vf">Pick a name!</div>
                </div>
            </div>

            <div className="post_container">
            <div className="idcontainer">
                    <img className="userlogo" src={require('../img/user5.png')}></img>
                    <b>RoyalSnake101</b>
                </div>
                <div className="post">
                    <img className="userimage" src={require('../img/usersubmissions/templeofskulls.png')}></img>
                    <div className="nameVotes">
                        <div className="names" id="name13" onClick={() => castVote(13,4)}>Valley of the Skulls</div>
                        <div className="names" id="name14" onClick={() => castVote(14,4)}>The Temple of the Damned</div>
                        <div className="names" id="name15" onClick={() => castVote(15,4)}>The Land of the Forgotten</div>
                    </div>
                    <div className="vf">Pick a name!</div>
                </div>
            </div>

            <div className="post_container">
            <div className="idcontainer">
                    <img className="userlogo" src={require('../img/user6.png')}></img>
                    <b>RedPanda11</b>
                </div>
                <div className="post">
                    <img className="userimage" src={require('../img/usersubmissions/computermountains.png')}></img>
                    <div className="nameVotes">
                        <div className="names" id="name16" onClick={() => castVote(16,5)}>Bits and Pieces</div>
                        <div className="names" id="name17" onClick={() => castVote(17,5)}>Windswept Plains</div>
                        <div className="names" id="name18" onClick={() => castVote(18,5)}>Sands of Time</div>
                    </div>
                    <div className="vf">Pick a name!</div>
                </div>
            </div>

            <div className="post_container">
            <div className="idcontainer">
                    <img className="userlogo" src={require('../img/user7.png')}></img>
                    <b>StonedPanda8</b>
                </div>
                <div className="post">
                    <img className="userimage" src={require('../img/usersubmissions/clutteredroom.png')}></img>
                    <div className="nameVotes">
                        <div className="names" id="name19" onClick={() => castVote(19,6)}>Size 7</div>
                        <div className="names" id="name20" onClick={() => castVote(20,6)}>Footprints</div>
                        <div className="names" id="name21" onClick={() => castVote(21,6)}>Stepping on Toes</div>
                    </div>
                    <div className="vf">Pick a name!</div>
                </div>
            </div>

            </body>

        </div>
    )
};

export default Home;