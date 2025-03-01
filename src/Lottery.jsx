import { useState } from "react";
import Ticket from "./Ticket.jsx";
import { GenTicket , sum } from './Helper.js'

export default function Lottery({n = 3,winningCodn}){
    let [ticket,setTicket] = useState(GenTicket(n));
    let isWinning = winningCodn(ticket);

    let buyTicket = () => {
        setTicket(GenTicket(n));
    }
    return(
        <div>
            <h1>Lottery</h1>
                <br /><br />
                <div className="ticket">
                    <Ticket ticket={ticket}/>
                </div>
                <button onClick={buyTicket}>Buy New Ticket</button>
                <div>
                    {isWinning ? `U Won` : `Better Luck nxt time `}
                </div>
        </div>
    )
}