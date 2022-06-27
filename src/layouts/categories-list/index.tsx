
import React from "react";
import { useSelect } from "../../helper";
import { useDispatch } from "react-redux";

import * as styles from './styles.module.css';
import { getCategories } from "../../React-Redux/Actions/categories-action";
import Card from "../../components/Card";
import BreadcrumbNav from "../../components/Navbars";


const CategoriesList: React.FC = () => {

        const {category, category_is_loading} = useSelect(state=> state.categoriesReducer);

        const dispatch = useDispatch();
        React.useEffect(() => {
            dispatch(getCategories())
        } , [])



    return (
        <>
            <BreadcrumbNav />
            <div className={`${styles.default.categoriesWrapper}` }>

                {
                    category_is_loading?<Card values={category} />:<></>
                    
                }
            </div>

        </>
        
    
    );
}
export default CategoriesList;
