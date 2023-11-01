import { render, screen, within } from "@testing-library/react";
import NewItem from "./NewItem";

describe("NewItem Component", () => {
    describe("Rendering tests - ", () => {
        it("Should have a form", () => {
            render(<NewItem />)
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
            render(<NewItem />)
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
            render(<NewItem />)
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
            render(<NewItem />)
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
            render(<NewItem />)

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
        
    })
})