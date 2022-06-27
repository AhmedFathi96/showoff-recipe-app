import { reducer, on } from "ts-action";
import { getRecipeDetailsSucceeded } from "../Actions/recipe-details-action";
import { IRecipeDetails } from "../Actions/types";

interface IState{
    recipeDetails: IRecipeDetails[];
    recipeDetails_is_loading:boolean
    
}

export const recipeDetailsReducer = reducer<IState>(
    {
        recipeDetails: [],
        recipeDetails_is_loading:false
    },
    on(getRecipeDetailsSucceeded, (state, { payload }) => ({
        ...state,
        recipeDetails: payload,
        recipeDetails_is_loading:true
    }))

)