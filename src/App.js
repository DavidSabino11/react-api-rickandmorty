import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/`
        );
        setCharacters(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="results">
        {characters.map((character) => (
          <div>
            <img src={character.image} alt={character.name}></img>
            {character.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
