import axios from "axios";
import {baseUrl} from "../../Configs";

export  const AxiosService = axios.create({baseUrl})