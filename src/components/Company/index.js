import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardMedia,
  CardActionArea,
  CardActions,
  Typography,
  CardContent,
  Button,
  Grid
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
const useStyles = makeStyles({
  root: {
    padding: "2rem"
  },
  media: {
    "& img": {
      objectFit: "none"
    }
  }
});

export default function Company(props) {
  const classes = useStyles();
  const { id, company, quote, rating, logo } = props;
  return (
    <Grid container spacing={1} className={classes.root}>
      <Grid item xs={4}>
        <Typography gutterBottom variant="h5">
          #{id} {company}
        </Typography>
        <CardActionArea className={classes.media}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            image={logo}
            title="Contemplative Reptile"
            height="140"
          />
        </CardActionArea>
      </Grid>
      <Grid item xs={8}>
        <CardActions>
          <CardContent>
            <div className={classes.rating}>
              <Rating
                name="half-rating-read"
                defaultValue={rating}
                precision={1}
                readOnly
              />
            </div>
            <Typography variant="body2" color="textSecondary" component="p">
              {quote}
            </Typography>
          </CardContent>
        </CardActions>
      </Grid>
    </Grid>
  );
}