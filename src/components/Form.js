import React from 'react';
import { FaPlusSquare } from 'react-icons/fa';

const Form = (props) => {
    const inputTextHandler = (e) => {
        props.setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();

        if(props.inputText === "") return;

        const todo = {
            inputText: props.inputText,
            completed: false,
            id: Math.random() * 1000,
        };

        props.setTodos([...props.todos, todo]);
        props.setInputText(""); // resetting input field
    };

    const statusHandler = (e) => {
        props.setStatus(e.target.value);
    };

    return (
        <form>
            <input
                value={props.inputText}
                type="text"
                className="todo-input"
                onChange={inputTextHandler}
                spellCheck="false"
            />
            <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                <FaPlusSquare />
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;
