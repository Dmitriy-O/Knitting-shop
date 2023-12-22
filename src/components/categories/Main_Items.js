import React, { useEffect, useState } from "react";
// import Services from "../../services/GetCategories";
import Services from "../../services/Services";
// import { Image } from "react-bootstrap";
import "../../style/Main_Categories.css";
import { useNavigate } from "react-router-dom";
import Main_Item from "./Main_Item";
function MainItems() {
  const [loading, setloading] = useState(true);
  const [items, setItems] = useState(null);

  // The useEffect hook is a React hook that allows you to perform side effects in your components. Side effects are things like fetching data, updating the DOM, or making network requests.
  /**
   * This hook is responsible for fetching category data from a service.
   *
   * It performs the following tasks:
   * 1. On component mount, it triggers the `fetchData` function.
   * 2. It sets a loading state to `true` before starting the fetch process.
   * 3. It makes a request to get categories from the `Services` object.
   * 4. Once the response is received, it updates the `categories` state with the data from the response.
   * 5. If there's an error during the request, it logs the error to the console.
   * 6. Finally, it sets the loading state to `false` after the request completes (either success or failure).
   *
   * Dependencies:
   * - The function is dependent on the `Services.getCategories` method for fetching data.
   * - It uses `setloading` and `setcategories` functions to update states in the component.
   *
   * @effect
   * The hook runs only once on component mount due to an empty dependency array.
   */

  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await Services.getItems();
        console.log("response  is:" + response);

        setItems(response.data);
        console.log("response data is:" + response.data);
      } catch (error) {}
      setloading(false);
    };
    fetchData();
  }, []);

  return (
    <body className="w-3/4  ">
      <div className="pl-4 text-lg">Наші товари </div>
      <div className="grid_el text-center">
        {!loading &&
          items.map((item) => (
              <Main_Item item={item}></Main_Item>
          ))}
      </div>
    </body>
  );
}
export default MainItems;
