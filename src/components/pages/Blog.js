import React from "react";
import { Grid, Container } from "@material-ui/core";

import InfoCard from "components/elements/InfoCard";
import nfc1 from "assets/nfc1.png";

const Blog = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <div className="portfolio-audi__card">
          <Grid container spacing={6}>
            <Grid item xs={6} sm={6}>
              <InfoCard
                imageSrc={nfc1}
                altText="Man using his phone NFC"
                copy="Project: Using NFC in a Smarthome (Planning)"
                copy2="This short project of mine discusses the use of NFC in my smarthome. This particular post is the planning of this project."
                buttonText="Read More ..."
                url=""
              />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
