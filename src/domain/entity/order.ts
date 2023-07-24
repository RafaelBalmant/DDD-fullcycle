export default class Order {
    private _id: string;
    private _customerId: string;
    private _items: any[];
    private _total?: number;

    constructor(id: string, customerId: string, items: any[], total?: number) {
        this._id = id;
        this._customerId = customerId;
        this._items = items;
        this._total = total;
        this.validate()
    }
    
    validate(){
        if (!this._id.length) {
            throw new Error("Order id cannot be empty");
        } else if(!this._customerId.length) {
            throw new Error("Order customerId cannot be empty");
        } else if(!this._items.length) {
            throw new Error("Order items cannot be empty");
        } else if(this._items.some(item => item.quantity <= 0)){
            throw new Error("Quantity must be greater than 0")
        }
    }
    total(): number {
        return this._items.reduce((acc, item) => acc + item.price, 0);
    }
}