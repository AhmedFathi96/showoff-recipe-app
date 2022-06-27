import {action , payload} from 'ts-action';
import { getRecipeDetailsAction} from '.';
import { IRecipeDetails } from './types';

export const getRecipeDetails = action(getRecipeDetailsAction.requested, payload<{id:string}>());
export const getRecipeDetailsSucceeded = action(getRecipeDetailsAction.fulfilled , payload<IRecipeDetails[]>());
export const getRecipeDetailsFailed = action(getRecipeDetailsAction.rejected, payload<Error>());

