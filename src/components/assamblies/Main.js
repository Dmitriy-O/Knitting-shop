import MainTop from "../top/Main_Top";
import MainNav from "../navs/Main_Nav";
import { Slider } from "../../slider";
import slides from "../../mock.json";
import MainSidebar from "../sidebars/Main_Sidebar";
import MainItems from "../categories/Main_Items";

function MainPage() {
  return (
    <div className="bg-white ">
      <MainTop></MainTop>
      <MainNav></MainNav>
      <div >
        <Slider slider={slides}></Slider>
      </div>
      <div className="flex ">
        <MainSidebar></MainSidebar>
        <MainItems></MainItems>
      </div>
    </div>
  );
}
export default MainPage;
