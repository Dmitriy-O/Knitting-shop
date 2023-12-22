import { useEffect, useState } from "react";
import Services from "../../services/GetCategories";
import "../../style/Main_Categories.css"
function Product_Categories_List() {
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
  return (
    <body className="w-3/4">
      <div className="pl-4 text-lg">Категорії</div>
      <div className="grid_el text-center ">
        {!loading &&
          categories.map((category) => (
            <div className=" box-border  relative  h-80 mx-4 mb-20">
              <p className="block bg-zinc-300">{category.name}</p>
              <img className="inline-block object-cover h-full w-full " src={category.image}></img>
              <div className="absolute bottom-1 right-2 border-gray-500 border-2 w-10 bg-slate-400">
                {category.number}
              </div>
            </div>
          ))}
      </div>
    </body>
  );
}
export default Product_Categories_List;
