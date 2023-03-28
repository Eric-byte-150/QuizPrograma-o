import React, { useContext } from 'react'
import { Quizcontext } from '../context/quiz'
import "./Option.css"

const Option = ({option,selectOption,answer}) => {
    const [quizstate,dispatch]=useContext(Quizcontext)
  return (
    <div 
     className={`option
      ${quizstate.answerSelected && option===answer ? "correct":""}
      ${quizstate.answerSelected && option!==answer ? "wrong":""}`}
     onClick={()=>selectOption()}>
        {option}
        </div>
  )
}

export default Option