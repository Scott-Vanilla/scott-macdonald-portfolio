import React from "react";
import { Grid, Container } from "@material-ui/core";
import FadeIn from "react-fade-in";

import InfoCard from "components/elements/InfoCard";
import image3 from "assets/blog3.png";

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
                  copy="Collaboration Project: Pokedex Single Page Application Using PokeAPI"
                  copy2="This short project is the development of a pokedex SPA using the PokeAPI with friend and fellow developer Brandon Dawe (Github: Brandon-Wedon)."
                  buttonText="Read More ..."
                  url="/scott-macdonald-portfolio/#/post3"
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
