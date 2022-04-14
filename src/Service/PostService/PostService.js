import {AxiosService} from "../AxiosService/AxiosService";
import {urls} from "../../Configs";

export const PostService={
    getAllPost:()=>AxiosService.get(urls.posts),
    getByIdPost:(id)=>AxiosService.get(`${urls.posts}/${id}`)
}