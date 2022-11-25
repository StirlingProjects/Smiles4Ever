import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.scss";

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="navigation__logo">
                <NavLink to="/">Smiles 4 Ever Logo</NavLink>
            </div>
            <div className="navigation__links-large">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
            <div className="navigation__links-mobile">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </div>
    );
};

export default Navigation;
