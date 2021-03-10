import axios from "axios";

const URL = 'https://randomuser.me/api/';
const http = axios.create({baseURL: URL});

export default http;