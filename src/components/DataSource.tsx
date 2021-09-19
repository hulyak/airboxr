import React, { useEffect, useState, useContext, createContext } from "react";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import {
  Typography,
  GridList,
  GridListTile,
  IconButton,
} from "@material-ui/core";

import FacebookAds from "../public/facebook-ads-logo.png";
import GoogleAds from "../public/google-ads-logo.png";
import MailchimpLogo from "../public/mailchimp-logo.png";
import GoogleAnalytics from "../public/google-analytics-logo.png";

interface DataSource {
  id: number;
  name: string;
  uuid: string;
  isFavorited: boolean;
  tables: [];
}

interface TileProps {
  datasource: Array<DataSource>;
}

let SourceContext = createContext<{ tableOptions: DataSource[] }>({
  tableOptions: [],
});

export const TitlebarGridList: React.FunctionComponent<TileProps> = ({
  datasource,
}) => {
  const [datasources, setDatasources] = useState<DataSource[]>(datasource);

  SourceContext = createContext<{ tableOptions: DataSource[] }>({
    tableOptions: datasources,
  });

  useEffect(() => setDatasources(datasource), [datasource]);

  const renderDataSourceImage = (name: string) => {
    switch (name) {
      case "Facebook Ads":
        return FacebookAds;
      case "Google Ads":
        return GoogleAds;
      case "Mailchimp":
        return MailchimpLogo;
      case "Google Analytics":
        return GoogleAnalytics;
      default:
        return "";
    }
  };

  const sort = (data: DataSource[]) =>
    data.sort(function (x, y) {
      return x.isFavorited === y.isFavorited ? 0 : x.isFavorited ? -1 : 1;
    });

  const useStyles = makeStyles(() => ({
    image: {
      height: "50%",
      width: "auto",
      position: "absolute",
      left: 0,
      right: 0,
      margin: "auto",
    },

    button: {
      position: "absolute",
      bottom: 0,
      right: 0,
      border: 0,
      color: "black",
    },
    search: {
      borderRadius: "5px",
      width: "100%",
      boxShadow: "none",
      border: "1px solid lightgray",
      marginBottom: "30px",
    },
    name: {
      padding: "5px 0 0 5px",
    },
    container: {
      height: "100%",
      width: "100%",
    },
    link: {
      textDecoration: "none",
      color: "black",
    },
  }));
  const classes = useStyles();

  const toggle = (id: number) => {
    let newData = [...datasources];
    let index = datasources.findIndex((data) => data.id === id);

    let item = {
      ...newData[index],
      isFavorited: !newData[index].isFavorited,
    };
    newData[index] = item;
    sort(newData);
    setDatasources(newData);
  };

  return (
    <SourceContext.Provider value={{ tableOptions: datasources }}>
      <div className={classes.container}>
        <GridList cellHeight={100} spacing={10}>
          {datasources.map((tile) => (
            <GridListTile key={tile.id}>
              <Link to={`/table/${tile.name}`} className={classes.link}>
                <Typography className={classes.name}>
                  {tile.name.toUpperCase()}
                </Typography>

                <img
                  className={classes.image}
                  src={renderDataSourceImage(tile.name)}
                  alt={tile.name}
                />

                <IconButton
                  className={classes.button}
                  onClick={() => toggle(tile.id)}
                >
                  {tile.isFavorited ? <Favorite /> : <FavoriteBorder />}
                </IconButton>
              </Link>
            </GridListTile>
          ))}
        </GridList>
      </div>
    </SourceContext.Provider>
  );
};

export const useSourceContext = () => useContext(SourceContext);
