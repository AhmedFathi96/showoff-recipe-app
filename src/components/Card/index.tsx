 
import React, { useState } from "react";
import SingleCard from "./SingleCard";
import * as styles from './styles.module.css';

interface IProps{
    values:any[]
}

const Card: React.FC<IProps> = (props) => {
    const {values} = props;
    
    return (
        <div className={styles.default.cardWrapper}>
            {/* <ListHeader titles={titles} /> */}
            { 
                values.map(val =><SingleCard cardInfo={val} />)
            }
        </div>
    
    );
}
export default Card;
