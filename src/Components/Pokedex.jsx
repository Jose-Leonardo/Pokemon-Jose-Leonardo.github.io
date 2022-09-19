import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
import { PokedexCard } from './pokedex/PokedexCard'
import { useSelector } from 'react-redux'
import { SearchInput } from './pokedex/SearchInput'
import {SelectType} from './pokedex/SelectType'

const pokedex = () => {

  const [pokemon, setpokemon] = useState()
  const [pokeSearch, setpokeSearch] = useState()
  const [optionType, setoptionType] = useState("all")

  useEffect(() => {
    let URL
    if (optionType !== "all") {
      URL = `https://pokeapi.co/api/v2/type/${optionType}`
      axios.get(URL)
      .then(res => {
        const arr = res.data.pokemon.map(e => e.pokemon)
        setpokemon({results: arr})
      })
      .catch(err => console.log(err))
      }else if (pokeSearch) {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`
      const obj = {
        results: [{url}]
      }
      setpokemon(obj)
    } else{
      URL = "https://pokeapi.co/api/v2/pokemon"
      axios.get(URL)
      .then(res => setpokemon( res.data))  
      .catch(err => console.log(err))
    }
   
  }, [pokeSearch, optionType])
  
  const nameTraider = useSelector(state => state.nameTraider)
  return (
    <div>
      <div className="card">
        <h2>welcome {nameTraider} </h2>
        <SearchInput setpokeSearch1={setpokeSearch} setoptionType={setoptionType} />
        <SelectType 
          optionType={optionType}
          setoptionType={setoptionType}
          setpokeSearch={setpokeSearch}  />
        <div className='card_alineacion'>
        {
          pokemon?.results.map(pokemones => (
            <PokedexCard key={pokemones.url} url={pokemones.url} />
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default pokedex