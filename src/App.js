import logo from "./logo.svg";
import "./App.css";
import ContactsPage from "./components/assamblies/Contacts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/assamblies/Main";
import CategoriesListPage from "./components/assamblies/Categories_List";
import Admin_Page from "./components/assamblies/Admin_Page";
import AdminPageUpdate from "./components/categories/AdminPageUpdate";
import Item from "./components/categories/Item";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage></MainPage>}></Route>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/contacts" element={<ContactsPage></ContactsPage>}></Route>
        <Route path="/categories_list" element={<CategoriesListPage></CategoriesListPage>}></Route>
        <Route path="/admin" element={<Admin_Page></Admin_Page>}></Route>
        <Route path="/admin/:id" element={<AdminPageUpdate></AdminPageUpdate>}></Route>
        <Route path="/item/:id" element={<Item></Item>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
