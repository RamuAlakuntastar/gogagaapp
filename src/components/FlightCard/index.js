import "./index.css"



const FlightCard  = () => {
    return(<li className="classlistcard">
        <div className="firstcont">
            <p className="pa1">Air India</p>
            <p className="pa1">11:30 HYD</p>
            <p className="pa1">18:55 GOX</p>

        </div>
        <div className="secondcont">
            <p className="pa1">13,300.00</p>
            <p className="pa1">105.300.00</p>
        </div>
        <div className="third">
           <p className="pa1">Hame Baggage - 7 kg</p>
           <p className="pa1">Chick-In Baggage</p>
           <p className="pa1">Refundable</p>
        </div>
        
    </li>)
}


export default FlightCard