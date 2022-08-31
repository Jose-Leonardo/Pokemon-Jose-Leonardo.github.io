import { useState } from 'react'
import './App.css'
import  Home  from './Components/Home'
import { Routes, Route } from 'react-router-dom'
import  Pokedex from './Components/Pokedex'
import PokemonDetails from './Components/PokemonDetails'
import ProtectedRoutes from "./Components/ProtectedRoutes";


function App() {
  const [count, setCount] = useState()

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route element={<ProtectedRoutes/>} >
          <Route path="/pokedex" element={<Pokedex/>} />
          <Route path="/pokedex/:name" element={<PokemonDetails/>} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
