import Address from "./address";

export default class Customer{
    private _id: string;
    private _name: string;  
    private _address?: Address;
    private _active: boolean = false;
    private _rewardPoints: number = 0;

    constructor(id: string, name: string, active: boolean, address?: Address){
        this._id = id;
        this._name = name;
        this._address = address;
        this._active = active;
        this.validate();
    }

    get name(): string{
        return this._name;
    }

    get active(): boolean {
        return this._active;
    }

    get rewardPoints(): number {
        return this._rewardPoints;
    }

    get id(): string {
        return this._id
    }

    validate() {
        if (!this._name.length) {
            throw new Error("Customer name cannot be empty");
        } else if (!this._id.length) {
            throw new Error("Customer id cannot be empty");
        }
    }

    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    activeCustomer(){
        this._active = true;
        this.validate() 
    }
    deactivateCustomer(){
        this._active = false;
    }

    addRewardPoints(points: number){
        this._rewardPoints += points;
    }
}