import "./index.css";
import { IoMdHome } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaCloud } from "react-icons/fa6";
import { HiCalculator } from "react-icons/hi";
import { RiKeyboardBoxLine,RiCustomerService2Fill,RiSettings5Line , RiMailSettingsLine } from "react-icons/ri";
import { BiSolidReport } from "react-icons/bi";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { PiCassetteTapeFill } from "react-icons/pi";
import { GiWavyItinerary } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdLocationCity,MdOutlineNavigateNext  } from "react-icons/md";

const Sidebar = () => {
  return <ul className="sidebarContainer">
       <li className="menulist">MENU</li>
       <li className="dashboardlist"><IoMdHome /> Dashboard</li>
       <li className="listlead"> <FaFilter /> 
       <select className="selectOption">
          <option className="leads" active>Leads</option>
          <option className="leads" value="Leads">Leads <span className="leadscount">30434</span></option>
        </select></li>
        <li className="itinerariesList"><IoLocationSharp /> Itineraries <MdOutlineNavigateNext /></li>
        <li className="googleReviewslist"><FaCloud /> Google Reviews</li>
        <li className="voucherslist"><RiKeyboardBoxLine /> voucherslist <MdOutlineNavigateNext /></li>
        <li className="acountslist"><HiCalculator /> Accounts <MdOutlineNavigateNext /></li>
        <li className="reportslist"><BiSolidReport /> Reports <MdOutlineNavigateNext /></li>
        <li className="customersupportlist"><RiCustomerService2Fill/> Customer Support</li>
        <li className="usercontrollist">USER CONTROL</li>
        <li className="usersettingslist"><RiSettings5Line/> User Settings <MdOutlineNavigateNext /></li>
        <li className="masterssettingslist"><RiMailSettingsLine/> Masters Settings <MdOutlineNavigateNext /></li>
        <li className="hrmlist"><BsFillFileEarmarkPersonFill/> HRM <MdOutlineNavigateNext /></li>
        <li className="assetsmanagementlist"><PiCassetteTapeFill /> Assets Management <MdOutlineNavigateNext /></li>
        <li className="participantslist">PARTICIPANTS</li>
        <li className="itinerarycustomerslist"><GiWavyItinerary/>Itinerary Customers</li>
        <li className="partnerslist"><SiHomeassistantcommunitystore /> Partners</li>
        <li className="supplierslist"><MdLocationCity /> Suppliers <MdOutlineNavigateNext /></li>
        <li className="miscellaneouslist">MISCELLANEOUS</li>
        
    </ul>
}
export default Sidebar;