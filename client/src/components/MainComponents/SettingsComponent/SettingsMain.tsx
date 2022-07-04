import { RootStore } from "../../../store/store";
import { observer } from "mobx-react-lite";
import "./Settings.scss";

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
                    /*  onChange={(e) =>
                                RootStore.products.setSettingsTags(
                                    e.target.value
                                )
                            } */
                >
                    Settings
                </p>
                {RootStore.products.popup && (
                    <ul className="settings__popup">
                        {RootStore.products.settings_tags.map((item) => (
                            <li
                                key={item.id}
                                style={{
                                    backgroundColor: `${item.color}`,
                                }}
                                className="settings__list"
                            >
                                {item.sortBy}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
});
