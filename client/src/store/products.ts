import axios from "axios";
import { makeAutoObservable } from "mobx";
import { TNewCollection, TProduct } from "../Types/Product";
import { TClothesTags } from "../Types/ClothesTags";
import { TSettingsTags, TSortObject } from "../Types/SettingsTags";

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
    settings_change: string = "";
    popup: boolean = false;
    functions: string[] = [];
    category: string = "";
    sortObject: TSortObject = { id: 0, name: "", sortBy: "", color: "" };

    setProducts(data: TProduct[]) {
        this.products = data;
    }
    setClothesTags(data: TClothesTags[]) {
        this.clothes_tags = data;
    }
    setSettingsTags(sortObject: TSortObject) {
        this.sortObject = sortObject;
        this.concatFunctions();
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
    setClothesFilter(category: string) {
        this.category = category;
        this.concatFunctions();
    }
    concatFunctions() {
        const sortByFiltering = this.sortObject.sortBy.replace("-", "");
        const order = this.sortObject.sortBy.includes("-") ? "asc" : "desc";
        const category = this.category.toLowerCase();
        this.functions = [category, sortByFiltering, order];
        this.fetchFilters();
    }
    fetchFilters() {
        this.isLoadingProducts = true;
        axios
            .get(
                `http://localhost:5000/products?category=${this.functions[0]}&_sort=${this.functions[1]}&_order=${this.functions[2]}`
            )
            .then((products) => {
                console.log(products);
                this.products = products.data;
            })
            .finally(() => {
                this.isLoadingProducts = false;
            })
            .catch((error) => console.log(error));
    }
}
