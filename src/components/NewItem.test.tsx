import { render, screen, within } from "@testing-library/react";
import NewItem from "./NewItem";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

describe("NewItem Component", () => {
    
    let mockCallback = jest.fn(() => {})
    describe("Rendering tests - ", () => {
        it("Should have a form", () => {
            render(<NewItem onItemCreated={mockCallback}/>)

            let label = screen.getByRole('heading', {
                name: 'Create new item'
            })
            expect(label).toBeInTheDocument();
            let formControl = screen.getByRole('form', {
                name: "Enter item details"
            })
            expect(formControl).toBeInTheDocument();

            const { getByRole } = within(formControl)
        })
        it("should have a name textbox", () => {
            render(<NewItem onItemCreated={mockCallback}/>)

            let formControl = screen.getByRole('form', {
                name: "Enter item details"
            })
            const {getByRole} = within(formControl);

            let nameTextbox = getByRole('textbox', {
                name: 'Item Name:'
            })

            expect(nameTextbox).toBeInTheDocument();
        })
        it("should have a description textbox", () => {
            render(<NewItem onItemCreated={mockCallback}/>)

            let formControl = screen.getByRole('form', {
                name: "Enter item details"
            })
            const {getByRole} = within(formControl);

            let descTextbox = getByRole('textbox', {
                name: 'Description (Optional):'
            })

            expect(descTextbox).toBeInTheDocument();
        })
        it("should have a quantity number input", () => {
            render(<NewItem onItemCreated={mockCallback}/>)

            let formControl = screen.getByRole('form', {
                name: "Enter item details"
            })
            const {getByRole} = within(formControl);

            let quantityTextBox = getByRole('spinbutton', {
                name: 'Quantity (Optional):'
            })

            expect(quantityTextBox).toBeInTheDocument();
        })
        it("should have Reset and Add Item Button", () => {
            render(<NewItem onItemCreated={mockCallback}/>)

            let addItemButton = screen.getByRole('button', {
                name: 'Add Item'
            })

            let resetButton = screen.getByRole('button', {
                name: 'Add Item'
            })

            expect(addItemButton).toBeInTheDocument();
            expect(resetButton).toBeInTheDocument();
        })
    })
    describe("Behavior tests - ", () => {
        it('Should not submit from with empty name.', () =>{
            let mockCallback = jest.fn(() => {})
            render(<NewItem onItemCreated={mockCallback}/>)
            let addItemButton = screen.getByRole('button', {
                name: 'Add Item'
            })

            act(() => {
                addItemButton && userEvent.click(addItemButton)
            })

            expect(mockCallback).toBeCalledTimes(0)
        })
        it('Should submit from with name.', () =>{
            render(<NewItem onItemCreated={mockCallback}/>)
            let addItemButton = screen.getByRole('button', {
                name: 'Add Item'
            })

            let nameField = screen.getByRole('textbox', {
                name: 'Item Name:'
            })

            act(() => {
                nameField && userEvent.click(nameField)
                userEvent.keyboard('item name')
                addItemButton && userEvent.click(addItemButton)
            })

            expect(mockCallback).toBeCalledTimes(1)
        })
        it('Submit from with empty name should display a warning', () =>{
            let mockCallback = jest.fn(() => {})
            render(<NewItem onItemCreated={mockCallback}/>)
            let addItemButton = screen.getByRole('button', {
                name: 'Add Item'
            })

            act(() => {
                addItemButton && userEvent.click(addItemButton)
            })

            let warning = screen.queryByText('name must be present', {exact: false})

            expect(warning).toBeInTheDocument()
        })

        it('Clicking reset button should reset the fields', () => {
            let mockCallback = jest.fn(() => {})
            render(<NewItem onItemCreated={mockCallback}/>)
            let resetButton = screen.getByRole('button', {
                name: 'Reset'
            })

            let nameField : HTMLInputElement = screen.getByRole('textbox', {
                name: 'Item Name:'
            })
            let descriptionField : HTMLInputElement = screen.getByRole('textbox', {
                name: 'Description (Optional):'
            })
            let quantityField : HTMLInputElement = screen.getByRole('spinbutton', {
                name: 'Quantity (Optional):'
            })

            act(() => {
                nameField && userEvent.click(nameField)
                userEvent.keyboard('item name')
                userEvent.tab();
                userEvent.keyboard('description')
                userEvent.tab(); 
                userEvent.keyboard('1')
                resetButton && userEvent.click(resetButton)
            })
            expect(nameField.value).toBe('')
            expect(descriptionField.value).toBe('')
            expect(quantityField.value).toBe('')
        })
    })
})