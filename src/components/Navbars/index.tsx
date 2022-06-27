
import React  from "react";
import { useHistory } from "react-router";
import * as styles from './styles.module.css';


const BreadcrumbNav: React.FC = () => {

    const history = useHistory();


    return (
        <div className={styles.default.wrapper}>
            <h3>Recipe App</h3>
            <button type="button" className={`${styles.default.button} btn btn-dark`} onClick={()=>{history.goBack()}}>Back</button>
        </div>
    );
}
export default BreadcrumbNav;
