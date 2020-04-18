import React from 'react';
import {Route, Switch} from "react-router-dom";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import Pictures from "./containers/Pictures/Pictures";
import AddPicture from "./containers/AddPicture/AddPicture";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Pictures}/>
            <Route path="/pictures/:id" exact component={Pictures}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/addPicture" exact component={AddPicture}/>
        </Switch>
    );
};

export default Routes;