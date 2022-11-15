import React from 'react';
import './LearnMore.css';
import stackedImg from '../assets/ImageGroup.png'

const LearnMore = () => {
  return (
    <div className='metabnb__discover' id='discover'>
      <div className="metabnb__discover-info">
        <h1>Metabnb NFTs</h1>
        <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
        <a href="#">Learn more</a>
      </div>
      <div className="metabnb__discover-img">
        <img src={stackedImg} alt="" />
      </div>
    </div>
  )
}

export default LearnMore