import { Component } from "react";
import "./index.css"
import { MdOutlineStarBorder } from "react-icons/md";



class SearchFilters extends Component  {
    state = {
        activeStar: "3"
    }
 
    thirdStar = () => {
        this.setState({activeStar: "3"})
    }
    fourthStar = () => {
        this.setState({activeStar: "4"})
    }
    fiveStar = () => {
        this.setState({activeStar: "5"})
    }
 

    render(){
        const {activeStar} = this.state
        const thirdclassNames = activeStar === "3" ? "onstar": "offstar"
         const fourthclassNames = activeStar === "4" ?   "onstar"  : "offstar"
         const fiveClassNames = activeStar === "5" ?  "onstar" : "offstar"
  return (<form className="searchfilterContainer">
    <input className="destinationinput" type="text" placeholder="Enter your destination" />
    <input className="tripdate" type="date" placeholder="Select your travel date"/>
    <select className="selectserch">
        <option value="1 Adult, 1children">2 Adult, 1children</option>
        <option value="1 Adult, 1children">2 Adult, 2children</option>
        <option value="1 Adult, 1children">2 Adult, 3children</option>
        <option value="1 Adult, 1children">2 Adult, 4children</option>
        <option value="1 Adult, 1children">2 Adult, 5children</option>
    </select>
    <input type="search" className="searchinput" placeholder="search"/>
    <div className="hostelDiv">
        <label className="labelhotel">Hotel Standard</label>
        <button type="button" className={thirdclassNames} onClick={this.thirdStar}>3 <MdOutlineStarBorder /></button>
        <button type="button" className={fourthclassNames} onClick={this.fourthStar}>4 <MdOutlineStarBorder /></button>
        <button type="button" className={fiveClassNames} onClick={this.fiveStar}>5 <MdOutlineStarBorder /></button>
        
    </div>
    <div className="hostelDiv">
    <label className="lanchlabekl" htmlFor="launchinput">Add Lunch</label>
    <input type="checkbox" className="lunchinput" onClick={this.lunchOnClick} id="launchinput"/>
      <label className="dinnerlabekl" htmlFor="dinnerinput">Add Dinner</label>
    <input type="checkbox" className="dinnerinput" onClick={this.dinnerOnClick} id="dinnerinput"/>
     </div>
  </form>)};
}   

export default SearchFilters;