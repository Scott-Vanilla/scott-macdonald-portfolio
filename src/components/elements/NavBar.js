import React from "react";
import { Paper, Tab, Tabs, Grid } from '@material-ui/core';

const NavBar = () => {
    return (
        <Grid>
            <Grid item lg={12}>
                <Paper square>
                    <Tabs aria-label="navigation bar">
                        <Tab href={"/"} label="Home" />
                        <Tab href={"/audi"} label="Audi" />
                        <Tab href={"/socials"} label="Social Links" />
                    </Tabs>
                </Paper>
            </Grid>
        </Grid >
    )
}

export default NavBar;