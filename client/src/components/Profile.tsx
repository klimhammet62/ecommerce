import { Link } from "react-router-dom";

export const Profile = () => {
    return (
        <Link to="/profile" className="header__profile">
            <img className="header__logo" src="assets/img/Ava.png" alt="avatar"/>
        </Link>
    );
};
