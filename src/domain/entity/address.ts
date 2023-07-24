export default class Address {
    private _id: string;
    private _street: string;
    private _city: string;

    constructor(id: string, street: string, city: string) {
        this._id = id;
        this._street = street;
        this._city = city;
    }
}