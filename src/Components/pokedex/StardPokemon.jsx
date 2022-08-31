import React from 'react'

const StardPokemon = ({info} ) => {
  return (
    <div className='info'>
        <h4>{info.stat.name} </h4>
        <p>{info.base_stat} </p>
    </div>
  )
}

export default StardPokemon