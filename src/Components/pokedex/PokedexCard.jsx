import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import StardPokemon from './StardPokemon'
import { useNavigate } from 'react-router-dom'
import "./style/PokemonStile.css"


export const PokedexCard = ({url}) => {

  const [poke, setpoke] = useState()
  useEffect(() => {
   axios.get(url)
    .then(res =>setpoke( res.data))
    .catch(err => console.log(err))
  }, [])

  const navigate = useNavigate()
  const handlenClick = () => navigate(`/pokedex/${poke.name}`)

  return (
    <div onClick={handlenClick} className="Mcard" >
      <div className={`pokedexCard bg-${poke?.types[0].type.name}`}>
        <header >
        <img src={poke?.sprites.other["official-artwork"]["front_default"]} alt="" />
      </header>
      <div className='almacen'>
      <h3>{poke?.name} </h3>
      <section>
        <div>
            {
              poke?.types.map( slot =>(
                <span key={slot.type.url}>{slot.type.name}  </span>
              ))
            }
        </div>
      </section>
        <footer className='infos'>
          {
          poke?.stats.map(stat => (
            <StardPokemon key={stat.stat.url} info={stat}/>
            ))
          }
        </footer>
      </div>
      
      </div>
      
    </div>
  )
}

