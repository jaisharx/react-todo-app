import React from 'react';

import styles from './Form.module.scss';
import { FaPlusSquare } from 'react-icons/fa';

const Form = (props) => {
    const inputTextHandler = (e) => {
        props.setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();

        if (props.inputText === '') return;

        const todo = {
            inputText: props.inputText,
            completed: false,
            id: Math.random() * 1000,
        };

        props.setTodos([...props.todos, todo]);
        props.setInputText(''); // resetting input field
    };

    const statusHandler = (e) => {
        props.setStatus(e.target.value);
    };

    return (
        <div>
            <header className={styles.header}>
                <h1>what're you upto today?</h1>
            </header>
            <form className={styles.form}>
                <input
                    value={props.inputText}
                    type="text"
                    className={styles.todoInput}
                    onChange={inputTextHandler}
                    spellCheck="false"
                />
                <button className={styles.todoButton} type="submit" onClick={submitTodoHandler}>
                    <FaPlusSquare />
                </button>
                <div className={styles.select}>
                    <select onChange={statusHandler} name="todos" className={styles.filterTodoList}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default Form;
