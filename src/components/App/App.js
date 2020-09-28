import React from 'react';
import './App.scss';

import Form from '../Form';
import TodoList from '../TodoList';

function App() {
    return (
        <div className="App">
            <header>
                <h1>what're you upto today?</h1>
            </header>

            <Form /> {/* search box */}

            <TodoList /> {/* todo items */}
        </div>
    );
}

export default App;
