import React from "react";
import { Grid, Button, ButtonGroup } from "@material-ui/core";

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
              <ButtonGroup orientation="vertical" aria-label="small outlined button group">
              <Button href="https://www.instagram.com/scottvanillamacdonald/">Instagram</Button>
              <Button href="https://www.facebook.com/scottmacdonaldhughes">Facebook</Button>
              <Button href="https://www.youtube.com/channel/UC2l1PCGsL2OchtglYLpvWIw">Youtube</Button>
              <Button href="https://drive.google.com/file/d/136bFA2wj-ZptQ_kPvlL0MgM3xNfHqHWp/view?usp=sharing">Download CV</Button>
            </ButtonGroup>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default AboutSection;
