import styled, { keyframes } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  body {
    background-color: #ccc;
    width: 100vw;
    height: 100vh;
  }
`;

const CardFlip = keyframes`
   0% {
    -webkit-transform: scale(1) rotateX(0);
            transform: scale(1) rotateX(0);
  }
  50% {
    -webkit-transform: scale(1.2) rotateX(-180deg);
            transform: scale(1.2) rotateX(-180deg);
  }
`;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Screen = styled.div`
  border: 1.5px solid black;
  border-radius: .5em;
  width: 400px;
  height: 92vh;
  background-color: #FFF;
  @media screen and (max-width: 600px){
    width: 100vw;
    height:100%;
  }
`;

export const ContainerMatches = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  div:nth-child(1) {
    height: 12%;
    padding: 0 1em;
    border-bottom: 1.5px solid #d3d3d3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img:nth-child(1) {
      object-fit: contain;
      width: 50%;
      margin: 0 auto;
    }
    img:nth-child(2) {
      cursor: pointer;
      transition: all 0.5s ease 0s;
      &:hover{
        -webkit-transform: scale(.7);
        transform: scale(.7);
      }
    }
  }
`;

export const Card = styled.div`
  border-radius: .5em;
  width: 90%;
  height: 65%;
  position: relative;
  box-shadow: 1px 1px 10px #CCC;
  animation: ${CardFlip} 0.6s linear both;
  -webkit-animation: ${CardFlip} 0.6s linear both;
  img:nth-child(1){
    width: 100%;
    height: 100%;
    border-radius: .5em;
    object-fit: cover;
    filter: blur(10px);
    
  }
  img:nth-child(2){
    width: 100%;
    height: 100%;
    border-radius: .5em;
    object-fit: contain;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  div{
    position: absolute;
    bottom: 0;
    left: 0;
    height: 8em;
    width: 100%;
  }
  h1 {
    height: 1.5em;
    font-size: 24px;
    padding-left: .5em;
    margin: 0 auto;
    color: #FFF;
    text-shadow: 2px 2px 2px #222;
  }
  p {
    height: 1.5em;
    font-size: 18px;
    padding-left: .7em;
    margin: 0 auto;
    color: #FFF;
    text-shadow: 2px 2px 2px #222;
  }
`;

export const Buttons = styled.div`
    height: 15%;
    width: 55%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    p:nth-child(1){
      border: 1px solid #ff0000;
      color: #ff0000;
      border-radius: 50%;
      width: 1.2em;
      height: 1.2em;
      font-size: 50px;
      text-align: center;
      box-shadow: 1px 1px 20px #999;
      cursor: pointer;
      &:hover{
        transition: all 0.5s ease 0s;
        background-color: #ff0000;
        box-shadow: 1px 1px 20px #333;
        color: #FFF;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
    }
    p:nth-child(2){
      border: 1px solid #000080;
      color: #000080;
      border-radius: 50%;
      width: 4em;
      height: 4em;
      padding: 1.45em 0 ;
      text-align: center;
      box-shadow: 1px 1px 20px #999;
      cursor: pointer;
      &:hover{
        transition: all 0.5s ease 0s;
        background-color: #000080;
        box-shadow: 1px 1px 20px #333;
        color: #FFF;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
    }
    p:nth-child(3){
      border: 1px solid #008000;
      color: #008000;
      border-radius: 50%;
      width: 1.2em;
      height: 1.2em;
      font-size: 50px;
      text-align: center;
      box-shadow: 1px 1px 20px #999;
      cursor: pointer;
      &:hover{
        transition: all 0.5s ease 0s;
        background-color: #008000;
        box-shadow: 1px 1px 20px #333;
        color: #FFF;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
    }
`;

export const ContainerChat = styled.div`
  height: 100%;
  overflow: auto;
  div:nth-child(1) {
    height: 12%;
    padding: 0 1em;
    border-bottom: 1.5px solid #d3d3d3;
    display: flex;
    align-items: center;
    img:nth-child(1) {
      cursor: pointer;
      transition: all 0.5s ease 0s;
      &:hover{
        -webkit-transform: scale(.7);
        transform: scale(.7);
      }
    }
    img:nth-child(2) {
      object-fit: contain;
      width: 50%;
      margin: 0 auto;
    }
    p {
      border-radius: 20%;
      padding: 0.5em;
      background-color: blue;
      color: #fff;
      text-shadow: 1px 1px 1px #000;
      cursor: pointer;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: .5em;
    gap: 10px;
    border-radius: 10px;
    box-shadow: 2px 2px 10px #ccc;
  }
  li {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: .5em;
    height: 120px;
    width: 100%;
    box-shadow: 2px 2px 2px 1px #ccc;
    img{
      height: 100px;
      width: 80px;
      object-fit: contain;
      margin-right: 10px;
      border-radius: 50%;
    }
    p{
      font-size: 1.2em;
    }
  }
`;

export const Message = styled.p`
  height: 78vh;
  width: 70%;
  text-align: center;
  padding-top:50%;
  font-size: 1.4em;
  color: #999;
`;

export const Reset = styled(ContainerMatches)`
  border-radius: .5em;
  width: 90%;
  height: 65%;
  box-shadow: 1px 1px 10px #CCC;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p:nth-child(1), p:nth-child(3){
    color: #F00;
    font-size: 2em;
    padding: 1em;
  }
  p:nth-child(2){
    text-align: center;
    font-size: 1.4em;
    width: 90%;
    color: #000;
    text-shadow: 2px 2px 2px #CCC;
  }
`;
