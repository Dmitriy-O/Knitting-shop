import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import adminPhoto from "../../images/admin.jpg"
function Admin_Top() {
  return (
    <div className="container w-full h-28 flex items-center justify-between  ">
      <img
        className="h-full mt-2 ml-6 p-1 rounded-r-lg flex "
        src={adminPhoto}
        alt="logo_yarn"
      ></img>
			{/* ShowImage() */}
      <div className="w-96 inline-flex">
        <input
          placeholder="Пошук по магазину"
          className="w-9/12 border-b-2 border-black "
        ></input>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" bounce />
      </div>
      <FontAwesomeIcon
        icon={faBasketShopping}
        style={{ color: "#20cfcc" }}
        size="3x"
      />
    </div>
  );
}
export default Admin_Top;
