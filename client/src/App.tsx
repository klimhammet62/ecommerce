import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { OrderPage } from "./components/MainComponents/OrderPage";
import { HistoryOrdersPage } from "./components/MainComponents/HistoryOrdersPage";
import { ProfilePage } from "./components/MainComponents/ProfilePage";
import { NewCollectionPage } from "./components/SidePanel/NewCollectionPage";
import { Layout } from "./components/layout/Layout";
import { ProductsList } from "./components/ProductsList/ProductsList";
import { NotFound } from "./components/NotFound";
import { RootStore } from "./store/store";
import "./App.scss";

function App() {
    useEffect(() => {
        RootStore.products.loadProducts();
        RootStore.products.loadClothesTags();
        RootStore.products.loadCollections();
        RootStore.products.loadSettingsTags();
        RootStore.location.setLocation();
    }, []);

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<ProductsList />} />
                    <Route path="/orders" element={<OrderPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route
                        path="/collections"
                        element={<NewCollectionPage />}
                    />
                    <Route path="/history" element={<HistoryOrdersPage />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
