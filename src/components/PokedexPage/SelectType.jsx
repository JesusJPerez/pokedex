import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import "./styles/SelectType.css";

const SelectType = ({ setSelectValue, setInputValue, inputSearch, selectValue, setResidentsPerPage, }) => {
  const url = "https://pokeapi.co/api/v2/type";
  const [types, getAllTypes] = useFetch(url);

  useEffect(() => {
    getAllTypes();
  }, []);

  const handleChange = (e) => {
    setSelectValue(e.target.value);
    setInputValue("")
    inputSearch.current.value = ""
  };
  
  const handleChangeCard = (e) => {
    setResidentsPerPage(e.target.value)
  }
  

  return (
    <div>
      <select className="select" value={selectValue} onChange={handleChange }>
        <option className="select_all" value="allPokemons">
          All Pokemons
        </option>
        {types?.results.map((type) => (
          <option key={type.url} value={type.url}>
            {type.name}
          </option>
        ))}
      </select>
      <span>
        <select onChange={handleChangeCard}>
          <option value="6">6</option>
          <option value="9">9</option>
          <option value="12">12</option>
          <option value="15">15</option>
        </select>
        <div>#Card</div>
      </span>
    </div>
  );
};

export default SelectType;
