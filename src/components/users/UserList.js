import React, { useState } from "react";
import User from "./User";
import { Grid, Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    margin: "3rem",
    fontSize: "1.6rem"
  }
});

const UserList = () => {
  const classes = useStyles();

  const [users, setUsers] = useState([]);

  async function getUser() {
    let randomUserId = Math.floor(Math.random() * 10) + 1;

    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${randomUserId}`
    );
    const json = await res.json();
    setUsers([json]);
  }

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
            Change User
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
        </Grid>
      ) : null}
    </Container>
  );
};

export default UserList;
