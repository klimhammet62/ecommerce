import { observer } from "mobx-react-lite";
import { RootStore } from "../../store/store";
import "./ProductsButtons.scss";

export const ProductsButtons = observer(() => {
    const decrease = () => {
        RootStore.basket.setCount(RootStore.basket.count - 1);
    };
    const add = () => {
        RootStore.basket.setCount(RootStore.basket.count + 1);
    };
    const remove = () => {
        RootStore.basket.setCount((RootStore.basket.count = 0));
    };

    return (
        <div className="buttons">
            {RootStore.basket.count ? (
                <>
                    <button className="button__delete" onClick={remove}>
                        Delete all
                    </button>
                    <h1 className="button__text">
                        {RootStore.basket.count > 1
                            ? `${RootStore.basket.count} Products in a basket`
                            : `${RootStore.basket.count} Product in a basket`}
                    </h1>
                    <button className="button__decrease" onClick={decrease}>
                        -
                    </button>
                    <button className="button__add" onClick={add}>
                        +
                    </button>
                </>
            ) : (
                <button className="button__primary" onClick={add}>
                    Add to basket
                </button>
            )}
        </div>
    );
});
