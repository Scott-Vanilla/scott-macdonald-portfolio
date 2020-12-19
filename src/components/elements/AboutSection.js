import React from "react";
import { Grid } from "@material-ui/core";

const AboutSection = ({
  imgSrc,
  altText,
  title,
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
            {isSocial && (
              <div>
                <h3>
                  <a href="https://www.instagram.com/scottvanillamacdonald/">
                    {" "}
                    Instagram{" "}
                  </a>
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
                <h3>
                  <a href="https://drive.google.com/file/d/136bFA2wj-ZptQ_kPvlL0MgM3xNfHqHWp/view?usp=sharing">
                    Download CV
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
