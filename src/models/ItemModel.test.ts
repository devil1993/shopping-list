import ItemModel from "./ItemModel";
import User from "./User";

describe("ItemModel", () => {
    it("Should set up the itemId & added by", () => {
        let user = new User();
        let item = new ItemModel(user);

        expect(item.addedBy).toBe(user);
        expect(item.itemId).not.toBe('');
    })
})