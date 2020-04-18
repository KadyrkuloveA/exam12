import React from 'react';
import FacebookLogin from "../FacebookLogin/FacebookLogin";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";

const AnonymousMenu = () => (
    <>
        <Button color="inherit" component={NavLink} to="/register" exact>Sign Up</Button>
        <Button color="inherit" component={NavLink} to="/login" exact>Sign In</Button>
        <FacebookLogin/>
    </>
);

export default AnonymousMenu;