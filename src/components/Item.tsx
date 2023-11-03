import { useState } from "react";
import ItemModel from "../models/ItemModel";

const Item : React.FC <{itemData: ItemModel}> = (props) => {
    let [item, setItem] = useState<ItemModel>(props.itemData)
    let borderColor = item.checkedOut ? 'red' : 'blue'
    borderColor = item.isCompleted ? 'green' : borderColor;
    const checkOutHandler = () => {
        setItem(item => {
            return {
                ...item,
                checkedOut: !item.checkedOut
            }
        })
    }

    const completionHandler = () => {
        setItem(item => {
            return {
                ...item,
                isCompleted: true
            }
        })
    }

    let itemData = <h4>
    {item.name} {item.quantity && <span style={{color: 'red', backgroundColor:'#C1C1C1', padding: '5px'}}>{item.quantity}</span>}
    </h4>
    return <div style={{border: '3px solid', borderColor: borderColor, margin: '2px', padding: '5px'}}>
        {!item.isCompleted && itemData}
        {item.isCompleted && <s data-testid="strikethrough">{itemData}</s>}
        {item.description && <p>{item.description}</p>}
        {!item.checkedOut && !item.isCompleted && <button onClick={checkOutHandler}>Check Out</button>}
        {item.checkedOut && !item.isCompleted && <><button onClick={checkOutHandler}>Undo Checkout</button><button onClick={completionHandler}>Done</button></>}
    </div>
}

export default Item;