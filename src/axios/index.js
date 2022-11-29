import axios from "axios";

export const Admins = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER}/admin`,
});
