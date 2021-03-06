import { Typography, Button, Box, IconButton } from "@material-ui/core";
import React from "react";

import {
  PageContainer,
  FixedTopBar,
  FixedMiddleBodyWithVerticalScroll,
  FixedBottomPominentButton,
  TopbarBackButton,
} from "./layout-components";
import _ from "lodash";

const ExamplePage: React.FC = () => {
  const topbarLeftButton: TopbarBackButton = {
    type: "back",
    onClick: () => console.log("Clicked back"),
  };

  return (
    <PageContainer>
      <FixedTopBar title="Example Page Title" leftButton={topbarLeftButton} />
      <FixedMiddleBodyWithVerticalScroll></FixedMiddleBodyWithVerticalScroll>
      <FixedBottomPominentButton
        title="Test / Debug"
        onClick={() => console.log("TODO - whatever you want to test/debug")}
      />
    </PageContainer>
  );
};

export default ExamplePage;
