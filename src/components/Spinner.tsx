import { Typography, Box } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

export const Spinner = () => {
  const useStyles = makeStyles(() => ({
    spinner: {
      margin: "auto",
      textAlign: "center",
    },
    text: {
      textAlign: "center",
      paddingTop: "20px",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.spinner}>
      <CircularProgress aria-busy="true" />
      <Typography className={classes.text} variant="h3">
        Loading...
      </Typography>
    </div>
  );
};
