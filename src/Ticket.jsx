import { div } from "framer-motion/client";
import TicketNum from "./TicktNum";

export default function Ticket({ticket}){
    return (
        <div>
            {ticket.map((num,idx)=>(
                <TicketNum num={num} key={idx}/>
            ))}
        </div>
    )
}