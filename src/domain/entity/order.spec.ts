import Order from "./order";
import OrderItem from "./order_item";

describe("Order", () => {
    it("should throw an error if id is empty", () => {
        expect(() => {
            const order = new Order("", "123", [{price: 10}, {price: 20}], 0);
        }).toThrowError("Order id cannot be empty");    
    })

    it("should throw an error if customerId is empty", () => {
        expect(() => {
            const order = new Order("123", "", [{price: 10}, {price: 20}], 0);
        }).toThrowError("Order customerId cannot be empty");
    });


    it("should throw an error if items of order is not greater 0", () => {
        expect(() => {
            const order = new Order("123", "123", [], 0);
        }).toThrowError("Order items cannot be empty");
    });

    it("should calculate total", () => {
        const item = new OrderItem("123", "123", 100, "p1", 2);
        const item2 = new OrderItem("123", "123", 200, "p2", 2);

        const order = new Order("123", "123", [item]);
        const total = order.total();
        expect(total).toEqual(200);

        const order2 = new Order("123", "123", [item, item2]);
        const total2 = order2.total()
        expect(total2).toEqual(600)
    });

    it("should throw error if the qtd is greater than 0", () => {
        expect(() => {
            const item = new OrderItem("123", "123", 100, "p1", 0);
            const order = new Order("123", "123", [item]);
        }).toThrowError("Quantity must be greater than 0")
    });
});