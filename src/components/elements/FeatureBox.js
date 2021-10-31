import React from "react";

const FeatureBox = ({copy, img},...additonalProps) => {
  return (
    <div className="feature-box">
        <div style={{backgroundImage: `url(${img})`}} className="feature-box__content"/>
          <a className="feature-box__link" href="/scott-macdonald-portfolio/">
      <div className="feature-box__overlay">
          {copy}
      </div>
      </a>
    </div>
  );
};

export default FeatureBox;
