import { IOrders } from "../../Types/Types";
import { Link } from "react-router-dom";

export const PurchaseButton: React.FC<IOrders> = ({ count }): JSX.Element => {
    return (
        <Link to="/orders" className={"purchase__button"}>
            <button className={"shopping__button"}>
                <i className={"fas fa-shopping-cart"}></i>
                <span>
                    {(count < 10 && count) || (count > 10 && count + "+")}
                </span>
            </button>
        </Link>
    );
};
