import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CategoriesList from './layouts/categories-list';
import RecipeDetails from './layouts/recipe-details';
import RecipeList from './layouts/recipe-list';

function App() {

    return (
        <div className="App">
            <BrowserRouter>
            
            <Switch>
                <Route exact path="/" component={CategoriesList} />
                <Route path="/recipes/:id" component={RecipeList} />
                <Route path="/details/:id" component={RecipeDetails} />
            </Switch>
            
            </BrowserRouter>

        </div>
    );
}

export default App;