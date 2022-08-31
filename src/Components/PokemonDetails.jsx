import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import StardPokemon from './pokedex/StardPokemon'

const PokemonDetails = () => {
  const {name} = useParams()
  const [pokeinfo, setpokeinfo] = useState()
  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}`
    axios.get(URL)
    .then(res => setpokeinfo( res.data))
    .catch(err => console.log(err))
  }, [])
  console.log(pokeinfo);

  return (
    <div>
      <div className={`pokedexCard bg-${pokeinfo?.types[0].type.name}`}>
        <header >
        <img src={pokeinfo?.sprites.other["official-artwork"]["front_default"]} alt="" />
      </header>
      <div className='almacen'>
      <h3>{name} </h3>
      <section>
        <div>
            {
              pokeinfo?.types.map( slot =>(
                <span key={slot.type.url}>{slot.type.name}  </span>
              ))
            }
        </div>
      </section>
        <footer className='infos'>
          {
          pokeinfo?.stats.map(stat => (
            <StardPokemon key={stat.stat.url} info={stat}/>
            ))
          }
        </footer>
      </div>
      </div>
    </div>
  )
}

export default PokemonDetails