import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import '../App.css'


function Todo({ todo, onRemoveTodo }) {
    const { id, content } = todo;

    const removeTodo = () => {
        onRemoveTodo(id);
    }


    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', border: '1px solid lightgray', padding: '10px', marginTop: '6px' }} >
            <div>
                {content}
            </div>
            <div >
                <IoIosRemoveCircle className='todo-icons' onClick={removeTodo} />
                <MdEdit className='todo-icons' />
            </div>
        </div>
    )
}

export default Todo