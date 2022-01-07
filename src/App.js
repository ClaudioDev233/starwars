import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import Personagem from "./components/Personagem";
import SeletorPersonagem from "./components/SeletorPersonagem";
import Header from "./components/Header";


function App() {
  

  const [id, setId] = useState(1)
  const [info, setInfo] = useState('')

useEffect(()=>{
  fetch(`https://swapi.dev/api/people/${id}/`)
  .then(resp => resp.json())
  .then(data =>{
    const dados = {
      nome: data.name,
      nascimento: data.birth_year,
      genero: data.gender,
      peso: data.mass,
      altura: data.height,
      corOlhos: data.eye_color,
      corCabelo: data.hair_color  
    }
    setInfo(dados)
    
  })
},[id])

function handleId(e){
  const characterId = parseInt(e.target.value)
  setId(characterId)
}
 

  return (
    <div>
      <Header />
      <SeletorPersonagem valor={id} onChange={handleId} />
      <Personagem
          dados={info}
      />
    </div>
  );
}

export default App;
