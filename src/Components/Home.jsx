import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameTraider } from '../Store/slices/nameTraider'

const Home = () => {
  const navigate = useNavigate()
  const disptch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    console.log(e.target.name.value.trim())
    const inputValue = e.target.name.value.trim()
    
    if (inputValue !== 0) {
      disptch(setNameTraider(inputValue))
      navigate("/pokedex")
    }
    e.target.name.value = " "
    
  }
      
  return (
    
    <div>
      <h1> hi entrenador </h1>
      <form onSubmit={handleSubmit}>
        <input id="name" type="text" />
        <button> go !</button>
      </form>
    </div>
  )
}
export default Home