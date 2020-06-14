import React from "react"
import { Grid, GridList, GridListTile, Container } from "@material-ui/core"

import InfoCard from "components/elements/InfoCard"
import Banner from "assets/banner.jpg"
import QMA from "assets/qma.png"
import PX from "assets/px.png"

//Grid List Images Imports
import Event1 from "assets/hq-pics/events1.png"
import Event2 from "assets/hq-pics/events2.png"
import Event4 from "assets/hq-pics/event4.png"
import Event5 from "assets/hq-pics/event5.png"

const Audi = () => {
    return (
        <div className="portfolio-audi">
            <div className="portfolio-audi__copy">
                <h2> Working at IBM: Audi Digital Studio</h2>
                <p>
                    Over the course of working at IBM, the project I was based on was the Audi Digital Studio.
                    This project focused on creating new digital experiences for Audi customers.
                    Over the course of my time on this project I learnt React.js and plenty other languages (both FE and BE).
                    I also learnt how to work as part of a Scrum team and work in an agile manner.
                </p>
            </div>
            <Container maxWidth="xl">

                <div className="portfolio-audi__card">
                    <Grid container spacing={6}>
                        <Grid item xs={6} sm={3}>
                            <InfoCard imageSrc={PX} altText="Part Exchange Homepage" copy="Part Exchange" buttonText="Learn More..." />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <InfoCard imageSrc={QMA} altText="Quote my Audi Homepage" copy="Quote My Audi" buttonText="Learn More..." />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <InfoCard imageSrc={Banner} altText="Request A Callback" copy="Request A Callback - TBC" buttonText="Learn More..." />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <InfoCard imageSrc={Banner} altText="Smaller Projects OSB" copy="Smaller Projects" buttonText="Learn More..." />
                        </Grid>
                    </Grid>
                </div>
                <div className="portfolio-audi__photos">
                    <GridList cellHeight={600} cols={4}>
                        <GridListTile >
                            <img src={Event1} alt="events from audi" />
                        </GridListTile>
                        <GridListTile >
                            <img src={Event2} alt="events from audi" />
                        </GridListTile>
                        <GridListTile >
                            <img src={Event4} alt="events from audi" />
                        </GridListTile>
                        <GridListTile >
                            <img src={Event5} alt="events from audi" />
                        </GridListTile>
                        )}
            </GridList>
                </div>
            </Container>
        </div>
    )
}

export default Audi