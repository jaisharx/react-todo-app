import React from 'react';
import { FaCheck, FaTrash } from 'react-icons/fa';

const Todo = (props) => {
    const deleteHandler = () => {
        props.setTodos(props.todos.filter((el) => el.id !== props.todo.id));
    };

    const completeHandler = () => {
        props.setTodos(
            props.todos.map((item) => {
                if (item.id === props.todo.id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                }
                return item;
            })
        );
    };

    return (
        <div className="todo">
            <li className={`todo-item ${props.todo.completed ? 'completed' : ''}`}>{props.text}</li>
            <button className="complete-btn" onClick={completeHandler}>
                <FaCheck />
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <FaTrash />
            </button>
        </div>
    );
};

export default Todo;
