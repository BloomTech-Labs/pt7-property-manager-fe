import axios from "axios";

  export const axiosWithAuth = () => {
  const token = sessionStorage.getItem("token");

  return axios.create({
    baseURL: "https://property-manager-be.herokuapp.com",
    headers: {
      authorization: token
    }
  });
};

