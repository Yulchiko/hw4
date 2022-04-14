import {AxiosService} from "../AxiosService/AxiosService";
import {urls} from "../../Configs";

export const UserService={
    getAllUser:()=>AxiosService.get(urls.users),
    getByIdUser:(id)=>AxiosService.get(`${urls.users}/${id}`)
}