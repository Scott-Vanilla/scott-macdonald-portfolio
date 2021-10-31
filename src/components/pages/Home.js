import React from "react";
import FadeIn from "react-fade-in";

import ImageBanner from "components/elements/ImageBanner";
import FeatureBox from "components/elements/FeatureBox"
import imageForBanner from "assets/banner.png";
import devtext from "assets/developertext.jpg";
import pi1 from "assets/pi1.png";

const Home = () => {
  return (
    <div className="portfolio-homepage">
      <FadeIn delay={400} transitionDuration={800}>
        <ImageBanner
          bannerImage={imageForBanner}
          altText="Picture of me and a collegue pair programming."
        />
        <div className="portfolio-homepage__text">
          <img src={devtext} alt="Liverpool Based Developer" />
        </div>
        <FeatureBox img={pi1} copy="Click here to read more..."/>
      </FadeIn>
    </div>
  );
};

export default Home;
