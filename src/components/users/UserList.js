import React, { useState, useEffect } from "react";
import User from "./User";
import { Grid, Button, Container } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    margin: "3rem",
    fontSize: "1.6rem"
  },
  alert: {
    fontSize: "1.6rem"
  }
});

const UserList = () => {
  const classes = useStyles();

  const [users, setUsers] = useState([]);

  //Fetch random user with ID 1-10 or display alert if error
  const getUser = async () => {
    try {
      let randomUserId = Math.floor(Math.random() * 10) + 1;

      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${randomUserId}`
      );
      const user = await res.json();
      setUsers([...users, user]);
    } catch (error) {
      let alert = document.getElementById("user-alert");
      alert.style.display = "block";
      setTimeout(function() {
        alert.style.display = "none";
      }, 5000);
    }
  };

  //Clear Users from state
  const removeUsers = () => {
    setUsers([]);
  };

  //Get User on load
  useEffect(() => {
    getUser();
  }, []);

  return (
    <Container maxWidth={false}>
      {users ? (
        <Grid container direction="row" justify="center" alignItems="center">
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={getUser}
          >
            Add User
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            onClick={removeUsers}
          >
            Clear List
          </Button>

          <Grid
            container
            spacing={2}
            direction="row"
            justify="center"
            alignItems="center"
          >
            {users.map(user => (
              <Grid item key={user.id}>
                <User user={user} />
              </Grid>
            ))}
          </Grid>
          <div id="user-alert" style={{ display: "none" }}>
            <Alert className={classes.alert} severity="error">
              <AlertTitle className={classes.alert}>Error</AlertTitle>
              There was an error fetching the data.
            </Alert>
          </div>
        </Grid>
      ) : null}
    </Container>
  );
};

export default UserList;
