import React from 'react';

import Todo from '../Todo/Todo';
import styles from "./TodoList.module.scss";

const TodoList = (props) => {
    return (
        <div className={styles.todoContainer}>
            <ul className={styles.todoList}>
                {props.filteredTodos.map((todo) => (
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
