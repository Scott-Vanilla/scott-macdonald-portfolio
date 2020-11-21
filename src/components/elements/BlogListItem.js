import React from "react";

import { Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from "@material-ui/core"

const BlogListItem = ({ imageSrc, altText, copy, buttonText,url }) => {

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
                    <h2>
                        {copy}
                    </h2>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button href={url} size="small" color="primary">
                    {buttonText}
                </Button>
            </CardActions>
        </Card>)

}

export default BlogListItem;