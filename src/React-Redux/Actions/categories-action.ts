import {action , payload} from 'ts-action';
import { getCategoriesAction} from '.';
import { ICategory } from './types';

export const getCategories = action(getCategoriesAction.requested);
export const getCategoriesSucceeded = action(getCategoriesAction.fulfilled , payload<ICategory[]>());
export const getCategoriesFailed = action(getCategoriesAction.rejected, payload<Error>());

