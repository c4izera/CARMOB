import React from "react";

const Contato = ({ nome, telefone, onEdit, onDelete }) => {
    return (
        <li>
            <strong>{nome}</strong>: {telefone}
            <button onClick={onEdit}>Editar</button>
            <button onClick={onDelete}>Excluir</button>
        </li>
    );
};

export default Contato;