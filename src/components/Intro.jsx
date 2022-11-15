import React from 'react'
import ReactDOM from "react-dom";
import './Intro.css';
import InfoPicture from '../assets/Group 4028.png';

const Intro = () => {
      return(
          <div className="intro-section">
              <div className="intro-info">
                    <h1>
                        Rent a <span className="infoColor">Place</span> away from <span className="infoColor">Home</span> in the <span className="infoColor">Metaverse</span>.
                    </h1>
                    <div>
                        <p>
                            We provide you access to luxury and affordable houses in the metaverse, 
                            get a chance to turn your imagination to reality at your comfort zone.
                        </p>           
                    </div>
                    <div className="form">
                        <input type="text" placeholder="Search for location" name="Search" />
                        <button type="Submit">Search</button>
                    </div>
              </div>
              <div className="intro-picture">
                    <img src={InfoPicture} alt="Information Picture" />
              </div>
          </div>
      )
}

export default Intro;