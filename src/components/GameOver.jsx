import React from 'react'
import { useContext } from 'react'
import { Quizcontext } from '../context/quiz'
import wellDone from "../img/welldone.svg"
import "./GameOver.css"

const GameOver = () => {
    const [quizstate,dispatch]=useContext(Quizcontext)
  return (
  <div id="gameover">
    <h2>Fim de Jogo</h2>
    <p>Pontuação:{quizstate.score}</p>
    <p>Você acertou {quizstate.score} de {quizstate.questions.length} perguntas</p>
    {quizstate.score===5 && <p>Parabéns!</p>}
    {quizstate.score===3 && <p>Muito Bem!</p>}
    {quizstate.score<3 && <p>Não foi muito bem mas continue tentando</p>}
    <img src={wellDone} alt="Fim do Quiz" ></img>
    <button onClick={()=>dispatch({type:"NEW_GAME"})} > Reinicar</button>
  </div>
  )
}

export default GameOver