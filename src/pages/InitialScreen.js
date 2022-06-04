import React, { useState, useEffect } from "react";
import { FadeLoader } from "react-spinners";
import { ContainerMatches, Card, Buttons, Reset, FlashMessage } from "../components/Style"
import User from '../assets/user.svg'
import AstroMatch from "../assets/AstroMatch.png"
import { getProfileToChoose, choosePerson, clearMatches } from "../services/ApiRequest"

function InitialScreen (props) {

  const [infos, setInfos] = useState([])
  const [choice, setChoice] = useState(undefined)
  const [loading, setLoading] = useState(false);
  const [isMatch, setIsMatch] = useState();

  useEffect(() => {
    handleGetProfileToChoose()
  }, [])

  const buttons = (btnChoice) => {
    if (btnChoice !== "reset") {
      setChoice(btnChoice);
      handleChoosePerson();
    } else {
      handleClearMatches();
    }
    handleGetProfileToChoose();
  };

  if (isMatch) {
    setTimeout(() => {
      setIsMatch(false);
    }, 2000);
    clearTimeout();
  }

  const handleGetProfileToChoose = async () => {
    setLoading(true);
    const response = await getProfileToChoose()
    setInfos(Object.values(response))
    setLoading(false);
  }
  const handleChoosePerson = async () => {
    const id = infos.map(id => id.id)
    const response = await choosePerson(id.join(), choice)
    setIsMatch(response.isMatch);
  }
  const handleClearMatches = async () => {
    await clearMatches()
  }
  return(
    <ContainerMatches>
      <div>
        <img src={AstroMatch} alt="Logo do Astromatch"></img>
        <img onClick={() => props.Chat('Chat')} src={User} alt="Ícone clicável para visualização de matchs"/>
      </div>
      
      {isMatch && <FlashMessage>Você acabou de receber um match!!</FlashMessage>}

      {loading ? (
      <FadeLoader />
      ) : (
      infos && infos[0] === null ? (
        <Reset>
          <p>♥</p>
          <p>Oops, que pena... Parece que seus Matches acabaram. Para resetar seus Matches, favor apertar no botão azul abaixo.</p>
          <p>♥</p>
        </Reset>
      ) 
      : infos.map((person) => {
        return(
          <Card key={person.id}>
            <img src={person.photo} alt={person.photo_alt} />
            <img src={person.photo} alt={person.photo_alt} />
              
            <div>
              <h1>{person.name}, {person.age}</h1>
              <p>{person.bio}</p>
            </div>
          </Card>
        )
      }))}
      
      {loading 
      ? <p></p>
      : <Buttons>
          <p onClick={() => buttons(false)}>X</p>
          <p onClick={() => buttons("reset")}> Reset </p>
          <p onClick={() => buttons(true)}>♥</p>
        </Buttons>
      }
    </ContainerMatches>
  )
}

export default InitialScreen;
