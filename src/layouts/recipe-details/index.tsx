
import React, { useEffect, useState } from "react";
import ListHeader from "../../components/ListGrid/ListHeader";
import { useSelect } from "../../helper";
import { useDispatch } from "react-redux";

import * as styles from './styles.module.css';
import { getCategories } from "../../React-Redux/Actions/categories-action";
import ListGrid from "../../components/ListGrid";
import Card from "../../components/Card";
import DetailsCard from "../../components/DetailsCard";
import { useParams } from "react-router";
import { getRecipeDetails } from "../../React-Redux/Actions/recipe-details-action";
import BreadcrumbNav from "../../components/Navbars";


const RecipeDetails: React.FC = () => {

        const {recipeDetails,recipeDetails_is_loading} = useSelect(state=> state.recipeDetailsReducer);
        const { id } = useParams<{id:string}>();
        const dispatch = useDispatch();
        React.useEffect(() => {
            dispatch(getRecipeDetails({id}))
        } , [])



    return (
        <>
            <BreadcrumbNav />
            <div className={`${styles.default.categoriesWrapper}` }>

            {
                recipeDetails_is_loading?<DetailsCard recipeDetails={recipeDetails[0]} />:<></>
                
            }
            </div>

        </>

    
    );
}
export default RecipeDetails;
