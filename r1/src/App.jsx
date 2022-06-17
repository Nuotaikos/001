import { useEffect, useState } from "react";
// import { Pokemons } from "./Components/Pokemonai";
import Pokemon from "./Components/Pokemonai/Pokemons";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.results.map(Pokemon => (
          <li key={Pokemon.id}>
            {Pokemon.name} {Pokemon.url}
          </li>
        ))}
      </ul>
    );
  }
}
export default App;