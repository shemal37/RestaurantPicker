import axios from "axios";
import yelp from "../../apikey";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer ${yelp.config.Bearer}`,
  },
});
