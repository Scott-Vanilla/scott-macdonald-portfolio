import React from "react";
import { Paper, Tab, Tabs, Grid } from '@material-ui/core';

const NavBar = () => {
    return (
        <Grid>
            <Grid item lg={12}>
                <Paper square>
                    <Tabs aria-label="navigation bar">
                        <Tab href={"/scott-macdonald-portfolio/"} label="Home" />
                        <Tab href={"/scott-macdonald-portfolio/#/audi"} label="Audi" />
                        <Tab href={"/scott-macdonald-portfolio/#/socials"} label="Social Links" />
                    </Tabs>
                </Paper>
            </Grid>
        </Grid >
    )
}

export default NavBar;