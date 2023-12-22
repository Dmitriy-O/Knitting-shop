import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Services from "../../services/Services";

const AdminPageUpdate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [Item, setItem] = useState({
    id: id,
    name: "",
    price: null,
    description: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    console.log("e  value = " + value);
    console.log("e target value = " + e.target.value);
    console.log("e target name = " + e.target.name);

    setItem({ ...Item, [e.target.name]: value });
    console.log("after change" + JSON.stringify(Item));
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Services.getItemById(id);
        setItem(response.data);
        console.log("response data:" + JSON.stringify(response.data));
        console.log("field name:" + Item.name);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const [data, setData] = useState(null);
  const formData = (e) => {
    // console.log("accepted image is: " + e.target.files);
    setData(e.target.files[0]);
    let newPostItem = new FormData();
    newPostItem.append("image", e.target.files[0]);
    newPostItem.append("name", Item.name);
    newPostItem.append("description", Item.description);
    newPostItem.append("price", Item.price);
    console.log(" formed data " + JSON.stringify(newPostItem));

    setData(newPostItem);
  };

  const UpdateItems = (e) => {
    e.preventDefault();
    // formData(e)
    console.log("data for update before:"+data)
    Services.updateItems(id, data);
    navigate(`/admin`)
  };
  return (
    <div className="flex max-w-2xl mx-auto shadow border-b input_fields ">
      <div className="px-8 py-8 w-full">
        <div className="font-thin text-2xl tracking-wider  ">
          <h1>Update items</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal w-fit">
            Назва
          </label>
          <input
            required
            type="text"
            name="name"
            value={Item.name}
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
            value={Item.description}
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
            value={Item.price}
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
              onClick={UpdateItems}
              className="rounded text-white font-semibold bg-yellow-400 py-2 px-2 mx-2 hover:bg-yellow-700"
            >
              Оновити
            </button>
            <button
              onClick={(e) => navigate(`/admin`)}
              className="rounded text-white font-semibold bg-red-400 py-2 px-2 hover:bg-red-700"
            >
              Назад
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPageUpdate;
