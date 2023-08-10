import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { useEffect, useRef, useState } from "react";
import PokeCard from "../components/PokedexPage/PokeCard";
import SelectType from "../components/PokedexPage/SelectType";
import "./styles/PokedexPage.css";
import Pagination from "../components/Pagination/Pagination"

const PokedexPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("allPokemons");
  const [currentPage, setCurrentPage] = useState(1);

  const trainer = useSelector((reducer) => reducer.trainer);

  const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=250";
  const [pokemons, getAllPokemons, getPokemonByType] = useFetch(url);

  useEffect(() => {
    if (selectValue === "allPokemons") {
      getAllPokemons();
    } else {
      getPokemonByType(selectValue);
    }
  }, [selectValue]);

  const inputSearch = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(inputSearch.current.value.trim().toLowerCase());
    setCurrentPage(1);
  };

  const cbFilter = (poke) =>
    inputValue ? poke.name.includes(inputValue) : true;

  // Obtener la longitud de los pokemons después de aplicar el filtro
  const filteredPokemons = pokemons?.results.filter(cbFilter) || [];
  const totalResidents = filteredPokemons.length;

  // Calcular el número total de páginas después de aplicar el filtro
  const [residentsPerPage, setResidentsPerPage] = useState(6);
  // const residentsPerPage =
  const totalPages = Math.ceil(totalResidents / residentsPerPage);

  // Calcular el índice de inicio y fin de los pokemons en la página actual después de aplicar el filtro
  const endIndex = currentPage * residentsPerPage;
  const startIndex = endIndex - residentsPerPage;

  // Obtener los pokemons que se mostrarán en la página actual después de aplicar el filtro y paginación
  const pokemonsToShow = filteredPokemons.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="pokedex">
      <p>
        <span className="pokedexpage">Welcome {trainer}</span>, here you can
        find your favorite pokemon
      </p>
      <form className="pokedexpage_sumit" onSubmit={handleSubmit}>
        <input className="pokedexpage_text" ref={inputSearch} type="text" />
        <button className="pokedexpage_button">Search</button>
      </form>
      <SelectType setSelectValue={setSelectValue}
      setInputValue={setInputValue}
      inputSearch={inputSearch}
      selectValue={selectValue}
      setResidentsPerPage={setResidentsPerPage}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        pagesToShow={10}
      />
      <div className="card-container">
         {pokemonsToShow.map((poke) => (
          <PokeCard key={poke.url} url={poke.url} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        pagesToShow={10}
      />
       </div>
  );
};

export default PokedexPage;
