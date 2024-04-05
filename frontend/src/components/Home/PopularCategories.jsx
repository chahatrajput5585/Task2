import React from "react";
import {
  MdOutlineDesignServices,
  MdOutlineWebhook,
  MdAccountBalance,
  MdOutlineAnimation,
} from "react-icons/md";
import { TbAppsFilled } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";

const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Bakery",
      subTitle: "Ganga Nagar",
      icon: <MdOutlineDesignServices />,
    },
    {
      id: 2,
      title: "Clothes",
      subTitle: " Malviya Nagar",
      icon: <TbAppsFilled />,
    },
    {
      id: 3,
      title: "Cafe & Restaurant",
      subTitle: "Shastri Nagar",
      icon: <MdOutlineWebhook />,
    },
    {
      id: 4,
      title: "Tea Factory",
      subTitle: "Jnakpuri",
      icon: <FaReact />,
    },
    {
      id: 5,
      title: "All in one store",
      subTitle: "Pandey Nagar",
      icon: <MdAccountBalance />,
    },
    {
      id: 6,
      title: "Bike Showroom",
      subTitle: "NH-2 Highway",
      icon: <GiArtificialIntelligence />,
    },
    {
      id: 7,
      title: "Doctor Suri",
      subTitle: "Gnaga Nagar",
      icon: <MdOutlineAnimation />,
    },
    {
      id: 8,
      title: "Game Development Store",
      subTitle: "Shastri Nagar",
      icon: <IoGameController />,
    },
  ];
  return (
    <div className="categories">
      <h3>POPULAR CATEGORIES</h3>
      <div className="banner">
        {categories.map((element) => {
          return (
            <div className="card" key={element.id}>
              <div className="icon">{element.icon}</div>
              <div className="text">
                <p>{element.title}</p>
                <p>{element.subTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularCategories;
