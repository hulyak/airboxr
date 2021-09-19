import { useEffect, useReducer } from "react";
import { apiGet } from "../config/api";

const initialState = {
  isLoading: true,
  error: null,
  data: null,
};

type TableData = typeof initialState;

type TableAction = {
  type: "FETCH_SUCCESS" | "FETCH_FAILED";
  data?: string;
  error?: string;
};

const reducer = (prevState: TableData, action: TableAction) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { isLoading: false, error: null, data: action.data };
    case "FETCH_FAILED":
      return { ...prevState, isLoading: false, error: action.error };
    default:
      return prevState;
  }
};

export function useTable(tableName: string) {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state, "state");

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
}
