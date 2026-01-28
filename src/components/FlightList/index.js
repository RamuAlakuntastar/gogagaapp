import "./index.css"
import FlightCard from "../FlightCard"



const FlightList = () => {
    return(<div className="flightlistcontainer">
   <ul className="container1">
    <li className="summary1">
        <p className="para1">Outbound:Hyderabad(HYD)</p>
        <p className="para1">Departure</p>
        <p className="para1">Duration</p>
        <p className="para1">Arrival</p>
        
    </li>
    <FlightCard/>
   </ul>
    <ul className="container1">
    <li className="summary1">
        <p className="para1">Outbound:Hyderabad(HYD)</p>
        <p className="para1">Departure</p>
        <p className="para1">Duration</p>
        <p className="para1">Arrival</p>
      
    </li>
      <FlightCard/>
   </ul>
    </div>)
}

export default FlightList