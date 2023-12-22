import Product_Categories_List from "../categories/Product_Categories_List";
import MainNav from "../navs/Main_Nav";
import MainSidebar from "../sidebars/Main_Sidebar";
import MainTop from "../top/Main_Top";

function CategoriesListPage() {
  return (
    <body className="bg-white">
      <MainTop></MainTop>
      <MainNav></MainNav>
      <div className="flex ">
        <MainSidebar></MainSidebar>
        <Product_Categories_List></Product_Categories_List>
      </div>
    </body>
  );
}

export default CategoriesListPage;
