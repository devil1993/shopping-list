import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Item from './Item';
import ItemModel from '../models/ItemModel';
import User from '../models/User';
import { act } from 'react-dom/test-utils';

describe("Item component", () => {

    it("Should display the item name without strike out for incomplete item", () => {
        let user = new User("junkUserId")
        let item = new ItemModel(user)
        item.name = "ItemName"
        render(<Item itemData={item} />)
        const itemName = screen.getByRole('heading', { name: item.name });
        expect(itemName).toBeInTheDocument();
        const strikeThrough = screen.queryAllByTestId('strikethrough')
        expect(strikeThrough.length).toBe(0);
    })

    it("Should display the item name striked out for completed item", () => {
        let user = new User("junkUserId")
        let item = new ItemModel(user)
        item.name = "ItemName"
        item.isCompleted = true;
        render(<Item itemData={item} />)
        const itemName = screen.getByRole('heading', { name: item.name });
        expect(itemName).toBeInTheDocument();
        const strikeThrough = screen.getByTestId('strikethrough')
        expect(strikeThrough).toBeInTheDocument();
    })

    it("Should not display the item description when not provided", () => {
        let desc = "some description"
        let user = new User("junkUserId")
        let item = new ItemModel(user)
        item.name = "ItemName"
        render(<Item itemData={item} />)
        const itemName = screen.getByText(item.name);
        expect(itemName).toBeInTheDocument();
        const itemDesc = screen.queryByText(desc);
        expect(itemDesc).toBeNull();
    })

    it("Should display the item description when provided", () => {
        let desc = "some description"
        let user = new User("junkUserId")
        let item = new ItemModel(user)
        item.description = desc
        item.name = "ItemName"
        render(<Item itemData={item} />)
        const itemName = screen.getByText(item.name);
        expect(itemName).toBeInTheDocument();
        const itemDesc = screen.queryByText(desc);
        expect(itemDesc).toBeInTheDocument();
    })

    it("Should display a check out button if not checked out.", () => {
        let user = new User("junkUserId")
        let item = new ItemModel(user)
        item.name = "ItemName"
        render(<Item itemData={item} />)
        const button = screen.queryByRole('button', {
            name: 'Check Out'
        });
        expect(button).toBeInTheDocument();
    })

    it("Should not display a check out button if already checked out.", () => {
        let user = new User("junkUserId")
        let item = new ItemModel(user)
        item.name = "ItemName"
        item.checkedOut = true;
        render(<Item itemData={item} />)
        const button = screen.queryByRole('button', {
            name: 'Check Out'
        });
        expect(button).not.toBeInTheDocument();
    })

    it("Should display a Done button if already checked out.", () => {
        let user = new User("junkUserId")
        let item = new ItemModel(user)
        item.name = "ItemName"
        item.checkedOut = true;

        render(<Item itemData={item} />)
        const button = screen.queryByRole('button', {
            name: 'Done'
        });
        expect(button).toBeInTheDocument();
    })

    it("Should display a undo checkout button if already checked out.", () => {
        let user = new User("junkUserId")
        let item = new ItemModel(user)
        item.name = "ItemName"
        item.checkedOut = true;
        render(<Item itemData={item} />)
        const button = screen.queryByRole('button', {
            name: 'Undo Checkout'
        });
        expect(button).toBeInTheDocument();
    })

    it("Should not display any button if completed", () => {
        let user = new User("junkUserId")
        let item = new ItemModel(user)
        item.name = "ItemName"
        item.isCompleted = true;
        item.checkedOut = true;
        render(<Item itemData={item} />)
        let button = screen.queryByRole('button', {
            name: 'Undo Checkout'
        });
        expect(button).not.toBeInTheDocument();
        button = screen.queryByRole('button', {
            name: 'Done'
        });
        expect(button).not.toBeInTheDocument();

        item.checkedOut = false;
        render(<Item itemData={item} />)
        button = screen.queryByRole('button', {
            name: 'Check Out'
        });
        expect(button).not.toBeInTheDocument();
    })

    it("Should display a undo checkout button after clicking on check out", () => {
        let user = new User("junkUserId")
        let item = new ItemModel(user)
        item.name = "ItemName"
        item.checkedOut = false;
        render(<Item itemData={item} />)
        let button = screen.queryByRole('button', {
            name: 'Undo Checkout'
        });
        expect(button).not.toBeInTheDocument();

        button = screen.queryByRole('button', {
            name: 'Check Out'
        });
        expect(button).toBeInTheDocument();


        act(() => {
            if (button)
                userEvent.click(button)
        })

        button = screen.queryByRole('button', {
            name: 'Undo Checkout'
        });
        expect(button).toBeInTheDocument();

        button = screen.queryByRole('button', {
            name: 'Check Out'
        });
        expect(button).not.toBeInTheDocument();

    })

    it("Should display a checkout button after clicking on undo check out for checked out item", () => {
        let user = new User("junkUserId")
        let item = new ItemModel(user)
        item.name = "ItemName"
        item.checkedOut = true;
        render(<Item itemData={item} />)
        
        let undoButton = screen.queryByRole('button', {
            name: 'Undo Checkout'
        });
        expect(undoButton).toBeInTheDocument();
        let coButton = screen.queryByRole('button', {
            name: 'Check Out'
        });
        expect(coButton).not.toBeInTheDocument();


        act(() => {
            if (undoButton)
                userEvent.click(undoButton)
        })

        undoButton = screen.queryByRole('button', {
            name: 'Undo Checkout'
        });
        expect(undoButton).not.toBeInTheDocument();

        coButton = screen.queryByRole('button', {
            name: 'Check Out'
        });
        expect(coButton).toBeInTheDocument();
    })
})