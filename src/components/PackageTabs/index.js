import "./index.css"
import {Component} from "react"


class PackageTabs extends Component {
    state = {
        activepackage : "withFlight"
    }
    onClickwithpackage = () => {
        this.setState({activepackage : "withFlight"})
    }
    onClickwithoutpackage = () => { 
        this.setState({activepackage : "withoutFlight"})
    }
    render() {
        const {activepackage} = this.state
        const withNameClass = activepackage === "withFlight" ? "withFlightheading" : "withoutFlightheading"
        const withoutNameClass = activepackage === "withoutFlight" ? "withFlightheading" : "withoutFlightheading"
        return (<div className="packagetabsContainer">
    <h1 className = {withNameClass} onClick={this.onClickwithpackage}>Package with Flights</h1>
    <h1 className={withoutNameClass} onClick={this.onClickwithoutpackage}>Package without Flights</h1>
  </div>)
    }
} 
  


export default PackageTabs;