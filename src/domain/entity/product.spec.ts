import Product from "./product";

describe("Product unit tests", () => {
    it("should throw error when id is empty", () => {
        expect(() => {
            const product = new Product("", "Product", 10);
        }).toThrowError("Id is required");
    })
    
    it("should throw error when name is empty", () => {
        expect(() => {
            const product = new Product("123", "", 10);
        }).toThrowError("Name is required");
    })

    it("should throw error when price is less than zero", () => {
        expect(() => {
            const product = new Product("123", "asd", -1);
        }).toThrowError("Price must be greater than zero");
    })
    
    it("Should change name", () => {
        const product = new Product("123", "Product", 10);
        product.changeName("New Product");
        expect(product.name).toEqual("New Product");
    })

    it("Should change price", () => {
        const product = new Product("123", "Product", 10);
        product.changePrice(100)
        expect(product.price).toEqual(100)
    })
})