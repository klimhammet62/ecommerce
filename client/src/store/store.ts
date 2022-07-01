import { makeAutoObservable } from "mobx";
import { Basket } from "./basket";
import { ProductsStore } from "./products";
import { Location } from "./location";

class Store {
    constructor() {
        makeAutoObservable(this);
    }
    public location = new Location(this);
    public basket = new Basket(this);
    public products = new ProductsStore(this);
}

export const RootStore = new Store();
