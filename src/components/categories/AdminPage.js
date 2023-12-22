import { useEffect, useState } from "react";
import Services from "../../services/Services";
import axios from "axios";
import { clear } from "@testing-library/user-event/dist/clear";
// import '../../../../images'
import "../../style/Admin.css";
import { useNavigate, useParams } from "react-router-dom";
function AdminPage() {
  const [items, setItems] = useState(null);
  const [loading, setloading] = useState(true);

  const [itemsP, setItemsP] = useState({
    // id: "",
    name: "",
    description: "",
    price: "",
    // image: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      const response = await Services.getItems();
      console.log("response = " + response);

      setItems(response.data);
      console.log("items = " + JSON.stringify(items));
      setloading(false);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    console.log("e  value = " + value);
    console.log("e target value = " + e.target.value);
    console.log("e target name = " + e.target.name);

    setItemsP({ ...itemsP, [e.target.name]: value });
    console.log("after change" + JSON.stringify(itemsP));
  };

  const [data, setData] = useState(null);

  const formData = (e) => {
    console.log("accepted image is: " + e.target.files);
    setData(e.target.files[0]);
    let newPostItem = new FormData();
    newPostItem.append("image", e.target.files[0]);
    newPostItem.append("name", itemsP.name);
    newPostItem.append("description", itemsP.description);
    newPostItem.append("price", itemsP.price);
    console.log("image data" + JSON.stringify(newPostItem));

    setData(newPostItem);
  };
const reset=(e)=>{
  setItemsP({
      id: "",
      name: "",
      description: "",
      price: "",
  })
}

  const saveItems = async (e) => {
    Services.saveItems(data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const navigate = useNavigate();
  const editItem = (e, id) => {
    e.preventDefault();
    navigate(`/admin/${id}`);
  };


  const deleteItem = async (e, id) => {
    e.preventDefault();
    Services.deleteItems(id)
      .then((response) => {
        setItems((prevElement) => {
          return prevElement.filter((item) => item.id !== id);
        });
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <body className="">
      <div className="flex max-w-2xl mx-auto shadow border-b input_fields ">
        <div className="px-8 py-8 w-full">
          <div className="font-thin text-2xl tracking-wider  ">
            <h1>Add new category</h1>
          </div>
          <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal w-fit">
              Назва
            </label>
            <input
              required
              type="text"
              name="name"
              value={itemsP.name}
              onChange={(e) => handleChange(e)}
              className="h-10 border mt-2 px-2 py-2 w-full"
            ></input>
            <label className="block text-gray-600 text-sm font-normal w-fit">
              Опис
            </label>
            <input
              required
              type="description"
              name="description"
              value={itemsP.description}
              onChange={(e) => handleChange(e)}
              className="h-10 border mt-2 px-2 py-2 w-full"
            ></input>
            <label className="block text-gray-600 text-sm font-normal w-fit">
              Ціна
            </label>
            <input
              required
              type="number"
              name="price"
              value={itemsP.price}
              onChange={(e) => handleChange(e)}
              className="h-10 border mt-2 px-2 py-2 w-full"
            ></input>

            <div className="flex justify-between my-5">
              <label className="inline-block text-gray-600 text-base font-normal w-fit">
                Зображення
              </label>
              <input
                id="ImageUpload"
                enctype="multipart/form-data"
                type="file"
                name="image"
                accept="image/png, image/jpeg"
                className="  rounded  bg-slate-600 text-white px-6 py-2 font-semibold "
                onChange={(e) => formData(e)}
              ></input>
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
              <button
                required
                type="submit"
                onClick={(e) => saveItems(e)}
                className="rounded text-white font-semibold bg-green-400 py-2 px-2 mx-2 hover:bg-green-700"
              >
                Зберегти
              </button>

              <button
                onClick={(e)=>reset(e)}
                className="rounded text-white font-semibold bg-red-400 py-2 px-2 hover:bg-red-700"
              >
                Очистити
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="mx-auto container my-8">
        <div className=" h-12 mb-5">
          <button className="rounded  bg-slate-600 text-white px-6 py-3 font-semibold ml-5">
            Categories List
          </button>
        </div>
        <div className="flex shadow border-b">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr className="max-w-7xl">
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  id
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  name
                </th>
                <th className=" text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  description
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  price
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  image
                </th>
                <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                  actions
                </th>
              </tr>
            </thead>
            <tbody>
              {!loading &&
                items.map((item) => (
                  <tr key={item.id}>
                    {console.log(item.id)}
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{item.id}</div>
                    </td>
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{item.name}</div>
                    </td>
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 w-96 overflow-auto ">
                        {item.description}
                      </div>
                    </td>
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{item.price}</div>
                    </td>
                    <td className="text-left px-6 py-4 whitespace-nowrap">
                      <div className="text-sm  text-gray-500 ">
                        {/* <script const LocalImage=import ></script> */}
                        <img
                          className="  w-60 h-40"
                          src={item.imagePath}

                          // src={}
                        ></img>
                      </div>
                    </td>
                    <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
                      <a
                        href="#"
                        onClick={(e, id) => editItem(e, item.id)}
                        className="text-indigo-600 hover:text-indigo-800 px-4  hover:cursor-pointer"
                      >
                        Edit
                      </a>
                      <a
                        onClick={(e, id) => deleteItem(e, item.id)}
                        href="#"
                        className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer "
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </footer>
    </body>
  );
}
export default AdminPage;
