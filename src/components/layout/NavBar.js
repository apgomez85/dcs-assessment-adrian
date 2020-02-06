import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "white",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "black",
    fontSize: "2rem",
    alignItems: "center",
    margin: 0
  }
});

const NavBar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.root} position="static">
        <Toolbar>
          <Typography variant="inherit">DCS Assessment - User Cards</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
