import axios from 'axios';
import * as Requests from './urls'

export const getRecipeListAPI:any = (category:string) =>{
    return axios.get(Requests.getRecipeListURL(category));
}