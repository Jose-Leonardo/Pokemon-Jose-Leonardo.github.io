import axios from 'axios'

import { useState, useEffect } from 'react'
import React from 'react'

export const SelectType = ({setoptionType, optionType, setpokeSearch} ) => {
    const [listTypes, setlistTypes] = useState()
    useEffect(() => {
      const URL = "https://pokeapi.co/api/v2/type"
      axios.get(URL)
        .then(res => setlistTypes( res.data.results))
        .catch(err => console.log(err))
   
    }, [])

    const handlenChange = e => {
      setoptionType(e.target.value)
      setpokeSearch("")
    }

  return (
    <select value={optionType} onChange={handlenChange}>
        <option value="all">ALL pokemons</option>
        {
            listTypes?.map(type => (
            <option value={type.name} key={type.name}>{type.name}</option>
            ))
                
        }
    </select>
  )
}
