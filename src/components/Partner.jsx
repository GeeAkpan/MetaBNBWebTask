import React from 'react';
import './Partner.css';
import MBToken from '../assets/Group 59537.png';
import MetaMask from '../assets/Group 4040.png';
import Opensea from '../assets/Frame 4041.png';

const Partner = () => {
  return (
    <div className='partner-list'>
        <div className='mbtoken-show'>
            <img src={MBToken} alt="MetawebTOken" />
        </div>
        <div className='mbtoken-show'>
            <img src={MetaMask} alt="Metamask" />
        </div>
        <div className='mbtoken-show'>
            <img src={Opensea} alt="Opensea" />
        </div>
    </div>
  )
}

export default Partner