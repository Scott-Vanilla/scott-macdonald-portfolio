import React from "react";
import { Grid, Card, CardContent } from "@material-ui/core";

const Post = ({ copy1, copy2, imgsrc, alttext, title}) => {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={1} sm={1} />
        <Grid item xs={5} sm={5}>
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
          </CardContent>
          </Card>
        </Grid>
        {imgsrc && (
          <Grid item xs={6} sm={5}>
            <img src={imgsrc} width="360px" height="640px" alt={alttext} />
          </Grid>
        )}
        <Grid item xs={1} sm={1} />
      </Grid>
    </div>
  );
};

export default Post;
