import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-33ef6.firebaseio.com/"
});

export default instance;
