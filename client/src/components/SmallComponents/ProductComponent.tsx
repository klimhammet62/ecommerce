import { SkeletonCardComponent } from "../SmallComponents/SkeletonCardComponent";
import { ProductsButtons } from "../Forms/ProductsButtons";
import { RootStore } from "../../store/store";
import { observer } from "mobx-react-lite";
import "./ProductComponent.scss";

export const ProductComponent = observer((): JSX.Element => {
    return (
        <>
            {RootStore.products.loading ? (
                <div className="products__component">
                    <div className="products__wrapper">
                        {RootStore.products.products.map((product) => (
                            <div className="products__grid" key={product.id}>
                                <div className="card__link"></div>
                                <div className="card">
                                    <img
                                        src={`${product.image}`}
                                        className={"card__image"}
                                        alt={`${product.alt}`}
                                    />
                                    <div className="card__content"></div>
                                    <p className="card__title">
                                        {product.title.split(" ", 3).join(" ")}
                                    </p>
                                    <span className="card__price">
                                        {product.price}
                                    </span>
                                    <ProductsButtons />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <SkeletonCardComponent />
            )}
        </>
    );
});
