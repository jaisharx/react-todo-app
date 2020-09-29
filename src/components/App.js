import React, { useState, useEffect } from 'react';
import './App.scss';

import Form from './Form/Form';
import TodoList from './TodoList/TodoList';

function App() {
    const [inputText, setInputText] = useState('');
    const [status, setStatus] = useState('all');
    const [todos, setTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);

    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilteredTodos(todos.filter((todo) => todo.completed === true));
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter((todo) => todo.completed === false));
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    };

    const saveToLocalStorage = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    const getLocalStorage = () => {
        if (localStorage.getItem('todos') !== null) {
            setTodos(JSON.parse(localStorage.getItem('todos')))
        }
    };

    useEffect(getLocalStorage, []);

    useEffect(() => {
        filterHandler();
        saveToLocalStorage();
        // eslint-disable-next-line
    }, [todos, status]);

    return (
        <div className="container">
            <Form
                todos={todos}
                setTodos={setTodos}
                inputText={inputText}
                setInputText={setInputText}
                setStatus={setStatus}
            />
            <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
        </div>
    );
}

export default App;
