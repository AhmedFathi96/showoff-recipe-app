
import React, { useState } from "react";
import { IRecipe } from "../../React-Redux/Actions/types";
import ListHeader from "./ListHeader";
import ListItem from "./ListItem";
import * as styles from './styles.module.css';

interface IProps{
    titles:string[];
    values:IRecipe[];
}

const ListGrid: React.FC<IProps> = (props) => {
    const {titles,values} = props;
    
    return (
        <div className={styles.default.listGridWrapper}>
            {
                titles?<ListHeader titles={titles} />:<></>
            }
            
            {
                values.map(val =><ListItem recipe={val} />)
            }
        </div>
    
    );
}
export default ListGrid;
