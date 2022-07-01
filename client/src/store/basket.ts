const { makeAutoObservable } = require("mobx");

export class Basket {
    public Root: any;
    constructor(Root: any) {
        makeAutoObservable(this);
        this.Root = Root;
    }

    count: number = 0;

    setCount(value) {
        this.count = value;
    }
}
