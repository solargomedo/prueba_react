import React, { useState, useEffect } from 'react';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        setCharacters(data.results); 
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData(); 
  }, []); 

  return (
    <div className="container mt-4" >
      <h1 className="text-center mb-4">Rick and Morty Characters</h1>
      <div className="row">
        {characters.map(character => (
          <div key={character.id} className="col-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
          </div>
            </div>
        ))}
      </div>
    </div>
  );



}

export default App;

