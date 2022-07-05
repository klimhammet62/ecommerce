import { RootStore } from "../../../store/store";
import { observer } from "mobx-react-lite";
import "./Settings.scss";
import { SkeletonSettings } from "./SkeletonSettings";

export const SettingsMain: React.FC = observer(() => {
    return (
        <>
            <div
                className="settings__wrapper"
                onMouseLeave={() => RootStore.products.togglePopup(false)}
            >
                <p
                    className="settings__text"
                    onMouseEnter={() => RootStore.products.togglePopup(true)}
                >
                    Settings:{"  "}
                    <span
                        style={{
                            backgroundColor:
                                RootStore.products.sortObject.color,
                            color: "white",
                        }}
                    >
                        {RootStore.products.sortObject.name}
                    </span>
                </p>
                {RootStore.products.popup && (
                    <ul className="settings__popup">
                        {RootStore.products.isLoading ? (
                            <SkeletonSettings />
                        ) : (
                            RootStore.products.settings_tags.map((item) => (
                                <li
                                    key={item.id}
                                    style={{
                                        backgroundColor: `${item.color}`,
                                    }}
                                    className="settings__list"
                                    onClick={() =>
                                        RootStore.products.setSettingsTags(item)
                                    }
                                >
                                    {item.name}
                                </li>
                            ))
                        )}
                    </ul>
                )}
            </div>
        </>
    );
});
