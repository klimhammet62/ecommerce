import { Categories } from "./Categories";

export const CategoriesMain: React.FC = () => {
    return (
        <>
            <div className="categories__wrapper">
                <span>Categories</span>
                <Categories />
            </div>
        </>
    );
};
