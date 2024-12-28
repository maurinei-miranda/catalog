import GameCard from "../../components/GameCard/GameCardComponent";
import PageTitle from "../../components/PageTitle/PageTitleComponent";
import "./catalog-page.css";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const NEXT_PUBLIC_SUPABASE_URL = "https://kkwymmruitvnkygfzwqf.supabase.co";
const NEXT_PUBLIC_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtrd3ltbXJ1aXR2bmt5Z2Z6d3FmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUwMTc1MjIsImV4cCI6MjA1MDU5MzUyMn0.YW6OTOvY4g4gHkZICGgL5CuYXRW35w1t_Kvqd6_ONhg";
const SUPBASE_CLIENT = createClient(
  NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// const fetchDataLocal = async () => {
//   try {
//     const response = await fetch("http://192.168.100.135:3000/games").catch();
//     if (!response.ok) {
//       throw new Error(`HTTP Error! status: ${response.status}`);
//     }
//     return await response.json();
//   } catch (err) {
//     console.error("erro ao buscar dados locais: ", err.message);
//     throw new Error("falha ao buscar dados locais");
//   }
// };

const fetchDataFromSupabase = async () => {
  let { data: supBaseGames, supBaseError } = await SUPBASE_CLIENT.from(
    "games"
  ).select("*");
  if (supBaseError) throw supBaseError;
  return supBaseGames;
};

function CatalogPage() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadGameList = async () => {
    //should return data
    console.log("Fetching Games Data");
    try {
      const data = await fetchDataFromSupabase();
      setGames(data);
    } catch (err) {
      console.error(err);
      setError(err.message || "erro desconhecido.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadGameList();
  }, []);

  if (loading)
    return (
      <div id="page-content">
        <PageTitle valor="Catálogo de Jogos" />
        <p> Carregando lista de jogos..</p>
      </div>
    );
  if (error) {
    return (
      <div id="page-content">
        <PageTitle valor="Catálogo de Jogos" />
        <p className="text-center"> Error: {error} </p>
      </div>
    );
  }

  return (
    <div id="page-content">
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
