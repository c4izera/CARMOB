import React, { useState } from 'react';
import { updateProduct } from '../api';

const ProductEdit = ({ id }) => {
  const [updates, setUpdates] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct(id, updates);
    alert('Produto atualizado com sucesso!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Editar Produto</h1>
      <input
        type="text"
        placeholder="Nome"
        onChange={(e) => setUpdates({ ...updates, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Preço"
        onChange={(e) => setUpdates({ ...updates, price: e.target.value })}
      />
      <button type="submit">Atualizar</button>
    </form>
  );
};

export default ProductEdit;