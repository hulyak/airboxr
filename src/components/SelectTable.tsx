import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography
} from "@material-ui/core";

import {
  PageContainer,
  FixedTopBar,
  FixedMiddleBodyWithVerticalScroll,
  TopbarBackButton,
  FixedBottomPominentButton
} from "../layout-components";

const SelectTable = () => {
  const topbarLeftButton: TopbarBackButton = {
    type: "back",
    onClick: () => console.log("Clicked back")
  };
  return (
    <PageContainer>
      <FixedTopBar title="Select table" leftButton={topbarLeftButton} />
      <FixedMiddleBodyWithVerticalScroll>
        <Typography>
          {} has the following tables ready for import.Please select the table
          you would like to import.
        </Typography>

        <FormControl component="fieldset">
          <FormLabel component="legend">Filter</FormLabel>
          <RadioGroup
            aria-label="filter"
            defaultValue="Auidience"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="Audience"
              control={<Radio />}
              label="Audience"
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Campaigns"
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Reports"
            />
          </RadioGroup>
        </FormControl>
      </FixedMiddleBodyWithVerticalScroll>
      <FixedBottomPominentButton
        title="Next"
        onClick={() => console.log("TODO - whatever you want to test/debug")}
      />
    </PageContainer>
  );
};

export default SelectTable;
