import React from "react";
import { Grid, Container } from "@material-ui/core";
import FadeIn from "react-fade-in";

import InfoCard from "components/elements/InfoCard";
import greyAudi1 from "assets/greyaudi1.jpg";
import greyAudi2 from "assets/greyaudi2.jpg";
import greyAudi3 from "assets/greyaudi3.jpg";
import audiTitle from "assets/audititle.jpg";

const Clients = () => {
  return (
    <div className="portfolio-audi">
      <FadeIn delay={400} transitionDuration={800}>
        <div className="portfolio-audi__title">
        <img src={audiTitle} alt="Working at IBM: Audi Digital Studio" />
        </div>
        <div className="portfolio-audi__copy">
          <p>
            Over the course of working at IBM, the project I was based on was
            the Audi Digital Studio. This project focused on creating new
            digital experiences for Audi customers. Over the course of my time
            on this project I learnt React.js and plenty other languages (both
            FE and BE). I also learnt how to work as part of a Scrum team and
            work in an agile manner.
          </p>
        </div>
        <Container maxWidth="xl">
          <div className="portfolio-audi__card">
            <Grid container spacing={6}>
              <Grid item xs={6} sm={4}>
                <InfoCard
                  imageSrc={greyAudi1}
                  altText="Part Exchange Homepage"
                  copy="Part Exchange"
                  buttonText="Go to site..."
                  url="audi.co.uk/part-exchange-calculator.html#/"
                />
              </Grid>
              <Grid item xs={6} sm={4}>
                <InfoCard
                  imageSrc={greyAudi2}
                  altText="Quote my Audi Homepage"
                  copy="Quote My Audi"
                  buttonText="Go to site..."
                  url="https://www.audi.co.uk/finance-calculator.html#/"
                />
              </Grid>
              <Grid item xs={6} sm={4}>
                <InfoCard
                  imageSrc={greyAudi3}
                  altText="Request A Callback"
                  copy="Request A Callback"
                  buttonText="Go to site..."
                  url="https://www.audi.co.uk/call-me-back.html#/"
                />
              </Grid>
            </Grid>
          </div>
        </Container>
      </FadeIn>
    </div>
  );
};

export default Clients;
