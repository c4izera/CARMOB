import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";
import Photo from "./components/photo";
import Album from "./components/album";
import TodoList from "./components/TodoList";

function App() {
  const [count, setCount] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [albumId, setAlbumId] = useState(1);

  const fetchPhotos = async () => {
    try {
      const url = `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`;
      const response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();
        const updatedPhotos = data.map((photo) => ({
          ...photo,
          thumbnailUrl: `https://picsum.photos/300?random=${photo.id}`,
        }));
        setPhotos(updatedPhotos);
      }
    } catch (error) {
      console.error('Erro na busca', error);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [albumId]); // Agora, sempre que o `albumId` mudar, a função `fetchPhotos` será chamada novamente.

  return (
    <>
      <TodoList name="CARDMOB"/>
      <Counter title="Contando..."/>
      <Counter initial="100"/>
      {/* <article>
        <h1>Meu álbum</h1>
        {photos.map((photo) => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </article> */}
      <div>
        <button onClick={() => setAlbumId(1)}>Album #1</button>
        <button onClick={() => setAlbumId(2)}>Album #2</button>
        <button onClick={() => setAlbumId(3)}>Album #3</button>
        <button onClick={() => setAlbumId(4)}>Album #4</button>
      </div>
      <Album albumId={albumId} />
    </>
  );
}

export default App;
