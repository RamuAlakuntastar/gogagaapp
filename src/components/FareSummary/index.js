import "./index.css"
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";



const FareSummary = () => {
    return (
        <div className="depatureCont">
        <div className="departure">
            <p className="paradeparture">Departure.Air India</p>
            <div className="timeContainer">
                <p className="timepara">11:30 <MdOutlineArrowRightAlt/> 18:55</p>
                <p className="timepara"><FaIndianRupeeSign/>105,300.00</p>
            </div>
          </div>
           <div className="departure">
            <p className="paradeparture">Return.Air India</p>
            <div className="timeContainer">
                <p className="timepara">00:50 <MdOutlineArrowRightAlt/> 01:55</p>
                <p className="timepara"><FaIndianRupeeSign/>105,300.00</p>
            </div>
          </div>
           <div className="lastdeparture">
            <p className="lastparadeparture">for 2 adult. 2 children</p>
            <div className="timeContainer">
                <p className="timepara">Total Round fare</p>
                <p className="timepara"><FaIndianRupeeSign/>210,600.00</p>
            </div>
          </div>
        </div>
    )
}


export default FareSummary