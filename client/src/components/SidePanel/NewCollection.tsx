import { Link } from "react-router-dom";
import { TNewCollection } from "../../Types/Product";
import "./SidePanel.scss";

export const NewCollection = ({ image, title, alt }: TNewCollection): JSX.Element => {
    return (
        <Link to="/collections">
            <div className="collection">
                <span className="collection__new">{title}</span>
                <img className="collection__images" src={image} alt={alt} />
            </div>
        </Link>
    );
};
