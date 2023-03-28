
import './App.css';
import  Welcome from './components/welcome';
import { Quizcontext } from './context/quiz';
import { useContext, useEffect } from 'react';
import Question from './components/Question';
import GameOver from './components/GameOver';

function App() {
  
  const [quizstate,dispatch]=useContext(Quizcontext)

useEffect(()=>{
 dispatch({type:"REORDER_QUESTIONS"})
},[])

  return (
    <div className="App">
    <h1>Quiz de Programação</h1>
    {quizstate.gameStage==="start"&&<Welcome/>}
    {quizstate.gameStage==="Playing"&&<Question/>}
    {quizstate.gameStage==="End"&&<GameOver/>}

     
  
    </div>
  );
}

export default App;
