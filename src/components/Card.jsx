import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({coffee}) => {
    const { 
        id, 
        name, 
        image, 
        category, 
        origin, 
        type,  
        rating, 
        popularity 
      } = coffee;
  return (
    <div>
      <NavLink to={`/Coffee/${id}`}>
      <div className="card card-compact bg-base-100 max-w-96 shadow-xl duration-500 hover:scale-105">
        <figure className="max-h-52 object-cover object-center">
          <img
            src={image}
            alt={name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name : {name}</h2>
          <h2 className="text-lg font-medium">Category : {category}</h2>
          <h2 className="text-lg font-medium">Type : {type}</h2>
          <h2 className="text-lg font-medium">Origin : {origin}</h2>
          <h2 className="text-lg font-medium">Rating : {rating}</h2>
        </div>
      </div>
      </NavLink>
    </div>
  );
};

export default Card;
