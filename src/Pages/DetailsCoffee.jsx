import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DetailsCoffee = () => {
  const data = useLoaderData();
  const [coffee, setCoffee] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const userId = parseInt(id);
    const coffeeCard = data.find((coffee) => coffee.id === userId);
    setCoffee(coffeeCard);
  }, [data, id]);


  const { 
    name, 
    image, 
    category,  
    rating, 
    popularity ,
    ingredients
  } = coffee;

  return (
    <div className="my-6 p-4">
      <h3 className="text-4xl">
        A delicious blend of espresso, steamed milk, and rich chocolate, topped
        with whipped cream.
      </h3>
      <div className="card card-compact bg-base-100 w-11/12 shadow-xl">
        <figure>
          <img
            src={image}
            alt={name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{name}</h2>
          <p className="text-2xl font-thin">{category}</p>
          <p className="text-2xl font-thin">Popularity : {popularity}</p>
          <p className="text-2xl font-thin">Rating : {rating}</p>
          <div>
            <h3 className="text-2xl">ingredients :</h3>
            <ul className="pl-6 my-3">
            {ingredients?.map((item,index)=>
            <li
            className="text-xl list-disc"
             key={index}>
              {item}
              </li>
            )}
            </ul>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default DetailsCoffee;
