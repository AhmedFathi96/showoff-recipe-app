import {combineReducers} from 'redux';

import {categoriesReducer} from './categories-reducer';
import { recipeDetailsReducer } from './recipe-details-reducer';
import { recipesReducer } from './recipe-list-reducer ';



export const rootReducer = combineReducers({
    categoriesReducer,
    recipesReducer,
    recipeDetailsReducer
});

type rootReducer = typeof rootReducer;

type returnTypeInferrer<T> = T extends (state: any, action: any) => infer U
    ? U
    : never;
type rootState = returnTypeInferrer<rootReducer>;
export interface IRootReducerState extends rootState {}

export default rootReducer;


