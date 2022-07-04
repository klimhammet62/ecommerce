import { observer } from "mobx-react-lite";
import { RootStore } from "../../../store/store";
import { SkeletonCategories } from "./SkeletonCategories";
import "./Categories.scss";

export const Categories: React.FC = observer(() => {
    return (
        <ul className="categories__tags">
            {RootStore.products.isLoading ? (
                <>
                    <SkeletonCategories />
                    <SkeletonCategories />
                    <SkeletonCategories />
                    <SkeletonCategories />
                </>
            ) : (
                RootStore.products.clothes_tags.map((tag) => (
                    <li
                        className="categories__tag"
                        key={tag.id}
                        onClick={() =>
                            RootStore.products.setClothesFilter(
                                `${tag.category}`
                            )
                        }
                        style={{ backgroundColor: tag.color }}
                    >
                        {tag.category}
                    </li>
                ))
            )}
        </ul>
    );
});
