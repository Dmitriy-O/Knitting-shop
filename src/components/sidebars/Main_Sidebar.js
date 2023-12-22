// import React from "react";
import { useEffect, useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "../../style/Main_sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Services from "../../services/GetCategories";
function MainSidebar() {
  const [loading, setloading] = useState(true);
  const [categories, setcategories] = useState(null);

  useEffect(() => {
    console.log("Start");

    const fetchData = async () => {
      setloading(true);
      try {
        // Делаем запрос и ждем результат

        const response = await Services.getCategories();
        // Выводим весь ответ в консоль
        console.log("Response from Services.getCategories:", response);

        // Если вам нужно только data, вы можете вывести и только её
        // console.log("Data from Services.getCategories:", response.data);
        setcategories(response.data);
      } catch (error) {
        console.log(error);
      }
      setloading(false);
    };
    fetchData();
  }, []);
  // const sideRef = useRef();
  const [btnState, setBtnState] = useState(false);

  // Эта строка использует хук состояния useState из библиотеки React. Она объявляет переменную btnState и функцию setBtnState, которые будут использоваться для управления состоянием кнопки. Переданное начальное значение состояния - false, то есть изначально состояние кнопки установлено в "выключено".

  function handleClick() {
    setBtnState((btnState) => !btnState);
  }
  // Это объявление функции handleClick, которая будет вызываться при щелчке на кнопке. Внутри функции используется функция обновления состояния setBtnState с использованием функции обратного вызова. Она изменяет состояние кнопки, инвертируя его на противоположное значение.
  let toggleClassCheck = btnState ? "_active" : "";
  //Эта строка объявляет переменную toggleClassCheck, которая будет использоваться для управления классом элемента. Если btnState равно true (кнопка активирована), то переменной присваивается строка " active", что добавит класс "active" к элементу. Если btnState равно false (кнопка выключена), то переменной присваивается пустая строка, что оставит класс элемента без изменений.
  return (
    <div className="h-fit leading-9 text-center flex-col justify-center w-3/12">
      Menu
      <ul>
        <li>
          <a href="/" className="side-el ">Головна</a>
        </li>
        <li>
          <a href="/contacts" className="side-el">Контакти</a>
        </li>
        <li>
          <a href="/admin" className="side-el">Адмін</a>
        </li>
      </ul>
    </div>
  );
}
export default MainSidebar;
