import React from 'react'

export default function Child1(props) {
    console.log("Child 1", props.number)
    const { number, setNumber } = props
    const add = () => {
        setNumber(number + 1)
    }
    return (
        <div>
            <button onClick={add} >Нэмэх </button>
            Child1    {props.number}
        </div>
    )
}
