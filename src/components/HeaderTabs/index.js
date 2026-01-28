import "./index.css";
import { IoIosMenu } from "react-icons/io";

const HeaderTabs = ({ onClickbutton }) => {
  return (
    <nav className="headernav">
      <div className="headerContainer">
        <img
          src="https://ik.imagekit.io/yes4v45dgd/gogagalogo.png"
          alt="gogaga logo"
          className="headerlogo"
        />

        <button
          className="headerbutton"
          type="button"
          onClick={onClickbutton}
        >
          <IoIosMenu />
        </button>
      </div>

      <div className="proflieCont">
        <img
          src="https://ik.imagekit.io/yes4v45dgd/default-image.jpg?updatedAt=1763200028679"
          alt="profile"
          className="profileimg"
        />
        <p className="profileName">Girish Kumar</p>
      </div>
    </nav>
  );
};

export default HeaderTabs;
