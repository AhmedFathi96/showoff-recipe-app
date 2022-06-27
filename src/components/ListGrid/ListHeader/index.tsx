
import React, { useState } from "react";
import * as styles from './styles.module.css';


interface IProps{
    titles:string[]
}


const ListHeader: React.FC<IProps> = (props) => {

    const {titles} = props;
    return (
        <div className={styles.default.tableWrapper}>
            <div className={styles.default.header}>
                <div className={styles.default.tableHeaderWrapper}>
                    {
                        titles.map(title => <span>{title}</span>)
                    }
                </div>
            </div>
        </div>
        
    
    );
}
export default ListHeader;
