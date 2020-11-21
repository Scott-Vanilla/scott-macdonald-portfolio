import React from "react";
import { Grid, Container } from "@material-ui/core";

import InfoCard from "components/elements/InfoCard";

const Blog = () => {

return(
<div>

<Container maxWidth="xl">
        <div className="portfolio-audi__card">
            <Grid container spacing={6}>
                <Grid item xs={6} sm={6}>
                    <InfoCard />
                 </Grid>
                <Grid item xs={6} sm={6}>
                    <InfoCard />
                </Grid>
            </Grid>
        </div>
</Container>

</div>
)

}

export default Blog;