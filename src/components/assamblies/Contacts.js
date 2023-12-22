import MainTop from "../top/Main_Top";

import MainNav from "../navs/Main_Nav";
import MainSidebar from "../sidebars/Main_Sidebar";
import ContactInformation from "../categories/Contact_Information";
function ContactsPage() {
  return (
    <div className="bg-white">
      <MainTop></MainTop>
      <MainNav></MainNav>
     
      <div className="flex ">
        <MainSidebar></MainSidebar>
				<ContactInformation></ContactInformation>
      </div>
    </div>
  );
}
export default ContactsPage;
