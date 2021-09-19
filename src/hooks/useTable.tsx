import { useEffect, useReducer } from "react";
import { apiGet } from "../config/api";

const reducer = (prevState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { isLoading: false, error: null, show: action.show };
    case "FETCH_FAILED":
      return { ...prevState, isLoading: false, error: action.error };
    default:
      return prevState;
  }
};

interface DataSource {
  id: number;
  name: string;
  uuid: string;
  isFavorited: boolean;
  tables: [];
}

export function useTable(tableName) {
  const [state, dispatch] = useReducer(reducer, {
    data: null,
    isLoading: true,
    error: null,
  });
  // console.log(state);

  useEffect(() => {
    let isMounted = true;
    apiGet()
      .then((results) => {
        if (isMounted) {
          dispatch({ type: "FETCH_SUCCESS", data: results });
        }
      })
      .catch((err) => {
        if (isMounted) {
          dispatch({ type: "FETCh_FAILED", error: err.message });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [tableName]);

  return state;
  // console.log(show);
}
