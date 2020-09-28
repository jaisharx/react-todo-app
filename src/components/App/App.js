import React, { useState } from 'react';
import './App.scss';

import Form from '../Form';
import TodoList from '../TodoList';

function App() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);

    return (
        <div className="App">
            <header>
                <h1>what're you upto today?</h1>
            </header>
            <Form
                todos={todos}
                setTodos={setTodos}
                inputText={inputText}
                setInputText={setInputText}
            />
            <TodoList />
        </div>
    );
}

export default App;
