import React from "react";
import { Chat, Home } from "@material-ui/icons";
import { Typography, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import "../styles.css";

const Header = () => {
  const history = useHistory();

  const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: "lightgray",
      marginBottom: "1.5em",
      padding: "3px 5px",
    },
    space: {
      paddingLeft: "1em",
    },
    flex: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Box className={classes.flex}>
        <Button
          onClick={() => history.push("/")}
          variant="text"
          color="secondary"
        >
          <Home />
        </Button>
        <Box className={classes.flex}>
          <Button color="secondary">
            <Chat />
            <Typography className={classes.space} variant="h4">
              Chat{" "}
            </Typography>
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Header;
