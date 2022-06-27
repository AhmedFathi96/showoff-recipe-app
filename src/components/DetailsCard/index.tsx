
import React, { useState } from "react";
import { IRecipeDetails } from "../../React-Redux/Actions/types";
import * as styles from './styles.module.css';

interface IProps{
    recipeDetails:IRecipeDetails
}

const DetailsCard: React.FC<IProps> = (props) => {
    const {recipeDetails} = props;
    
    return (
        <div className={styles.default.detailsCardWrapper}>
            <div className={`${styles.default.cardWrapper} card`}>
                <img src={recipeDetails.strMealThumb} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title">{recipeDetails.strMeal}</h3>
                    <div className={styles.default.contWrapper}>
                        <span className={`${styles.default.cardWrapper} card-title`}>{recipeDetails.strCategory}</span>
                        <span className={`${styles.default.cardWrapper} card-title`}>{recipeDetails.strArea}</span>
                        <span className={`${styles.default.cardWrapper} card-title`}>{recipeDetails.strTags}</span>
                    </div>
                    { recipeDetails.strDrinkAlternate? <span className={`${styles.default.cardWrapper} card-title`}>{recipeDetails.strDrinkAlternate}</span>:<></>}
                    <p className="card-text">{recipeDetails.strInstructions}.</p>
                </div>
            </div>
            <div className={styles.default.details}>
                <div className={styles.default.detailsWrapper}>
                    <ul className={`${styles.default.listGroupWrapper} list-group`}>
                        <li className="list-group-item active" aria-current="true">Ingredient</li>
                        {recipeDetails.strIngredient1?<li className="list-group-item">{recipeDetails.strIngredient1}</li>:<></>}
                        {recipeDetails.strIngredient2?<li className="list-group-item">{recipeDetails.strIngredient2}</li>:<></>}
                        {recipeDetails.strIngredient3?<li className="list-group-item">{recipeDetails.strIngredient3}</li>:<></>}
                        {recipeDetails.strIngredient4?<li className="list-group-item">{recipeDetails.strIngredient4}</li>:<></>}
                        {recipeDetails.strIngredient5?<li className="list-group-item">{recipeDetails.strIngredient5}</li>:<></>}
                        {recipeDetails.strIngredient6?<li className="list-group-item">{recipeDetails.strIngredient6}</li>:<></>}
                        {recipeDetails.strIngredient7?<li className="list-group-item">{recipeDetails.strIngredient7}</li>:<></>}
                        {recipeDetails.strIngredient8?<li className="list-group-item">{recipeDetails.strIngredient8}</li>:<></>}
                        {recipeDetails.strIngredient9?<li className="list-group-item">{recipeDetails.strIngredient9}</li>:<></>}
                        {recipeDetails.strIngredient10?<li className="list-group-item">{recipeDetails.strIngredient10}</li>:<></>}
                        {recipeDetails.strIngredient11?<li className="list-group-item">{recipeDetails.strIngredient11}</li>:<></>}
                        {recipeDetails.strIngredient12?<li className="list-group-item">{recipeDetails.strIngredient12}</li>:<></>}
                        {recipeDetails.strIngredient13?<li className="list-group-item">{recipeDetails.strIngredient13}</li>:<></>}
                        {recipeDetails.strIngredient14?<li className="list-group-item">{recipeDetails.strIngredient14}</li>:<></>}
                        {recipeDetails.strIngredient15?<li className="list-group-item">{recipeDetails.strIngredient15}</li>:<></>}
                        {recipeDetails.strIngredient16?<li className="list-group-item">{recipeDetails.strIngredient16}</li>:<></>}
                        {recipeDetails.strIngredient17?<li className="list-group-item">{recipeDetails.strIngredient17}</li>:<></>}
                        {recipeDetails.strIngredient18?<li className="list-group-item">{recipeDetails.strIngredient18}</li>:<></>}
                        {recipeDetails.strIngredient19?<li className="list-group-item">{recipeDetails.strIngredient19}</li>:<></>}
                        {recipeDetails.strIngredient20?<li className="list-group-item">{recipeDetails.strIngredient20}</li>:<></>}
                    

                    </ul>
                    <ul className={`${styles.default.listGroupWrapper} list-group`}>
                        <li className="list-group-item active" aria-current="true">Measure</li>
                        {recipeDetails.strMeasure1&& recipeDetails.strMeasure1 !== " "?<li className="list-group-item">{recipeDetails.strMeasure1}</li>:<></>}
                        {recipeDetails.strMeasure2&& recipeDetails.strMeasure2 !== " "?<li className="list-group-item">{recipeDetails.strMeasure2}</li>:<></>}
                        {recipeDetails.strMeasure3&& recipeDetails.strMeasure3 !== " "?<li className="list-group-item">{recipeDetails.strMeasure3}</li>:<></>}
                        {recipeDetails.strMeasure4&& recipeDetails.strMeasure4 !== " "?<li className="list-group-item">{recipeDetails.strMeasure4}</li>:<></>}
                        {recipeDetails.strMeasure5&& recipeDetails.strMeasure5 !== " "?<li className="list-group-item">{recipeDetails.strMeasure5}</li>:<></>}
                        {recipeDetails.strMeasure6&& recipeDetails.strMeasure6 !== " "?<li className="list-group-item">{recipeDetails.strMeasure6}</li>:<></>}
                        {recipeDetails.strMeasure7&& recipeDetails.strMeasure7 !== " "?<li className="list-group-item">{recipeDetails.strMeasure7}</li>:<></>}
                        {recipeDetails.strMeasure8&& recipeDetails.strMeasure8 !== " "?<li className="list-group-item">{recipeDetails.strMeasure8}</li>:<></>}
                        {recipeDetails.strMeasure9&& recipeDetails.strMeasure9 !== " "?<li className="list-group-item">{recipeDetails.strMeasure9}</li>:<></>}
                        {recipeDetails.strMeasure10&& recipeDetails.strMeasure10 !== " "?<li className="list-group-item">{recipeDetails.strMeasure10}</li>:<></>}
                        {recipeDetails.strMeasure11&& recipeDetails.strMeasure11 !== " "?<li className="list-group-item">{recipeDetails.strMeasure11}</li>:<></>}
                        {recipeDetails.strMeasure12&& recipeDetails.strMeasure12 !== " "?<li className="list-group-item">{recipeDetails.strMeasure12}</li>:<></>}
                        {recipeDetails.strMeasure13&& recipeDetails.strMeasure13 !== " "?<li className="list-group-item">{recipeDetails.strMeasure13}</li>:<></>}
                        {recipeDetails.strMeasure14&& recipeDetails.strMeasure14 !== " "?<li className="list-group-item">{recipeDetails.strMeasure14}</li>:<></>}
                        {recipeDetails.strMeasure15&& recipeDetails.strMeasure15 !== " "?<li className="list-group-item">{recipeDetails.strMeasure15}</li>:<></>}
                        {recipeDetails.strMeasure16&& recipeDetails.strMeasure16 !== " "?<li className="list-group-item">{recipeDetails.strMeasure16}</li>:<></>}
                        {recipeDetails.strMeasure17&& recipeDetails.strMeasure17 !== " "?<li className="list-group-item">{recipeDetails.strMeasure17}</li>:<></>}
                        {recipeDetails.strMeasure18&& recipeDetails.strMeasure18 !== " "?<li className="list-group-item">{recipeDetails.strMeasure18}</li>:<></>}
                        {recipeDetails.strMeasure19&& recipeDetails.strMeasure19 !== " "?<li className="list-group-item">{recipeDetails.strMeasure19}</li>:<></>}
                        {recipeDetails.strMeasure20 && recipeDetails.strMeasure20 !== " "?<li className="list-group-item">{recipeDetails.strMeasure20}</li>:<></>}
                    </ul>
                </div>
                <ul className={`${styles.default.infoWrapper} list-group`}>
                    {recipeDetails.strSource?<li className="list-group-item">Recipe Source: {recipeDetails.strSource}</li>:<></>}
                    {recipeDetails.strCreativeCommonsConfirmed?<li className="list-group-item">Recipe Commons Confirmed: {recipeDetails.strCreativeCommonsConfirmed}</li>:<></>}
                    {recipeDetails.dateModified?<li className="list-group-item">Recipe Date Modified: {recipeDetails.dateModified}</li>:<></>}
                    {recipeDetails.strYoutube?<li className="list-group-item">Recipe Youtube Link: {recipeDetails.strYoutube}</li>:<></>}
                </ul>
            </div>
            
        </div>
    
    );
}
export default DetailsCard;
