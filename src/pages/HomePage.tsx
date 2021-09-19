import React, { useEffect } from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  PageContainer,
  FixedMiddleBodyWithVerticalScroll,
} from "../layout-components";

const HomePage: React.FunctionComponent = () => {
  const history = useHistory();

  const useStyles = makeStyles(() => ({
    space: {
      marginBottom: "1.2em",
      marginTop: "2.5em",
    },
    heading: {
      margin: ".4em",
    },
  }));

  const classes = useStyles();

  useEffect(() => {
    fetch(`https://api.airboxr.com/auth/loginWithEmail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "applicant@airboxr.com",
        password: "ZUSrS5jSZDvEPTyX",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.accessToken);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <PageContainer>
      <Typography variant="h1" className={classes.heading}>
        What would you like to do today?
      </Typography>
      <FixedMiddleBodyWithVerticalScroll>
        <Typography variant="h3" className={classes.space}>
          Welcome to Airboxr. Let's start with the task you want to accomplish
          today.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => history.push("/source")}
              fullWidth
            >
              Import Data
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => history.push("/source")}
              fullWidth
            >
              Lookup Data
            </Button>
          </Grid>
        </Grid>
      </FixedMiddleBodyWithVerticalScroll>
    </PageContainer>
  );
};

export default HomePage;
