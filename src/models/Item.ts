import User from "./User";
class Item{
    public name: string = '';
    public description: string | null = null;
    public quantity: number | null = null;
    public addedBy: User;
    public checkedOut: boolean = false;
    public checkedOutBy: User | undefined;

    constructor(adder : User){
        this.addedBy = adder;
    }
}

export default Item;