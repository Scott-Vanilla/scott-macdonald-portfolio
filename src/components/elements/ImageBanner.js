import React from "react";
import { Grid } from "@material-ui/core";

const ImageBanner = ({bannerImage, altText}) => {
  return (
    <div className="image-banner">
      <Grid container spacing={12}>
        <Grid item sm={1} />
        <Grid item sm={10}>
          <img src={bannerImage} alt={altText}/>
        </Grid>
      </Grid>
      <Grid item sm={1} />
    </div>
  );
};

export default ImageBanner;
