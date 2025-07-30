import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6efe52ba77d34974b66a8ee3d78651ba",
  },
});
