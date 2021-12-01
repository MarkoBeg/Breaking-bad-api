import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Search from "./Search";
import Loading from "./Loading";

function App() {
  const [allChar, setAllChar] = useState([]);
  const [nameQuery, setNameQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllCharacters = async () => {
      const allCharacters = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${nameQuery}`
      );

      console.log(allCharacters.data);
      setAllChar(allCharacters.data);
      setLoading(false);
    };
    getAllCharacters();
    setLoading(true);
  }, [nameQuery]);

  return (
    <div className="App">
      <div className="app-section">
        <Search nameSearch={(name) => setNameQuery(name)}></Search>
        <Loading isLoading={loading} data={allChar}></Loading>
      </div>
    </div>
  );
}

export default App;
