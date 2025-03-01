import './App.css';
import Lottery from './Lottery';
import {sum} from './Helper.js';
function App() {
  let winningCodn = (ticket)=>{
      return ticket.every((num)=> num === ticket[0]);
  }
  return (
    <>
      <Lottery n={3} winningCodn={winningCodn}/>
        <br />
    </>
  )
}

export default App
