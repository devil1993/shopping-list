import React from 'react'

const NewItem: React.FC = (props) => {
    return <>
        <h1>Create new item</h1>
        <label id='form-label' htmlFor='new-item-form'>Enter item details</label>
        <form id='new-item-form' aria-labelledby='form-label'>
            <label htmlFor='item-name'>Item Name:</label>
            <input type='text' id="item-name" name="item-name"></input>
            <label htmlFor='item-description'>Description (Optional):</label>
            <textarea id='item-description'></textarea>
            <label htmlFor='item-quantity'>Quantity (Optional):</label>
            <input id='item-quantity' type='number' min={0} step={1} />
            <button>Add Item</button>
            <button>Reset</button>
        </form>
    </>
}

export default NewItem;