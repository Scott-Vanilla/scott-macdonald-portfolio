import React from "react";
import { Grid } from "@material-ui/core";

const AboutSection = ({
  imgSrc,
  altText,
  title,
  copy1,
  copy2,
  copy3,
  isHome,
  isSocial,
}) => {
  return (
    <div className="about-section">
      <div className="about-section__avatar">
        <Grid container spacing={12}>
          <Grid item sm={12}>
            {imgSrc && <img alt={altText} src={imgSrc} />}
          </Grid>
        </Grid>
      </div>
      <Grid container spacing={12}>
        <Grid item sm={12}>
          <div className="about-section__copy">
            <h1> {title} </h1>
            {isHome && (
              <div>
                <h3> {copy1} </h3>
                <h3> {copy2} </h3>
                <h3> {copy3} </h3>
              </div>
            )}
            {isSocial && (
              <div>
                <h3>
                  <a href="https://www.instagram.com/scottvanillamacdonald/">
                    {" "}
                    Instagram{" "}
                  </a>
                </h3>
                <h3>
                  <a href="https://twitter.com/scottmac_dev">Twitter</a>
                </h3>
                <h3>
                  <a href="https://www.facebook.com/scottmacdonaldhughes">
                    Facebook
                  </a>
                </h3>
                <h3>
                  <a href="https://www.youtube.com/channel/UC2l1PCGsL2OchtglYLpvWIw">
                    YouTube
                  </a>
                </h3>
              </div>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default AboutSection;
