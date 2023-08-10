import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import "./styles/PokeIdPage.css"
import CardInfo from "../components/pokeidpage/CardInfo";


const PokeIdPage = () => {
  const { id } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const [pokemon, getSinglePokemon] = useFetch(url);

  useEffect(() => {
    getSinglePokemon();
  }, [id]);

  console.log(pokemon);

  return (
    <article className="pokeidpage">
      <div className="pokeid_body">
      <CardInfo 
      pokemon={pokemon}
      id={id}
      />
      <section className="movements">
        <h2 className="movements_name">
          movements
        </h2>
        <div className="movements_list">
        {pokemon?.moves.map(mov => (
          <span className="movements_list_value" key={mov.move.url}>
            {mov.move.name}
          </span>
        )) }
      </div>
      </section>
      </div>
    </article>
  );
};

export default PokeIdPage;
