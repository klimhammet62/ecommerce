import axios from "axios";
import { makeAutoObservable } from "mobx";
import { TNewCollection, TProduct } from "../Types/Product";
import { TClothesTags } from "../Types/ClothesTags";
import { TSettingsTags } from "../Types/SettingsTags";

export class ProductsStore {
    public Root: any;
    constructor(Root: any) {
        makeAutoObservable(this);
        this.Root = Root;
    }

    products: TProduct[] = [];
    isLoading: boolean = true;
    isLoadingProducts: boolean = true;
    clothes_tags: TClothesTags[] = [];
    settings_tags: TSettingsTags[] = [];
    new_collection: TNewCollection[] = [];
    settings_change: number = 0;
    popup: boolean = false;

    setProducts(data: TProduct[]) {
        this.products = data;
    }
    setClothesTags(data: TClothesTags[]) {
        this.clothes_tags = data;
    }
    setSettingsTags(data: number) {
        this.settings_change = data;
    }
    setCollections(data: TNewCollection[]) {
        this.new_collection = data;
    }
    responseSettingsTags(data: TSettingsTags[]) {
        this.settings_tags = data;
    }

    loadProducts() {
        const url = "/products";
        axios
            .get("http://localhost:5000" + url)
            .then((res) => {
                this.setProducts(res.data);
            })
            .finally(() => {
                this.isLoadingProducts = false;
            });
    }
    loadClothesTags() {
        const url = "/clothes_tags";
        axios
            .get("http://localhost:5000" + url)
            .then((res) => {
                this.setClothesTags(res.data);
            })
            .finally(() => {
                this.isLoading = false;
            });
    }
    loadSettingsTags() {
        const url = "/settings_tags";
        axios
            .get("http://localhost:5000" + url)
            .then((res) => {
                this.responseSettingsTags(res.data);
            })
            .finally(() => {
                this.isLoading = false;
            });
    }
    loadCollections() {
        const url = "/collections";
        axios
            .get("http://localhost:5000" + url)
            .then((res) => {
                this.setCollections(res.data);
            })
            .finally(() => {
                this.isLoading = false;
            });
    }
    togglePopup(data: boolean) {
        this.popup = data;
    }
    setClothesFilter(data: string) {
        const sort_terms = data.toLowerCase();
        this.isLoadingProducts = true;
        axios
            .get(`http://localhost:5000/products?category=${sort_terms}`)
            .then((products) => {
                console.log(products);
                this.products = products.data;
            })
            .finally(() => {
                this.isLoadingProducts = false;
            })
            .catch((error) => console.log(error));
    }
    setSettingsFilter(data: string) {
        const sort_terms = data.toLowerCase();
        console.log(sort_terms);
        axios
            .get(`http://localhost:5000/products?category=${sort_terms}`)
            .then((products) => (this.products = products.data))
            .catch((error) => console.log(error));
    }
}
