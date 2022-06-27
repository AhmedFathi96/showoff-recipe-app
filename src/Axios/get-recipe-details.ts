import axios from 'axios';
import * as Requests from './urls'

export const getRecipeDetailsAPI:any = (id:string) =>{
    return axios.get(Requests.getRecipeDetailsURL(id));
}