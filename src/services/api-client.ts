import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fd106d28dbc24eb4b1e1d7d55ca2f5ec",
  },
});
