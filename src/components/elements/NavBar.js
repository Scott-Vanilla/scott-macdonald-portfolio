import React from "react";
import { Paper, Tab, Tabs, Grid } from '@material-ui/core';

const NavBar = () => {
    return (
        <Grid>
            <Grid item lg={12}>
                <Paper square>
                    <Tabs aria-label="navigation bar">
                        <Tab href={process.env.PUBLIC_URL + "/"} label="Home" />
                        <Tab href={process.env.PUBLIC_URL + "/audi"} label="Audi" />
                        <Tab href={process.env.PUBLIC_URL + "/socials"} label="Social Links" />
                    </Tabs>
                </Paper>
            </Grid>
        </Grid >
    )
}

export default NavBar;