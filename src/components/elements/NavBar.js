import React from "react";
import { Tab, Tabs, Grid } from "@material-ui/core";
import logoImage from "assets/logobanner1.jpg"

const NavBar = () => {
  return (
    <div>
      <div className="logo-banner">
        <Grid container spacing={12}>
          <Grid item lg={12}><a href="/scott-macdonald-portfolio/"><img id="logo" alt="calligraphy text logo saying scott macdonald" src={logoImage}/></a></Grid>
        </Grid>
      </div>
      <div className="navigation">
        <Grid container spacing={12}>
          <Grid item lg={3} />

          <Grid item lg={6}>
            <div className="nav-bar">
              <Tabs centered aria-label="navigation bar">
                <Tab href={"/scott-macdonald-portfolio/"} label="Home" />
                <Tab href={"/scott-macdonald-portfolio/#/about"} label="About" />
                <Tab href={"/scott-macdonald-portfolio/#/clients"} label="Clients" />
                <Tab
                  href={"/scott-macdonald-portfolio/#/projects"}
                  label="Projects"
                />
              </Tabs>
            </div>
          </Grid>
          <Grid item lg={3} />
        </Grid>
      </div>
    </div>
  );
};

export default NavBar;
