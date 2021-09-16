import { Typography, Button, Box, IconButton } from "@material-ui/core";
import React from "react";
import UseFetch from "./hooks/UseFetch";
import { API_BASE_URL } from "./api/config.js";
import SelectSource from "./components/SelectSource";
import {
  PageContainer,
  FixedTopBar,
  FixedMiddleBodyWithVerticalScroll,
  FixedBottomPominentButton,
  TopbarBackButton
} from "./layout-components";
import _ from "lodash";

export default ExamplePage = () => {
  const { data, error, isLoading, setUrl } = UseFetch();

  const getContent = () => {
    if (error) return <h2>Error when fetching: {error}</h2>;
    if (!data && isLoading) return <h2>LOADING...</h2>;
    if (!data) return null;
    return;
  };

  const topbarLeftButton: TopbarBackButton = {
    type: "back",
    onClick: () => console.log("Clicked back")
  };

  return (
    <PageContainer>
      <FixedTopBar title="Example Page Title" leftButton={topbarLeftButton} />
      <FixedMiddleBodyWithVerticalScroll>
        <SelectSource onSearch={() => setUrl(`${API_BASE_URL}`)} />
        {getContent()}
      </FixedMiddleBodyWithVerticalScroll>
      <FixedBottomPominentButton
        title="Test / Debug"
        onClick={() => console.log("TODO - whatever you want to test/debug")}
      />
    </PageContainer>
  );
};
