import React, { useCallback, useState } from "react";
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

const SelectTablePage: React.FunctionComponent = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [checked, setChecked] = useState(false);
  const [showChildOptions, setShowChildOptions] = useState(false);

  type TableParams = {
    name: string;
  };

  const { name } = useParams<TableParams>();

  const history = useHistory();

  const options = useSourceContext();

  const { tableOptions } = options;

  // console.log(tableOptions, "tableOptions");

  const [isLoading] = useState(true);
  const [error] = useState(null);

  const thisTable = tableOptions.find((service) => service.name === name) || {
    name: "",
    tables: [{ title: "" }],
  };

  const tableAllOptions: Record<string, any> = {};

  thisTable.tables.forEach((table) => {
    if (table.title.includes("||")) {
      const [parentTable, childTable] = table.title.split("||");
      if (tableAllOptions[parentTable]) {
        tableAllOptions[parentTable].children.push({ title: childTable });
      } else {
        tableAllOptions[parentTable] = {
          ...table,
          title: parentTable,
          children: [{ title: childTable }],
        };
      }
    } else {
      tableAllOptions[table.title] = table;
    }
  });

  console.log(tableAllOptions, "tableAllOptions");

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

  const getRadioOptions = () => {
    if (showChildOptions) {
      return tableAllOptions[selectedOption]?.children || [];
    } else {
      return Object.values(tableAllOptions);
    }
  };

  return (
    <PageContainer>
      <Header />
      <FixedTopBar title="Select table" leftButton={topbarLeftButton} />
      <FixedMiddleBodyWithVerticalScroll>
        <Typography variant="h3" className={classes.space}>
          {thisTable.name} has the following tables ready for import.Please
          select the table you would like to import.
        </Typography>
        <FormControl component="fieldset">
          <InputLabel htmlFor="Filter">Filter</InputLabel>
          <Input id="Filter" />
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
              getRadioOptions().map((table: { title: string }) => {
                return (
                  <>
                    <FormControlLabel
                      key={table.title}
                      value={table.title}
                      control={<Radio />}
                      label={table.title}
                    />
                    {/* <div className="">
                      {(table.children || []).map(
                        (child: { title: string }) => {
                          return (
                            <FormControlLabel
                              key={child.title}
                              value={child.title}
                              control={<Radio />}
                              label={child.title}
                            />
                          );
                        }
                      )}
                    </div> */}
                  </>
                );
              })
            )}
          </RadioGroup>
        </FormControl>
      </FixedMiddleBodyWithVerticalScroll>

      <FixedBottomPominentButton
        title="Next"
        onClick={() => setShowChildOptions(true)}
        disabled={!checked}
      />
    </PageContainer>
  );
};

export default SelectTablePage;
