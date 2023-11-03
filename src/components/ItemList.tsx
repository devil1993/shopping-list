import React from 'react'
import ItemModel from '../models/ItemModel'
import Item from './Item'

const ItemList: React.FC<{items: ItemModel[]}> = (props) => {
    if(props.items.length === 0){
        return <div>No item on your list, add some!!</div>
    }

    return <>
    <h3 id="items-heading">Items</h3>
    <ul aria-labelledby='items-heading'> 
    {
        props.items.map(item => 
        <li key={item.itemId} >
            <Item itemData={item} />
        </li>
        )
    }
    </ul>
    </>
}

export default ItemList;