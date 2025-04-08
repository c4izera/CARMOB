import React from "react";

const ProductCard = ({ nome, preco }) => {
    return (
        <div style={styles.card}>
            <h3 style={styles.nome}>{nome}</h3>
            <p style={styles.preco}>Preço: R$ {preco.toFixed(2)}</p>
            <button style={styles.botao}>Adicionar ao Carrinho</button>
        </div>
    );
};

const styles = {
    card: {
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        textAlign: "center",
        width: "200px",
        margin: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    nome: {
        fontSize: "18px",
        margin: "8px 0",
    },
    preco: {
        fontSize: "16px",
        color: "#555",
        margin: "8px 0",
    },
    botao: {
        backgroundColor: "#4caf50",
        color: "white",
        border: "none",
        padding: "10px 15px",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "14px",
    },
};

export default ProductCard;