import { useState, useEffect } from "react";
import yelp from "../api/yelp";
import google from "../api/google";

export default () => {
  const [results, setResults] = useState([]);
  const [errmessage, setErrMessage] = useState("");

  useEffect(() => {
    searchApi("pasta");
  }, []);

  // const searchApi = async (searchTerm) => {
  //   try {
  //     const response = await yelp.get("/search", {
  //       params: {
  //         limit: 50,
  //         term: searchTerm,
  //         location: "Hilliard, OH",
  //       },
  //     });
  //     setResults(response.data.businesses);
  //   } catch {
  //     setErrMessage("error received");
  //   }
  // };
  const searchApi = async (searchTerm) => {
    try {
      const response = await google.get(
        "json?fields=name&query=indian near dublin,ca",
        {
          // params: {
          //   place_id: "ChIJw3GoaL3pj4ARzzZw",
          // },
        }
      );
      setResults(response.data.results);
      // console.log(response.data.results);
    } catch {
      setErrMessage("error received");
    }
  };
  return [searchApi, results, errmessage];
};
