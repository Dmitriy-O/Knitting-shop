import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../../style/Main_nav.css"; // Import your CSS file for styling
import Services from "../../services/GetCategories";

const MainNav = () => {
  const [loading, setloading] = useState(true);
  const [categories, setcategories] = useState(null);

  // useEffect(() => {
  //   console.log("Start");

  //   const fetchData = async () => {
  //     setloading(true);
  //     try {
  //       // Делаем запрос и ждем результат

  //       const response = await Services.getCategories();
  //       // Выводим весь ответ в консоль
  //       console.log("Response from Services.getCategories:", response);

  //       // Если вам нужно только data, вы можете вывести и только её
  //       // console.log("Data from Services.getCategories:", response.data);
  //       setcategories(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     setloading(false);
  //   };
  //   fetchData();
  // }, []);
  return (
    <nav className="container mb-5 ">
      <ul className="ul_el flex  justify-around">
        <li className="hover:text-green-500">
          <a href="/">Головна</a>
        </li>
        
        <li>
          <a href="contacts" className="hover:text-green-500">
            Контакти
          </a>
        </li>
        <li className="hover:text-green-500">
          <a href="/admin">Admin</a>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
