import "./index.css"
import { GoArrowSwitch } from "react-icons/go";



const RouteInfo = () => {
    return (<div className="fromContainer">
        <input type="text" placeholder="enter from" className="fromClass"/>
        <GoArrowSwitch/>
        <input type="text" placeholder="enter to" className="toClass"/>

    </div>)
}


export default RouteInfo