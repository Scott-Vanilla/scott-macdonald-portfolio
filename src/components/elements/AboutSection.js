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
              <Button target="_blank" href="https://www.instagram.com/scottvanillamacdonald/">Instagram</Button>
              <Button target="_blank" href="https://www.linkedin.com/in/scott-m-8a6274105/">LinkedIn</Button>
              <Button target="_blank" href="https://www.youtube.com/channel/UC2l1PCGsL2OchtglYLpvWIw">Youtube</Button>
              <Button target="_blank" href="https://drive.google.com/file/d/136bFA2wj-ZptQ_kPvlL0MgM3xNfHqHWp/view?usp=sharing">Download CV</Button>
            </ButtonGroup>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default AboutSection;
