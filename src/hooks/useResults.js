import { useState, useEffect } from "react";
import yelp from "../api/yelp";
import google from "../api/google";
import googleKey from "../../apikey.js";

export default () => {
  const [results, setResults] = useState([]);
  const [errmessage, setErrMessage] = useState("");

  useEffect(() => {
    searchApi("pasta");
  }, []);
  const searchApi = async (searchTerm) => {
    try {
      const response = await google.get(
        `json?fields=name&query=${searchTerm}&key=${googleKey.googleApiKey.key}`,
        {
          // params: {
          //   place_id: "ChIJw3GoaL3pj4ARzzZw",
          // },
        }
      );

      setResults(
        response.data.results.filter(
          (item) => item.rating > 4 && item.user_ratings_total > 85
        )
      );
      console.log(response.data.results.length);
    } catch {
      setErrMessage("error received");
    }
  };
  return [searchApi, results, errmessage];
};
