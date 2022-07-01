import React from 'react'
import '.././Header/Header.scss';
import { Link } from "react-router-dom";

export const Logo = () => {
    return (
        <Link to="/" className="logo">
            <div className="header__logo">
                <p className="logo__name">React</p>
            </div>
        </Link>
    );
}
