import { useState, useEffect } from "react";

const UseFetch = (initialUrl) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    if (!url) return;
    setIsLoading(true);
    // clear old search
    setData(null);
    setError(null);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: "applicant@airboxr.com",
        password: "ZUSrS5jSZDvEPTyX"
      })
    })
      .then((response) => response.json())
      .then((data) => {
        // error handling for nonexistent data
        setIsLoading(false);
        setData(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, [url]);

  return { data, error, isLoading, setUrl };
};

export default UseFetch;
