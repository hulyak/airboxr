import React, { useCallback, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header";
import { useHistory, useParams } from "react-router-dom";
import { useSourceContext } from "../components/DataSource";
import Alert from "@material-ui/lab/Alert";
import { Spinner } from "../components/Spinner";

import {
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";

import {
  PageContainer,
  FixedTopBar,
  FixedMiddleBodyWithVerticalScroll,
  TopbarBackButton,
  FixedBottomPominentButton,
} from "../layout-components";
import { useTable } from "../hooks/useTable";

const SelectTablePage: React.FunctionComponent = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [checked, setChecked] = useState(false);

  const { name } = useParams();
  const history = useHistory();

  const options = useSourceContext();
  const { tableOptions } = options;

  const thisTable = tableOptions.find((service) => service.name === name);

  const { data, isLoading, error } = useTable(name);

  // console.log(options, "options");

  // console.log(tableOptions, "options");
  // for (const k in tableOptions) {
  //   console.log(k);
  // }

  tableOptions.map((value, index) => {
    console.log(value.tables, "value");
  });

  tableOptions.map((value, index) => {
    const { tables } = value;
    tables.map((title, index) => {
      console.log(title, "title");
    });
  });

  tableOptions.filter((tableName) => {
    return tableName.name;
  });

  const handleOptionChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedOption((event.target as HTMLInputElement).value);
      setChecked(true);
    },
    []
  );

  const useStyles = makeStyles(() => ({
    space: {
      marginBottom: "1.2em",
      marginTop: "1.5em",
    },
  }));

  const classes = useStyles();

  const topbarLeftButton: TopbarBackButton = {
    type: "back",
    onClick: () => history.goBack(),
  };

  // tableOptions.filter((tableName) => {});
  return (
    <PageContainer>
      <Header />
      <FixedTopBar title="Select table" leftButton={topbarLeftButton} />
      <FixedMiddleBodyWithVerticalScroll>
        {tableOptions.filter((tableName) => {
          <Typography>{tableName.name}</Typography>;
        })}
        <Typography variant="h3" className={classes.space}>
          has the following tables ready for import.Please select the table you
          would like to import.
        </Typography>

        <FormControl component="fieldset">
          <InputLabel htmlFor="component-simple">Filter</InputLabel>
          <Input id="component-simple" />

          <RadioGroup
            aria-label="filter"
            name="radio-buttons-group"
            onChange={handleOptionChange}
            value={selectedOption}
          >
            {isLoading ? (
              <Spinner />
            ) : error ? (
              <Alert severity="error">{error}</Alert>
            ) : (
              <FormControlLabel
                value={thisTable.name}
                control={<Radio />}
                label={thisTable.name}
              />
            )}
          </RadioGroup>
        </FormControl>
      </FixedMiddleBodyWithVerticalScroll>

      <FixedBottomPominentButton
        title="Next"
        onClick={() => history.push(`/services/:name`)}
        disabled={!checked}
      />
    </PageContainer>
  );
};

export default SelectTablePage;
