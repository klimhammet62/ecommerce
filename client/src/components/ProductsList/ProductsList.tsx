import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Categories } from "../MainComponents/Categories/Categories";
import { ProductComponent } from "../SmallComponents/ProductComponent";
import "./ProductList.scss";

export const ProductsList: React.FC = observer(() => {
    return (
        <div>
            <div>
                <div className="functions__wrapper">
                    <div className="categories__wrapper">
                        <span>Categories</span>
                        <Categories />
                    </div>
                    <div className="settings__wrapper">
                        <p className="categories__settings">Settings</p>
                    </div>
                </div>
                <ProductComponent />
            </div>
        </div>
    );
});
