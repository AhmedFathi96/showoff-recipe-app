
import React, { useEffect, useState } from "react";
import ListHeader from "../../components/ListGrid/ListHeader";
import { useSelect } from "../../helper";
import { useDispatch } from "react-redux";

import * as styles from './styles.module.css';
import { getRecipeList } from "../../React-Redux/Actions/recipe-list-action";
import ListGrid from "../../components/ListGrid";
import { useParams } from "react-router";
import BreadcrumbNav from "../../components/Navbars";


const RecipeList: React.FC = () => {

        const titles = ["Thumb" ,"Id" , "Name"]
        const {recipes,recipes_is_loading} = useSelect(state=> state.recipesReducer);
        const { id } = useParams<{id:string}>();
        const dispatch = useDispatch();
        React.useEffect(() => {
            dispatch(getRecipeList({id}))
        } , [])



    return (
        <>
            <BreadcrumbNav />
            <div className={`${styles.default.recipeListWrapper}` }>

            {
                recipes_is_loading?<ListGrid values={recipes} titles={titles} />:<></>
                
            }
            </div>

        </>
    );
}
export default RecipeList; 
