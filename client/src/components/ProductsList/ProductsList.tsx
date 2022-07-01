import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Categories } from "../MainComponents/Categories/Categories";
import { ProductComponent } from "../SmallComponents/ProductComponent";
import "./ProductList.scss";

export const ProductsList: React.FC = observer(() => {
    return (
        <div>
            <div>
                <div className="categories">
                    <span>Categories</span>
                    <p className={"categories__settings"}>Settings</p>
                </div>
                <Categories />
                <ProductComponent />
            </div>
        </div>
    );
});
