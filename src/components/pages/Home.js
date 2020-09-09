import React from "react";

import ImageBanner from "components/elements/ImageBanner";
import imageForBanner from "assets/banner.png";

const Home = () => {
  return (
    <div className="portfolio-homepage">
      <ImageBanner
        bannerImage={imageForBanner}
        altText="Picture of me and a collegue pair programming."
      />
    </div>
  );
};

export default Home;
