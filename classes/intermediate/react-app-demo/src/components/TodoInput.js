import React, { useState } from 'react'
const TodoInput = (props) => {

    const { onTaskAdd } = props
    // let inputText = ""
    const [inputText, setInputText] = useState()
    const onInputChange = (event) => {
        const text = event.target.value;
        setInputText(text)
    }
    const onClick = () => {
        setInputText("")
        onTaskAdd(inputText)
    }
    return (
        <div>
            <input value={inputText} onChange={onInputChange} name='todoText' placeholder='Add Todo..' />
            <button onClick={onClick} > Submit </button>
        </div>

    );
}

export default TodoInput;