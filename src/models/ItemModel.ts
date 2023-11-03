import { v4 } from "uuid";
import User from "./User";
class ItemModel{
    public itemId: string = ''
    public name: string = '';
    public description: string | null = null;
    public quantity: number | null = null;
    public addedBy: User;
    public checkedOut: boolean = false;
    public checkedOutBy: User | undefined;
    public isCompleted: boolean = false

    constructor(adder : User){
        this.addedBy = adder;
        this.itemId = v4()
    }
}

export default ItemModel;