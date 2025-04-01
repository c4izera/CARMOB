import React, { useState } from "react";

const TodoList = ({ name }) => {
    const [tasks, setTodo] = useState([]);
    const [task, setTask] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [editingText, setEditingText] = useState("");

    const addTodo = () => {
        if (task.trim() === "") return;
        setTodo([...tasks, { id: Date.now(), text: task }]);
        setTask("");
    };

    const startEditing = (id, text) => {
        setEditingId(id);
        setEditingText(text);
    };

    const saveEdit = () => {
        setTodo(
            tasks.map((todo) =>
                todo.id === editingId ? { ...todo, text: editingText } : todo
            )
        );
        setEditingId(null);
        setEditingText("");
    };

    const deleteTodo = (id) => {
        setTodo(tasks.filter((task) => task.id !== id));
    };

    return (
        <div>
            <h1>{name}'s Todo List</h1>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {tasks.map((todo) => (
                    <li key={todo.id}>
                        {editingId === todo.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editingText}
                                    onChange={(e) => setEditingText(e.target.value)}
                                />
                                <button onClick={saveEdit}>Save</button>
                            </>
                        ) : (
                            <>
                                {todo.text}
                                <button onClick={() => startEditing(todo.id, todo.text)}>Edit</button>
                                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;