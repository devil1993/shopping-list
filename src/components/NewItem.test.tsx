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
        it("should have a name textbox", () => {})
        it("should have a description textbox", () => {})
        it("should have a quantity textbox", () => {})
    })
    describe("Behavior tests - ", () => {
        
    })
})