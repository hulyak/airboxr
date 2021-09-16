import React from "react";
import { Typography } from "@material-ui/core";
import {
  PageContainer,
  FixedTopBar,
  FixedMiddleBodyWithVerticalScroll,
  TopbarBackButton
} from "../layout-components";

const SelectSource = () => {
  const topbarLeftButton: TopbarBackButton = {
    type: "back",
    onClick: () => console.log("Clicked back")
  };

  return (
    <PageContainer>
      <FixedTopBar title="Select Source" leftButton={topbarLeftButton} />
      <FixedMiddleBodyWithVerticalScroll>
        <Typography>
          Below is a list of sources you have connected. Please choose the data
          source you would like to import data from.
        </Typography>
      </FixedMiddleBodyWithVerticalScroll>
    </PageContainer>
  );
};

export default SelectSource;
