import OrderItem from "../entity/order_item";
import OrderService from "./order.service";
import Order from "../entity/order";
import Customer from "../entity/customer";

describe("OrderService", () => {
  it("should place an order", () => {
    const customer = new Customer("c1", "client 1", true);
    const OrderItem1 = new OrderItem("i1", "Item 1", 100, "p1", 1);
    const order = OrderService.placeOrder(customer, [OrderItem1]);
    expect(customer.rewardPoints).toBe(50);
    expect(order.total()).toBe(100);
  });

  it("should get total of all orders", () => {
    const OrderItem1 = new OrderItem("i1", "Item 1", 100, "p1", 1);
    const OrderItem2 = new OrderItem("i2", "Item 2", 200, "p2", 2);

    const order = new Order("order1", "client 1",  [OrderItem1]);
    const order2 = new Order("order2", "client 1",  [OrderItem2]);

    const total = OrderService.total([order, order2]);

    expect(total).toBe(500);
  })
});