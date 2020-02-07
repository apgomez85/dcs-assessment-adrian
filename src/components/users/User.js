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
  //Remove this styling if want to resize card depending on its content
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

  const { name, address, website, email } = props.user;

  return (
    <>
      {props.user ? (
        <Card className={classes.root}>
          <CardContent className={classes.cardContent}>
            <CardMedia
              className={classes.media}
              //Random pic API
              image="https://i.pravatar.cc/300"
              title={name}
            />
            <Typography
              className={classes.name}
              gutterBottom
              variant="h2"
              component="h1"
            >
              {name}
            </Typography>
            <Typography
              className={classes.paragraph}
              variant="body1"
              component="p"
            >
              {`${address.street} ${address.suite}`}
              <br />
              {`${address.city}, ${address.zipcode}`}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              className={classes.button}
              size="small"
              color="primary"
              href={website}
              target="_blank"
            >
              Website
            </Button>
            <Button
              className={classes.button}
              size="small"
              color="primary"
              href={`mailto:${email}`}
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
