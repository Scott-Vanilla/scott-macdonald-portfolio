import React from "react";
import { Grid, Container } from "@material-ui/core";
import FadeIn from "react-fade-in";

import InfoCard from "components/elements/InfoCard";
import image3 from "assets/blog3.png";
import image2 from "assets/pi1.png";

const Blog = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <div className="portfolio-audi__card">
          <FadeIn delay={400} transitionDuration={800}>
            <Grid container spacing={6}>
              <Grid item xs={6} sm={6}>
                <InfoCard
                  imageSrc={image3}
                  altText="Man using his phone NFC"
                  copy="LJMU Dissertation - Covid-19 Tracking Web Application"
                  copy2="Across the course of my final year in university, I embarked on a project to standardise pandemic tracking data through the use of a web-application."
                  buttonText="Read More ..."
                  url="/scott-macdonald-portfolio/#/post3"
                  dateCreated="20/08/21"
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <InfoCard
                  imageSrc={image2}
                  altText="Man using his phone NFC"
                  copy="Vanilla Bon Bon - Business Web Application"
                  copy2="As many people know, another passion of mine is my drag artistry. It came to my attention that many queens had websites to host their showreels, bookings etc. So I decided to create one for myself."
                  buttonText="Read More ..."
                  url="/scott-macdonald-portfolio/#/post3"
                  dateCreated="30/12/21"
                />
              </Grid>
            </Grid>
          </FadeIn>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
