import React from 'react'

const NewItem: React.FC = (props) => {
    return <>
        <h1>Create new item</h1>
        <label id='form-label' htmlFor='new-item-form'>Enter item details</label>
        <form id='new-item-form' aria-labelledby='form-label'>
            <input type='text' id="item-name" name="item-name"></input>
        </form>
    </>
}

export default NewItem;