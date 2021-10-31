import React from "react";
import { Grid, Card, CardContent } from "@material-ui/core";
import FadeIn from "react-fade-in/lib/FadeIn";

const Post = ({ copy1, copy2, imgsrc, alttext, title, copy3, copy4}) => {
  return (
    <div>
      <FadeIn delay={400} transitionDuration={800}>

      <Grid container spacing={1}>
        <Grid item xs={1} sm={1} />
        <Grid item xs={7} sm={7}>
        <Card >
        <CardContent>
          <h1>{title}</h1>
          {copy1 && (
            <div>
              <b>{copy1}</b>
            </div>
          )}
          <br />
          {copy2 && <div>{copy2}</div>}
          <br />
          {copy3 && <div>{copy3}</div>}
          <br />
          {copy4 && <div>{copy4}</div>}
          </CardContent>
          </Card>
        </Grid>
        {imgsrc && (
          <Grid item xs={3} sm={3}>
            <img src={imgsrc} width="360px" height="640px" alt={alttext} />
          </Grid>
        )}
        <Grid item xs={1} sm={1} />
      </Grid>
        </FadeIn>
    </div>
  );
};

export default Post;
