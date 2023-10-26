import ItemModel from "../models/ItemModel";

const Item : React.FC <{itemData: ItemModel}> = (props) => {
    return <div>{props.itemData.name}</div>
}

export default Item;