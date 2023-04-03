import axios from "axios";

export default axios.create({
	baseURL: "https://unilife-server.herokuapp.com",
	headers: {},
});
