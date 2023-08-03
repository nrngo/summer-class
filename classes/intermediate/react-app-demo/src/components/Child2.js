import React, { useState } from 'react'

export default function Child2(props) {
    console.log("Child 2 ", props.number)
    // Object destructure
    const { number, setNumber } = props

    const minus = () => {
        setNumber(number - 1)
    }
    return (
        <div>
            <button onClick={minus}>Хасах</button>

            Child2 {props.number}</div>
    )
}
