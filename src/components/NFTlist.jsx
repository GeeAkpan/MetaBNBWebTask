import React from 'react';
import './NFTlist.css';
import { marketPlace } from '../objects/Objects.js';
import Star from '../assets/Star.png'

const NFTlist = () => {
  return (
    <div className='metanft' id='nft-collection'>
        <h1>Inspiration for your next adventure</h1>

        <div className='nft-marketplace'>
            { marketPlace.map((info, idn) =>{
                let { img, firstline, secondline } = info;
                return(
                    <div key={idn} className="marketplaceinfo">
                        <img src={img} className="marketplaceimg" alt="" />

                        <div className='firstline'>
                            <span className='left'>
                                {firstline.left}
                            </span>
                            <span className='left'>
                                {firstline.right}
                            </span>
                        </div>

                        <div className='secondline'>
                            <span className='left'>
                                {secondline.left}
                            </span>
                            <span className='left'>
                                {secondline.right}
                            </span>
                        </div>

                        <div className='star'>
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                        </div>
                    </div>
                )
            }) }
        </div>
    </div>
  )
}

export default NFTlist