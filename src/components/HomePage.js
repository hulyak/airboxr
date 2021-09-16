import React from "react";
import { Typography, Button, Box, IconButton } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {
  PageContainer,
  FixedTopBar,
  FixedMiddleBodyWithVerticalScroll
} from "../layout-components";

const HomePage = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/source");
  };
  return (
    <PageContainer>
      <Box p={2}>
        <FixedTopBar title="What would you like to do today?" />
      </Box>
      <FixedMiddleBodyWithVerticalScroll>
        <Typography variant="h3">
          Welcome to Airboxr. Let's start with the task you want to accomplish
          today.
        </Typography>

        <Button variant="outlined" color="primary" onClick={handleClick}>
          Import Data
        </Button>

        {/* <Redirect to="/source"> */}
        <Button variant="outlined" color="secondary">
          Lookup Data
        </Button>
        {/* </Redirect> */}
      </FixedMiddleBodyWithVerticalScroll>
    </PageContainer>
  );
};

export default HomePage;
