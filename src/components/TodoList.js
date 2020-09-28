import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {props.todos.map((todo) => (
                    <Todo
                        text={todo.inputText}
                        key={todo.id}
                        setTodos={props.setTodos}
                        todos={props.todos}
                        todo={todo}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
