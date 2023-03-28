import { Quizcontext } from '../context/quiz'
import React, { useContext } from 'react'
import Quiz from '../img/quiz.svg'
import "./welcome.css"

const Welcome = () => {
  const [quizstate,dispatch]=useContext(Quizcontext)

  console.log(quizstate)

  
  return (

    <div id="welcome">
        <h2>Seja Bem-vindo</h2>
        <p>Clique no botão e inicie</p>
        <button onClick={()=>dispatch({type:"CHANGE_STATE"})}>Iniciar</button>
        <img src={Quiz} alt="Início do Quiz" />
    </div>
  )
}
export default Welcome