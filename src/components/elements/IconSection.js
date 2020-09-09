import React from "react";
import { Grid, Paper } from "@material-ui/core";

import uniIcon from "assets/icons/uni-icon.png";
import pdfIcon from "assets/icons/pdf-icon.png";

const IconSection = () => {
  return (
    <div className="icon-section">
      <Grid container spacing={12}>
        <Grid item sm={3}>
          <div className="icon-section__icon-one">
            <Paper elevation={3}>
              <Grid container spacing={12}>
                <Grid item sm={3}>
                  <img src={uniIcon} />
                </Grid>
                <Grid item sm={9}>
                  <h3>
                    Liverpool John Moores University - Computer Science Bsc
                  </h3>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Grid>
        <Grid item sm={3}>
          <div className="icon-section__icon-one">
            <Paper elevation={3}>
              <Grid container spacing={12}>
                <Grid item sm={3}>
                  <img src={uniIcon} />
                </Grid>
                <Grid item sm={9}>
                  <h3>
                    Liverpool John Moores University - Computer Science Bsc
                  </h3>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Grid>
        <Grid item sm={3}>
          <div className="icon-section__icon-two">
            <Paper elevation={3}>
            <Grid container spacing={12}>
              <Grid item sm={3}>
                <img src={pdfIcon} />
              </Grid>
              <Grid item sm={9}>
                <a href="https://drive.google.com/file/d/136bFA2wj-ZptQ_kPvlL0MgM3xNfHqHWp/view?usp=sharing">
                <h3>
                  Download CV Here
                  </h3>

                </a>
              </Grid>
            </Grid>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default IconSection;
