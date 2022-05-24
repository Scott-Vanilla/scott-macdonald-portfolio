import React from "react";
import FadeIn from "react-fade-in";

import ImageBanner from "components/elements/ImageBanner";
import imageForBanner from "assets/banner.png";

const Home = () => {
  return (
    <div className="portfolio-homepage">
      <FadeIn delay={400} transitionDuration={800}>
        <ImageBanner
          bannerImage={imageForBanner}
          altText="Picture of me and a collegue pair programming."
        />
      </FadeIn>
    </div>
  );
};

export default Home;
