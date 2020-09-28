import React from 'react';
import { FaPlusSquare } from 'react-icons/fa';

const Form = () => {
    return (
        <form>
            <input type="text" className="todo-input" />
            <button className="todo-button" type="submit">
                <FaPlusSquare />
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;
