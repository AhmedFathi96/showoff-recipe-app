import { reducer, on } from "ts-action";
import { getCategoriesSucceeded} from "../Actions/categories-action";
import { ICategory } from "../Actions/types";

interface IState{
    category: ICategory[];
    category_is_loading:boolean
    
}

export const categoriesReducer = reducer<IState>(
    {
        category: [],
        category_is_loading:false
    },
    on(getCategoriesSucceeded, (state, { payload }) => ({
        ...state,
        category: payload,
        category_is_loading:true
    }))

)

