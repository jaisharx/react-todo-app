import React from 'react';
import './App.scss';

import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
    return (
        <div className="App">
            <header>
                <h1>what're you upto today?</h1>
            </header>

            <Form />

            <TodoList />
        </div>
    );
}

export default App;
