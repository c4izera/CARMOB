import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";
import Photo from "./components/photo";  // Assuming you have a Photo component

function App() {
  const [count, setCount] = useState(0);  // Counter state
  const [photos, setPhotos] = useState([]); // Photos state

  const fetchPhotos = async () => {
    try {
      const url = 'https://jsonplaceholder.typicode.com/albums/1/photos';
      const response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();
        // Update photos data with thumbnailUrl
        const updatedData = data.map((photo) => ({
          ...photo,
          thumbnailUrl: `https://picsum.photos/300?random=${photo.id}`,
        }));
        setPhotos(updatedData);
      }
    } catch (error) {
      console.error('Erro na busca', error);
    }
  };

  // Fetch photos once when component mounts
  useEffect(() => {
    fetchPhotos();
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} alt="React logo" />
        <img src={viteLogo} alt="Vite logo" />
        <h1>Meu álbum</h1>
      </header>
      
      {/* Counter Component */}
      <Counter title="Contador" initial={count} />

      {/* Photos Gallery */}
      <div className="photo-gallery">
        {photos.length === 0 ? (
          <p>Carregando fotos...</p> // Display a loading message while photos are being fetched
        ) : (
          photos.map((photo) => (
            <Photo key={photo.id} photo={photo} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
