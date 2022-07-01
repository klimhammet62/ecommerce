import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../MainComponents/Footer";
import { SidePanel } from "../SidePanel/SidePanel";
import "../MainComponents/MainPage.scss";

export const Layout: React.FC = () => {
    return (
        <>
            <div className="main">
                <div className="header">
                    <div className="container">
                        <div className="profile__header">
                            <Header />
                        </div>
                        <div className="body__main">
                            <Outlet />
                        </div>
                    </div>
                    <div className="side__panel">
                        <SidePanel />
                    </div>
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </>
    );
};
