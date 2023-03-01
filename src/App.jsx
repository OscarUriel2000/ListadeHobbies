import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const nombre = "Oscar Uriel Alcocer Delfin"
  return (
    <div>
      <h1>Lista de hobbies de (nombre)</h1>
      <ol>
        <li> Videojuegos </li>
        <li> Ejercicio </li>
        <li> Banda de Guerra </li>
        <li> Escuchar Musica </li>
      </ol>
    </div>
  )
}

export default App
