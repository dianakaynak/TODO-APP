import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import '../App.css'
import { FaCheck } from "react-icons/fa";


function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
    const { id, content } = todo;

    const [editable, setEditable] = useState(false);

    const removeTodo = () => {
        onRemoveTodo(id);
    }
    const updateTodo = () => {
        const request = {
            id: id,
            content: newTodo
        }
        onUpdateTodo(request);
        setEditable(false);
    }

    const [newTodo, setNewTodo] = useState(content)

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', border: '1px solid lightgray', padding: '10px', marginTop: '6px' }} >
            <div>
                {
                    editable ? <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
                        style={{ width: '380px' }}
                        className='todo-input' type="text" /> : content
                }
            </div>
            <div >
                <IoIosRemoveCircle className='todo-icons' onClick={removeTodo} />
                {
                    editable ? <FaCheck className='todo-icons' onClick={updateTodo} /> : <MdEdit className='todo-icons' onClick={() => setEditable(true)} />
                }


            </div>
        </div>
    )
}

export default Todo