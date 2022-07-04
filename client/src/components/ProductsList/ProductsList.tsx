import { CategoriesMain } from "../MainComponents/Categories/CategoriesMain";
import { ProductComponent } from "../SmallComponents/ProductComponent";
import { SettingsMain } from "../MainComponents/SettingsComponent/SettingsMain";
import "./ProductList.scss";

export const ProductsList: React.FC = () => {
    return (
        <div>
            <div>
                <div className="functions__wrapper">
                    <CategoriesMain />
                    <SettingsMain />
                </div>
                <ProductComponent />
            </div>
        </div>
    );
};
