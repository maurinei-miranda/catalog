import GameCard from "../../components/GameCard/GameCardComponent";
import PageTitle from "../../components/PageTitle/PageTitleComponent";
import "./index.css";
import { useState, useEffect } from "react";

function CatalogPage() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGames = async () => {
    console.log("Fetching Games Data");
    try {
      const response = await fetch("http://192.168.100.135:3000/games").catch();
      if (!response.ok) {
        throw new Error(`HTTP Error! status: ${response.status}`);
      }
      const data = await response.json();
      setGames(data);
      setLoading(false);
    } catch (err) {
      err.message == "Failed to fetch"
        ? setError("Falha ao buscar jogos")
        : setError(err.message);
      // setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  if (loading) return <p> Loading..</p>;
  if (error) {
    return (
      <div>
        <PageTitle valor="Catálogo de Jogos" />
        <p className="text-center"> Error: {error} </p>
      </div>
    );
  }

  return (
    <div>
      <PageTitle valor="Catálogo de Jogos" />
      <div id="games-catalog">
        {games.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            primariaPreco={game.primaryPrice}
            parentalPreco={game.parentalPrice}
            img={game.img}
          />
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;
