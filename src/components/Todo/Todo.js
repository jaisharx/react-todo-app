import React from 'react';

import styles from "./Todo.module.scss";
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
        <div className={styles.todo}>
            <li className={`${props.todo.completed ? styles.completed : ''}`}>{props.text}</li>
            <button className={styles.completeBtn} onClick={completeHandler}>
                <FaCheck />
            </button>
            <button className={styles.trashBtn} onClick={deleteHandler}>
                <FaTrash />
            </button>
        </div>
    );
};

export default Todo;
