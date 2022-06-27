import {action , payload} from 'ts-action';
import { getRecipeListAction} from '.';
import { IRecipe } from './types';

export const getRecipeList = action(getRecipeListAction.requested, payload<{id:string}>());
export const getRecipeListSucceeded = action(getRecipeListAction.fulfilled , payload<IRecipe[]>());
export const getRecipeListFailed = action(getRecipeListAction.rejected, payload<Error>());

