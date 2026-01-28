import { Component } from "react";
import "./App.css";
import HeaderTabs from "./components/HeaderTabs";
import Sidebar from "./components/Sidebar";
import PackageTabs from "./components/PackageTabs"; 
import SearchFilters from "./components/SearchFilters";
import RouteInfo from "./components/RouteInfo"
import FareSummary  from "./components/FareSummary"
import FlightList from "./components/FlightList"




class  App  extends Component {
  state = {
    showSidebar:false,
    activeHolidays: "indian"
  }
  
  onClickbutton = () => {
    this.setState((prevState) => ({
      showSidebar: !prevState.showSidebar
    }))
  }
  onClickIndianholidays = () => {
    this.setState({activeHolidays: "indian"})
  }
  onClickInternationalHolidays = () => {
    this.setState({activeHolidays: "international"})
  } 
  render() {
     const {showSidebar, activeHolidays} = this.state;
     const indianHolidaysClassName =  activeHolidays === "indian" ? "headingindian" : "InternationalHolidays";
     const internationalHolidaysClassName = activeHolidays === "international" ?  "headingindian" : "InternationalHolidays";
    return (<div className="appContainer">
      <HeaderTabs onClickbutton={this.onClickbutton}/>
      <div className="appContent">
        {showSidebar && <Sidebar />}
        <div className="mainContent">
          <div className="divHolidays">
            <button className={indianHolidaysClassName} onClick={this.onClickIndianholidays}>Indian Holidays</button>
            <button className={internationalHolidaysClassName} onClick={this.onClickInternationalHolidays}>International Holidays</button>
          </div>
          <PackageTabs/>
          <SearchFilters/>
          <RouteInfo/>
          <FareSummary />
          <FlightList/>
        </div>
      </div>
      </div>
    )
  }
 
}


export default App;
