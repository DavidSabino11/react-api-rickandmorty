import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  const [nameChar, setNameChar] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${nameChar}`
        );
        setCharacters(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [nameChar]);

  return (
    <div className="App">
      <div className="header">
        <input
          type="text"
          placeholder={"Pesquisar personagem"}
          onChange={event => setNameChar(event.target.value)}
          value={nameChar}
        ></input>
      </div>

      <div className="res">
        {characters.map((character) => (
          <div className="name">
            <img src={character.image} alt={character.name}></img>
            {character.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
