import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  },
  cardContent: {
    width: 300,
    height: 350
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    objectFit: "cover"
  },
  button: {
    fontSize: "1.6rem"
  },
  name: {
    fontSize: "4rem",
    fontWeight: "bold"
  },
  paragraph: {
    fontSize: "1.6rem"
  }
});

const User = props => {
  const classes = useStyles();

  return (
    <>
      {props.user ? (
        <Card className={classes.root}>
          <CardContent className={classes.cardContent}>
            <CardMedia
              className={classes.media}
              image="https://i.pravatar.cc/300"
              title={props.user.name}
            />
            <Typography
              className={classes.name}
              gutterBottom
              variant="h2"
              component="h1"
            >
              {props.user.name}
            </Typography>
            <Typography
              className={classes.paragraph}
              variant="body1"
              component="p"
            >
              {`${props.user.address.street} ${props.user.address.suite}`}
              <br />
              {`${props.user.address.city}, ${props.user.address.zipcode}`}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              className={classes.button}
              size="small"
              color="primary"
              href={props.user.website}
              target="_blank"
            >
              Website
            </Button>
            <Button
              className={classes.button}
              size="small"
              color="primary"
              href={`mailto:${props.user.email}`}
            >
              Contact
            </Button>
          </CardActions>
        </Card>
      ) : null}
    </>
  );
};

export default User;
