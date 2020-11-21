import React from "react";

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";

const InfoCard = ({ imageSrc, altText, copy, copy2, buttonText, url }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={altText}
          height="140"
          image={imageSrc}
        />
        <CardContent>
          <h2>{copy}</h2>
          {copy2 && <p>{copy2}</p>}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href={url} size="small" color="primary">
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
};

export default InfoCard;
