import { useState } from "react";
import './Lottery.css';
import { GenTicket , sum } from './Helper.js'

export default function Lottery(){
    let [ticket,setTicket] = useState(GenTicket(3));
    let isWinning = sum(ticket) === 15;

    let buyTicket = () => {
        setTicket(GenTicket(3));
    }
    return(
        <div>
            <h1>Lottery</h1>
                <br /><br />
                <div className="ticket">
                    <span>{ticket[0]}</span>
                    <span>{ticket[1]}</span>
                    <span>{ticket[2]}</span>
                </div>
                <br />
                <button onClick={buyTicket}>Buy New Ticket</button>
                <div>
                    {isWinning ? `U Won` : `Better Luck nxt time `}
                </div>
        </div>
    )
}