import axios from 'axios';
import * as Requests from './urls'

export const getCategories:any = () =>{
    return axios.get(Requests.getCategoriesURL);
}