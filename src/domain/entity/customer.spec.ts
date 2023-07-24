import Address from "./address";
import Customer from "./customer";

describe("Customer", () => {
    it("should create a customer", () => {
        expect(() => {
            const address = new Address("123", "123 Main St", "New York");
            const customer = new Customer("", "John Doe", true, address);
        }).toThrowError("Customer id cannot be empty");
    })

    it("should throw an error if name is empty", () => {  
        expect(() => {
            const address = new Address("123", "123 Main St", "New York");
            const customer = new Customer("123", "", true, address);
        }).toThrowError("Customer name cannot be empty")
    });

    it("should change name", () => {
        const address = new Address("123", "123 Main St", "New York");
        const customer = new Customer("123", "John Doe", true, address);
        customer.changeName("Naje Ede");
        expect(customer.name).toEqual("Naje Ede")
    });

    it("should activate customer", () => {
        const address = new Address("123", "123 Main St", "New York");
        const customer = new Customer("123", "John Doe", false, address);
        customer.activeCustomer();
        expect(customer.active).toEqual(true);
    });

    it("should deactivate customer", () => {
        const address = new Address("123", "123 Main St", "New York");
        const customer = new Customer("123", "John Doe", true, address);
        customer.deactivateCustomer();
        expect(customer.active).toEqual(false);
    });

    it("should throw an error if address is empty", () => {
        expect(() => {
            const customer = new Customer("123", "John Doe", false, undefined);
            customer.activeCustomer()
        }).toThrowError("Customer address cannot be empty");
    });

    it("should add reward points", () => {
        const customer = new Customer("123", "John Doe", true);
        customer.addRewardPoints(100);
        expect(customer.rewardPoints).toEqual(100);
    })

});