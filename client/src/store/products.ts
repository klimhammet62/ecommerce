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
    loading: boolean = false;
    clothes_tags: TClothesTags[] = [];
    settings_tags: TSettingsTags[] = [];
    new_collection: TNewCollection[] = [];
    settings_change: number = 0;
    popup: boolean = false;

    setProducts(data: TProduct[]) {
        this.products = data;
        this.loading = true;
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
        axios.get("http://localhost:5000" + url).then((res) => {
            this.setProducts(res.data);
        });
    }
    loadClothesTags() {
        const url = "/clothes_tags";
        axios.get("http://localhost:5000" + url).then((res) => {
            this.setClothesTags(res.data);
        });
    }
    loadSettingsTags() {
        const url = "/settings_tags";
        axios.get("http://localhost:5000" + url).then((res) => {
            this.responseSettingsTags(res.data);
        });
    }
    loadCollections() {
        const url = "/collections";
        axios.get("http://localhost:5000" + url).then((res) => {
            this.setCollections(res.data);
        });
    }
    togglePopup(data: boolean) {
        this.popup = data;
    }
    setClothesFilter(data: string) {
        const sort_terms = data.toLowerCase();
        axios
            .get(`http://localhost:5000/products?category=${sort_terms}`)
            .then((products) => {
                console.log(products);
                this.products = products.data;
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
