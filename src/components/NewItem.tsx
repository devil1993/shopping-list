import React, { FormEventHandler, useRef, useState } from 'react'
import ItemModel from '../models/ItemModel';
import { v4 } from 'uuid';
import User from '../models/User';

const NewItem: React.FC<{onItemCreated: (createdItem: ItemModel) => void}> = (props) => {
    let nameRef = useRef<HTMLInputElement>(null);
    let descriptionRef = useRef<HTMLTextAreaElement>(null);
    let quantityRef = useRef<HTMLInputElement>(null);
    let [warning, setWarning] = useState<string>('')
    const formResetHandler: FormEventHandler = (event) => {
        event.preventDefault();
        nameRef.current!.value = '';
        descriptionRef.current!.value = '';
        quantityRef.current!.value = '';
    } 
    const formSubmitHandler : FormEventHandler = (event) => {
        event.preventDefault();
        let createdItem: ItemModel = {
            name: nameRef.current!.value,
            description: descriptionRef.current!.value,
            quantity: quantityRef.current!.value ? Number(quantityRef.current!.value) : 0,
            itemId: v4(),
            checkedOut: false,
            isCompleted: false,
            addedBy: new User(),
            checkedOutBy: undefined
        }
        if(createdItem.name)
            props.onItemCreated( createdItem)
        else
            setWarning('Name must be present')
    }
    return <>
        <h1>Create new item</h1>
        <label id='form-label' htmlFor='new-item-form'>Enter item details</label>
        <form id='new-item-form' aria-labelledby='form-label'>
            <label htmlFor='item-name'>Item Name:</label>
            <input type='text' id="item-name" name="item-name" ref={nameRef}></input>
            {warning && <span style={{color: 'red'}}>{warning}</span>}
            <br />
            <label htmlFor='item-description'>Description (Optional):</label>
            <textarea id='item-description' ref={descriptionRef}></textarea>
            <br />
            <label htmlFor='item-quantity'>Quantity (Optional):</label>
            <input id='item-quantity' type='number' min={0} step={1} ref={quantityRef}/>
            <br />
            <button onClick={formSubmitHandler}>Add Item</button>
            <br />
            <button onClick={formResetHandler}>Reset</button>

        </form>
    </>
}

export default NewItem;