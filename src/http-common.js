import axios from "axios";

export default axios.create({
  baseURL: "https://react-testing.free.beeceptor.com",
  headers: {
    "Content-type": "application/json"
  }
});
