import axios from "axios";
const { makeAutoObservable } = require("mobx");

export class Location {
    public Root: any;
    constructor(Root: any) {
        makeAutoObservable(this);
        this.Root = Root;
    }
    geo: string[] = [];

    setLocation() {
        axios
            .get("https://api.ipregistry.co/?key=1pe9y7zaqovjoq1o")
            .then((location: any) => {
                if (location.code) {
                    this.geo = location.data.code.split("_").join(" ");
                } else {
                    this.geo = location.data.location.city;
                }
            })
            .catch((error: any) => {
                console.log(error);
            });
    }
}
