import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Item from "./Item";

const Main_Item = ({item}) => {
	const navigate = useNavigate ();
	
	
	const {itemID}=item.id;
	console.log("item id =" +item.id)
  return (
    <div className=" box-border  relative  h-80 mx-4 mb-20" key={item.id} onClick={(e)=>navigate(`/item/`+item.id)}>
    {/* // <div className=" box-border  relative  h-80 mx-4 mb-20" key={item.id} onClick={console.log("clicked")}> */}
      <p className="block bg-zinc-300">{item.name}</p>
      <img
        className="inline-block object-cover w-full h-full "
        src={item.imagePath}
      ></img>
      <div className="absolute   border-gray-500 border-2  w-full bg-slate-400 truncate">
        {item.description}
      </div>
    </div>
  );
};

export default Main_Item;
