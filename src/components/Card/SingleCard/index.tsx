
import React, { useState } from "react";
import { ICategory } from "../../../React-Redux/Actions/types";
import * as styles from './styles.module.css';
import { useHistory } from 'react-router-dom';


interface IProps{
    cardInfo:ICategory
}


const SingleCard: React.FC<IProps> = (props) => {

    const {cardInfo} = props;
    const history = useHistory();
    return (
        <>
            
            <div className={styles.default.itemCard}>
                <div className={`${styles.default.cardImgtop} ${styles.default.imgWrapper}`}>
                    <img className={styles.default.itemImg} src={cardInfo.strCategoryThumb} alt="Category Card" />
                </div>
                
                <div className="card-body">
                    <h4 className={styles.default.cardTitle}>{cardInfo.strCategory}</h4>
                    <div className={styles.default.descDefault}>
                        <p className={styles.default.desc}>
                            {cardInfo.strCategoryDescription}
                        </p>

                        <div className={styles.default.btnWrap}>
                            <button className={styles.default.button} onClick={() => history.push(`/recipes/${cardInfo.strCategory}`)}>Recipes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    
    );
}
export default SingleCard;
