import { render, screen, within } from "@testing-library/react"
import ItemModel from "../models/ItemModel"
import User from "../models/User"
import ItemList from "./ItemList"

describe("ItemList", () => {
    it("Should display message when the list is empty", () => {
        const items: ItemModel[] = []
        render(<ItemList items={items} />)
        let text = screen.getByText("No item on your list, add some!!");
        expect(text).toBeInTheDocument();
    })

    it("Should not display message when the list is not empty", () => {
        let user = new User();
        user.name = "user.name"
        let item1 = new ItemModel(user);
        let item2 = new ItemModel(user);

        item1.name = "Item 1"
        item2.name = "Item 2"

        let items = [item1, item2]

        render(<ItemList items={items} />)
        let text = screen.queryByText("No item on your list, add some!!");
        expect(text).toBeNull();
    })

    it("Should display items when the list is not empty", () => {
        let user = new User();
        user.name = "user.name"
        let item1 = new ItemModel(user);
        let item2 = new ItemModel(user);

        item1.name = "Item 1"
        item2.name = "Item 2"

        let items = [item1, item2]

        render(<ItemList items={items} />)
        const list = screen.getByRole("list")
        const { getAllByRole } = within(list)
        const listItems = getAllByRole("listitem")
        expect(listItems.length).toBe(2)
    })
})