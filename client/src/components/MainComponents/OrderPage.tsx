import { ProductsButtons } from "../Forms/ProductsButtons";

export const OrderPage: React.FC = ({ count }: any): JSX.Element => {
    return (
        <div className="order">
            <ProductsButtons />
        </div>
    );
};
