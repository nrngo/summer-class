import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoTask from './TodoTask'

export default function Todo() {
    // 1. State: Компонент төлөв
    // 2. Props: Компонент гаднаас орж ирэх утга
    const [taskList, setTaskList] = useState([])
    const onTaskAdd = (text) => {
        console.log("onTaskAdd function", text)
        // const tasklist = [1, 1 , 1]
        const newList = [...taskList, text]
        setTaskList(newList)
    }
    const onTaskDelete = (text) => {
        // [1,2,3]
        // 1
        // ! == 1   => 2,3
        const newTasks = taskList.filter(task => task !== text)
        console.log("On delete clicked", text, newTasks)
        setTaskList(newTasks)
    }
    console.log("taskList", taskList)
    return (
        <div className='todo-container'>
            <h1>TODOS</h1>

            <TodoInput onTaskAdd={onTaskAdd} />
            {
                taskList.map(task => {
                    return <TodoTask text={task} onTaskDelete={onTaskDelete} />
                })
            }


        </div>
    );
}
