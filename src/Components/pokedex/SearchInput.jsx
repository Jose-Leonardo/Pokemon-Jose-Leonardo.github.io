import React from 'react'

export const SearchInput = ({setpokeSearch1, setoptionType}) => {

    const handleSubmit = e => {
        e.preventDefault()
        setpokeSearch1(e.target.searchText.value.trim())
        setoptionType("all")
        e.target.searchText.value = ""
    }

  return (
    <form onSubmit={handleSubmit}>
        <input id='searchText' type="text" />
        <button>search</button>
    </form>
  )
}

export default SearchInput
