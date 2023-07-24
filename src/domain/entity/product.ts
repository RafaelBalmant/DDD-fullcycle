export default class Product {
    private _id: string;
    private _name: string;
    private _price: number;

    constructor(id: string, name: string, price: number) {
        this._id = id;
        this._name = name;
        this._price = price;
        this.validate();
    }

    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    changePrice(price: number){
        this._price = price;
        this.validate();
    }

    get price(): number {
        //hello git
        return this._price;
    }

    get name(): string {
        return this._name;
    }

    validate() {
        if (!this._id.length) {
            throw new Error("Id is required");
        } else if (!this._name.length) {
            throw new Error("Name is required");
        } else if (this._price < 0){
            throw new Error("Price must be greater than zero");
        }
    }
}