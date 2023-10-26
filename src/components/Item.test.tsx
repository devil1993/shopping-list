import React from 'react';
import { render, screen } from '@testing-library/react';
import Item from './Item';
import ItemModel from '../models/ItemModel';
import User from '../models/User';

describe("Item component", () => {
    it("Should display the item name", () => {
        let user = new User("junkUserId")
        let item = new ItemModel(user)
        item.name = "ItemName"
        render(<Item itemData={item}/>)
        const itemName = screen.getByText(item.name);
        expect(itemName).toBeInTheDocument();
    })
})