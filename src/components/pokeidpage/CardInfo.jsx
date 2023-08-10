import "./styles/CardInfo.css"

const CardInfo = ({pokemon}) => {
const firstType = pokemon?.types[0].type.name

  return (
    <section className="pokeidpage_card">
        <div className={`pokeidpage_imge ${firstType}-header`}>
        <img className="pokeidpage_img"
        src={pokemon?.sprites.other["official-artwork"].front_default}
        alt=""
      />
        </div>
      <h2 className={`pokeidpage_id ${firstType}-header`}>#{pokemon?.id}</h2>
      <h2 className="pokeidpage_name">{pokemon?.name}</h2>
      <ul className="pokeidpage_list_size">
        <li className="pokeidpage_list_item">
          <h3 className="item_size">weight</h3>
          <span className="item_value">{pokemon?.weight}</span>
        </li>
        <li className="pokeidpage_list_item">
          <h3 className="item_size">height</h3>
          <span className="item_value">{pokemon?.height}</span>
        </li>
      </ul>
      <div className="container_ul">
        <div>
        <h2 className="ul_name">Type</h2>
        <ul className="ul_info">
        {pokemon?.types.map((tipe) => (
          <li className="li_info" key={tipe.type.url}> {tipe.type.name} </li>
        ))}
        </ul>  
        </div>
        <div>
        <h2 className="ul_name">Sklls</h2>
      <ul className="ul_info">
        {pokemon?.abilities.map((abili) => (
          <li className="li_info" key={abili.ability.name}> {abili.ability.name} </li>
        ))}
      </ul>
        </div>
        </div>
        <div className="pokeid_contaiter_state">
        <label className="pokeid_state">Stats</label> <hr className="hr" />
        </div>
        <ul className="container_state_info">
        {pokemon?.stats.map(sta => (
          <>
          <li className="state_info" key={sta.stat.url}>
            <h3 className="state_info_name"> {sta.stat.name} </h3> 
            <span className="state_info_value">
              {sta.base_stat} / 150
            </span>
          </li>
          <div className="progresbar">
            <div className="progres" style={{width: `${100/(150/sta.base_stat)}%`}} > 

            </div>
          </div>
          </>
        )) }
      </ul>
      </section>
  )
}

export default CardInfo