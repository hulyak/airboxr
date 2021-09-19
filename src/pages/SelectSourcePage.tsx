import React, { useState, useEffect } from "react";
import Alert from "@material-ui/lab/Alert";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {
  PageContainer,
  FixedTopBar,
  FixedMiddleBodyWithVerticalScroll,
  TopbarBackButton,
} from "../layout-components";
import { TitlebarGridList } from "../components/DataSource";
import { Spinner } from "../components/Spinner";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header";
import { apiGet } from "../config/api";

interface DataSource {
  id: number;
  name: string;
  uuid: string;
  isFavorited: boolean;
  tables: [];
}

export const SelectSourcePage = () => {
  const history = useHistory();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [dataSources, setDataSources] = useState<DataSource[]>([]);

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

  useEffect(() => {
    apiGet()
      .then((data) => {
        setIsLoading(false);
        if (data.statusCode) {
          setError(data.message);
        } else {
          data.map((d: DataSource) => (d.isFavorited = false));
          setDataSources(data);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, []);

  return (
    <PageContainer>
      <Header />
      <FixedTopBar title="Select source." leftButton={topbarLeftButton} />
      <FixedMiddleBodyWithVerticalScroll>
        <Typography className={classes.space} variant="h3">
          Below is a list of the sources you have connected. Please choose the
          data source you would like to import data from.
        </Typography>
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <TitlebarGridList datasource={dataSources} />
        )}
      </FixedMiddleBodyWithVerticalScroll>
    </PageContainer>
  );
};

export default SelectSourcePage;
