import React, { useState } from "react";
import Contato from "./Contato";

const ListaContatos = () => {
    const [contatos, setContatos] = useState([
        { id: 1, nome: "João", telefone: "1234-5678" },
        { id: 2, nome: "Maria", telefone: "9876-5432" },
        { id: 3, nome: "Carlos", telefone: "5678-1234" },
    ]);
    const [novoNome, setNovoNome] = useState("");
    const [novoTelefone, setNovoTelefone] = useState("");
    const [editandoId, setEditandoId] = useState(null);
    const [editandoNome, setEditandoNome] = useState("");
    const [editandoTelefone, setEditandoTelefone] = useState("");

    // Create
    const adicionarContato = () => {
        if (novoNome.trim() === "" || novoTelefone.trim() === "") return;
        setContatos([
            ...contatos,
            { id: Date.now(), nome: novoNome, telefone: novoTelefone },
        ]);
        setNovoNome("");
        setNovoTelefone("");
    };

    // Update
    const iniciarEdicao = (id, nome, telefone) => {
        setEditandoId(id);
        setEditandoNome(nome);
        setEditandoTelefone(telefone);
    };

    const salvarEdicao = () => {
        setContatos(
            contatos.map((contato) =>
                contato.id === editandoId
                    ? { ...contato, nome: editandoNome, telefone: editandoTelefone }
                    : contato
            )
        );
        setEditandoId(null);
        setEditandoNome("");
        setEditandoTelefone("");
    };

    // Delete
    const deletarContato = (id) => {
        setContatos(contatos.filter((contato) => contato.id !== id));
    };

    return (
        <div>
            <h2>Lista de Contatos</h2>
            <div>
                <input
                    type="text"
                    placeholder="Nome"
                    value={novoNome}
                    onChange={(e) => setNovoNome(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Telefone"
                    value={novoTelefone}
                    onChange={(e) => setNovoTelefone(e.target.value)}
                />
                <button onClick={adicionarContato}>Adicionar</button>
            </div>
            <ul>
                {contatos.map((contato) => (
                    <Contato
                        key={contato.id}
                        nome={contato.nome}
                        telefone={contato.telefone}
                        onEdit={() =>
                            iniciarEdicao(contato.id, contato.nome, contato.telefone)
                        }
                        onDelete={() => deletarContato(contato.id)}
                    />
                ))}
            </ul>
            {editandoId && (
                <div>
                    <h3>Editando Contato</h3>
                    <input
                        type="text"
                        value={editandoNome}
                        onChange={(e) => setEditandoNome(e.target.value)}
                    />
                    <input
                        type="text"
                        value={editandoTelefone}
                        onChange={(e) => setEditandoTelefone(e.target.value)}
                    />
                    <button onClick={salvarEdicao}>Salvar</button>
                </div>
            )}
        </div>
    );
};

export default ListaContatos;