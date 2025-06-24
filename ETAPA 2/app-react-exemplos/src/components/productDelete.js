import React from 'react';
import { deleteProduct } from '../api';

const ProductDelete = ({ id }) => {
  const handleDelete = async () => {
    await deleteProduct(id);
    alert('Produto excluído com sucesso!');
  };

  return <button onClick={handleDelete}>Excluir Produto</button>;
};

export default ProductDelete;