import AdminPage from "../categories/AdminPage";
import Product_Categories_List from "../categories/Product_Categories_List";
import MainNav from "../navs/Main_Nav";
import MainSidebar from "../sidebars/Main_Sidebar";
import Admin_Top from "../top/Admin_Top";
function Admin_Page() {
  return (
    <body className="bg-white">
      <Admin_Top></Admin_Top>
      <MainNav></MainNav>

      <AdminPage></AdminPage>
    </body>
  );
}

export default Admin_Page;
