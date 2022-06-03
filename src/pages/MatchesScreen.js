import React, { useState, useEffect } from 'react'
import { getMatches, clearMatches } from '../services/ApiRequest'
import { ContainerChat, Message } from '../components/Style.js'
import Return from '../assets/return.svg'
import AstroMatch from "../assets/AstroMatch.png"

const MatchesScreen = (props) => {

  const [matchs, setMatchs] = useState([])

  useEffect(() => {
    handleGetMatches()
  }, [matchs])

  const handleGetMatches = async () => {
    const response = await getMatches()
    setMatchs(response.matches)
  }

  const handleClearMatches = async () => {
    await clearMatches();
  };

  return (
    <ContainerChat>
      <div>
        <img onClick={() => props.Matches('Initial')} src={Return} alt="Ícone clicavel para voltar a página de Matches" />
        <img src={AstroMatch} alt="Logo do Astromatch"></img>
        <p onClick={() => handleClearMatches()}>Reset</p>
      </div>
      <ul>
      {matchs && matchs.length === 0 ? (
        <Message>Você ainda não deu Match com ninguém... Continue procurando seu/sua parceiro/a.</Message>
      ) : matchs.map((person) => {
        return (
          <li  key={person.id}>
            <img src={person.photo} alt={person.photo_alt} />
            <p>{person.name}</p>
          </li>
        )
      })}
      </ul>
    </ContainerChat>
  )
}

export default MatchesScreen