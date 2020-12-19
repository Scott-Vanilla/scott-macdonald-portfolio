import React from "react";
import { Grid } from "@material-ui/core";

const Post = (copy1, copy2, imgsrc, alttext) => {
  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={6} sm={6}>
          {copy1 && <div>{copy1}</div>}
          <br />
          {copy2 && <div>{copy2}</div>}
        </Grid>
        {imgsrc &&
        <Grid item xs={6} sm={6}>
          <img src={imgsrc} width="360px" height="640px" alt={alttext} />
        </Grid>
}
      </Grid>
    </div>
  );
};

export default Post;
