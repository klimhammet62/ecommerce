import { Input } from "./Input";
import { Logo } from "../SmallComponents/Logo";
import { Profile } from "../Profile";
import { PurchaseButton } from "../Forms/PurchaseButton";
import { observer } from "mobx-react-lite";
import { RootStore } from "../../store/store";
import "./Header.scss";

export const Header: React.FC = observer(({ count }: any) => {
    return (
        <div className="header">
            <div className="header__section">
                <Logo />
                <p className="location__text">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    {RootStore.location.geo}
                </p>
                <div className="subsections">
                    <Input />
                    <PurchaseButton count={count} />
                    <Profile />
                </div>
            </div>
        </div>
    );
});
