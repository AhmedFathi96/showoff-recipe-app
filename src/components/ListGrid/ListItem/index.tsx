
import React, { useState } from "react";
import { useHistory } from "react-router";
import { IRecipe } from "../../../React-Redux/Actions/types";
import * as styles from './styles.module.css';


interface IProps{
    recipe:IRecipe
}

const ListItem: React.FC<IProps> = (props) => {

    const {recipe} = props;
    const history = useHistory();

    

    return (
        <div className={styles.default.item} onClick={() => history.push(`/details/${recipe.idMeal}`)}>


                        <div  className={styles.default.itemImageWrapper}>
                            <img className={styles.default.itemImage} src={recipe.strMealThumb} alt="" />
                        </div>

                        <div className={styles.default.itemWrapper}>
                            <span className={styles.default.itemContent}>{recipe.idMeal}</span>
                        </div>
                        <div className={styles.default.itemWrapper}>
                            <span className={styles.default.itemContent}>{recipe.strMeal}</span>
                        </div>

        </div>
 
    
    );
}
export default ListItem;
