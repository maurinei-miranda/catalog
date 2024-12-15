import GameCard from "../../components/GameCard/GameCardComponent";
import PageTitle from "../../components/PageTitle/PageTitleComponent";
import "./index.css";
import { useState, useEffect } from "react";

function CatalogPage() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const fetchGames = async () => {
  //   console.log("Fetching Games Data");
  //   try {
  //     const response = await fetch("https://api.examples.com/games");
  //     if (!response.ok) {
  //       throw new Error(`HTTP Error! status: ${response.status}`);
  //     }
  //     const data = await response.json();
  //     setGames(data);
  //   } catch (err) {
  //     setError(err.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const gamesMock = [
    {
      title: "Warzone",
      primaryPrice: "199,99",
      parentalPrice: "19,90",
      img: "",
    },
    { title: "XPTO", primaryPrice: "199,99", parentalPrice: "19,90", img: "" },
    {
      title: "Warzone",
      primaryPrice: "199,99",
      parentalPrice: "19,90",
      img: "",
    },
    {
      title: "Warzone",
      primaryPrice: "199,99",
      parentalPrice: "19,90",
      img: "",
    },
    {
      title: "Warzone",
      primaryPrice: "199,99",
      parentalPrice: "19,90",
      img: "",
    },
  ];

  useEffect(() => {
    //TODO mudar para chamada do fetch
    setGames(gamesMock);
    setLoading(false)
    // setError("Falha ao carregar")
  }, [])


  if (loading) return <p> Loading..</p>;
  if (error) return <p> Error: {error} </p>;

  return (
    <div>
      <PageTitle valor="Catálogo de Jogos" />
      <div id="games-catalog">
        {games.map((game, index) => (
          <GameCard
            key={index}
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
