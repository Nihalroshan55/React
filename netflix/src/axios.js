import axios from "axios";
import { baseUrl } from "./constents/constents";
const instance = axios.create({
    baseURL: baseUrl,
    
  });

export default instance