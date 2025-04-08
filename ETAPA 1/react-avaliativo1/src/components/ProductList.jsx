import React, { useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
    const [products, setProducts] = useState([
        { id: 1, nome: "Produto 1", preco: 29.99 },
        { id: 2, nome: "Produto 2", preco: 49.99 },
        { id: 3, nome: "Produto 3", preco: 19.99 },
    ]);

    const [newProductName, setNewProductName] = useState("");
    const [newProductPrice, setNewProductPrice] = useState("");

    const [editingId, setEditingId] = useState(null);
    const [editingName, setEditingName] = useState("");
    const [editingPrice, setEditingPrice] = useState("");

    // Create
    const addProduct = () => {
        if (newProductName.trim() === "" || newProductPrice.trim() === "") return;
        setProducts([
            ...products,
            { id: Date.now(), nome: newProductName, preco: parseFloat(newProductPrice) },
        ]);
        setNewProductName("");
        setNewProductPrice("");
    };

    // Update
    const startEditing = (id, nome, preco) => {
        setEditingId(id);
        setEditingName(nome);
        setEditingPrice(preco);
    };

    const saveEdit = () => {
        setProducts(
            products.map((product) =>
                product.id === editingId
                    ? { ...product, nome: editingName, preco: parseFloat(editingPrice) }
                    : product
            )
        );
        setEditingId(null);
        setEditingName("");
        setEditingPrice("");
    };

    // Delete
    const deleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    return (
        <div>
            <h2>Lista de Produtos</h2>
            <div>
                <input
                    type="text"
                    placeholder="Nome do Produto"
                    value={newProductName}
                    onChange={(e) => setNewProductName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Preço do Produto"
                    value={newProductPrice}
                    onChange={(e) => setNewProductPrice(e.target.value)}
                />
                <button onClick={addProduct}>Adicionar Produto</button>
            </div>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                {products.map((product) => (
                    <div key={product.id} style={{ margin: "10px" }}>
                        <ProductCard nome={product.nome} preco={product.preco} />
                        <button onClick={() => startEditing(product.id, product.nome, product.preco)}>
                            Editar
                        </button>
                        <button onClick={() => deleteProduct(product.id)}>Excluir</button>
                    </div>
                ))}
            </div>
            {editingId && (
                <div>
                    <h3>Editando Produto</h3>
                    <input
                        type="text"
                        value={editingName}
                        onChange={(e) => setEditingName(e.target.value)}
                    />
                    <input
                        type="number"
                        value={editingPrice}
                        onChange={(e) => setEditingPrice(e.target.value)}
                    />
                    <button onClick={saveEdit}>Salvar</button>
                </div>
            )}

        </div>
    );
};

export default ProductList;