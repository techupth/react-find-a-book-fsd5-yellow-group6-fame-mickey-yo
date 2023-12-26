import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [books, setbooks] = useState([]);
  const getbook = async (e, searchValue) => {
    setSearchValue(e.target.value);
    const result = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchValue}`
    );
    setbooks(result.data.items);
  };
  return (
    <div className="App">
      <h1>Find a Book</h1>
      <input type="text" onChange={(e) => getbook(e, searchValue)}></input>

      {books.map((data) => {
        return <div>{data.volumeInfo.title}</div>;
      })}
    </div>
  );
}

export default App;
