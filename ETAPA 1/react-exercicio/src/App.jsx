import "./styles/App.css";
import React from "react";
import ListaContatos from "./components/ListaContatos";

const App = () => {
    return (
        <div>
            <h1>Bem-vindo ao App</h1>
            <ListaContatos />
        </div>
    );
};


export default App;