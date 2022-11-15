import React from "react";
import "./NFTMarketplace.css";
import star from "../assets/Star.png";
import { marketPlaceInfo } from "../objects/ObjectTSP.js";

const PtsNft = () => {
  return (
    <>
      <div className="metabnb__nft">
        <div className="metabnb__nft-marketplace">
          {marketPlaceInfo.map((info, idx) => {
            let { img, firstline, secondline } = info;

            return (
              <div key={idx} className="metabnb__nft-marketplace-info">
                <img src={img} alt="" />

                <div className="firstLine">
                  <span className="left">{firstline.left}</span>
                  <span className="right">{firstline.right}</span>
                </div>

                <div className="secondLine">
                  <span className="left">{secondline.left}</span>
                  <span className="right">{secondline.right}</span>
                </div>

                <div className="star">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PtsNft;