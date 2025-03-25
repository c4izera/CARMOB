import React, { useState } from "react";

const TodoList = ({ name }) => {
    const [tasks, setTodo] = useState([]);
    const [task, setTask] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [editingText, setEditingText] = useState("");

    // Callback do CRUD

    // Create
    const addTodo = () => {
        if (task.trim() === "") return;
        setTodo([...tasks, { id: Date.now(), text: task }]);
        setTask("");
    };

    // Read => não vamos ter callback pois será gerada uma listagem

    // Update
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

    // Delete
    const deleteTodo = (id) => {
        setTodo(tasks.filter((task) => task.id !== id));
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>A fazer: {name}</h2>
            <input
                type="text"
                value={task}
                onChange={(event) => setTask(event.target.value)}
                placeholder="Escreva sua tarefa..."
            />
            <button onClick={addTodo}>Incluir tarefa</button>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {tasks.map((todo) => (
                    <li key={todo.id} style={{ margin: "10px 0px" }}>
                        {editingId === todo.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editingText}
                                    onChange={(event) => setEditingText(event.target.value)}
                                />
                                <button onClick={saveEdit}>Salvar</button>
                            </>
                        ) : (
                            <>
                                {todo.text}
                                <button onClick={() => startEditing(todo.id, todo.text)}>Editar</button>
                                <button onClick={() => deleteTodo(todo.id)}>Excluir</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
