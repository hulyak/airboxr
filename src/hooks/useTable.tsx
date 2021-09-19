import { useEffect, useReducer } from "react";
import { apiGet } from "../config/api";

const initialState = {
  isLoading: true,
  error: "",
  data: "",
};

type TableData = {
  isLoading: boolean;
  error: string | null;
  data: string;
};

type TableAction = {
  type: "FETCH_SUCCESS" | "FETCH_FAILED";
  data?: string;
  error?: string;
};

const reducer = (prevState: TableData, action: TableAction): TableData => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...prevState,
        isLoading: false,
        error: null,
        data: action.data || "",
      };
    case "FETCH_FAILED":
      return { ...prevState, isLoading: false, error: action.error || "" };
    default:
      return prevState;
  }
};

export function useTable(tableName: string) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // console.log(state, "state");

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
          dispatch({ type: "FETCH_FAILED", error: err.message });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [tableName]);

  return state;
}

// const { data, isLoading, error } = useTable("NAME");
