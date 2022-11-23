import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.scss";

const Navigation = () => {
    return (
        <div className="Navigation">
            <NavLink to="/">Smiles 4 Ever</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    );
};

export default Navigation;
