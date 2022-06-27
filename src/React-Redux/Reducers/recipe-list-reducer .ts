import { reducer, on } from "ts-action";
import { getRecipeListSucceeded} from "../Actions/recipe-list-action";
import { IRecipe } from "../Actions/types";

interface IState{
    recipes: IRecipe[];
    recipes_is_loading:boolean
    
}

export const recipesReducer = reducer<IState>(
    {
        recipes: [],
        recipes_is_loading:false
    },
    on(getRecipeListSucceeded, (state, { payload }) => ({
        ...state,
        recipes: payload,
        recipes_is_loading:true
    }))

)