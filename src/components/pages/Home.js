import React from "react";

import ImageBanner from "components/elements/ImageBanner";
import imageForBanner from "assets/banner.png";
import devtext from "assets/developertext.jpg";

const Home = () => {
  return (
    <div className="portfolio-homepage">
      <ImageBanner
        bannerImage={imageForBanner}
        altText="Picture of me and a collegue pair programming."
      />
      <div className="portfolio-homepage__text">

        <img src={devtext} alt="Liverpool Based Developer"/>

      </div>
    </div>
    
  );
};

export default Home;
