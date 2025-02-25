
      import { useState } from 'react';
      import reactLogo from './assets/react.svg';
      import viteLogo from '/vite.svg';
      import './App.css';

      function App() {
        const [count, setCount] = useState(0);

        function updateCount() {
          setCount(count + 1);
        }

        const dados = {
          nome: "fulano",
          atualiza: (novo_nome) => `novo nome é ${novo_nome}`,
          endereco: {
            rua: "xyz",
            numero: 111,
            complemento: ["casa", "na esquina do supermercado ABC"]
          }
        };

        return (
          <div className="App">
            <header className="App-header">
              <img src={viteLogo} className="logo" alt="Vite logo" />
              <img src={reactLogo} className="logo react" alt="React logo" />
              <h1>React Exemplos</h1>
              <p>O nome atualizado: {dados.atualiza("Gerson")}</p>
              <p>Endereço: {dados.endereco.rua}, {dados.endereco.numero} - {dados.endereco.complemento[1]}</p>
              <button onClick={updateCount}>Clique aqui</button>
              <p>Contador: {count}</p>
            </header>
          </div>
        );
      }

      export default App;
