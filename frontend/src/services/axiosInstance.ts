import axios from "axios";
import { AppConst } from "../constants/AppConst";

//const AppState = GetAppState();

export const axiosInstance = axios.create({
    baseURL: AppConst.BackendURL,
    timeout: 5000,
});