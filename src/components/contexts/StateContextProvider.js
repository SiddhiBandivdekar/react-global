import { createContext, useContext, useState } from "react";

const StateContext = createContext();
const baseUrl = "https://api.search.brave.com/res/v1";

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState("");

  const getResults = async (url) => {
    setLoading(true);

    const response = await fetch(`${baseUrl}${url}`, {
      headers: {
        "X-Subscription-Token": process.env.API_KEY,
        Accept: "application/json",
        "Accept-Encoding": "gzip",
      },
    });

    const data = await response.json();

    setResults(data);
    setLoading(false);
  };

  return (
    <StateContext.Provider
      value={{ getResults, results, searched, setSearched, loading }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
