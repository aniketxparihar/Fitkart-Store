import React from 'react'
import { Link } from "react-router-dom";
import { useFilter } from "../../Context/Filter-Context"
import "./CategoryCard.css";

const Category = (props) => {
  const { state, dispatch } = useFilter();
  return (
    <Link
      to="/Product"
      className="category__link"
      key={props.category.id}
      onClick={(e) => {
        dispatch({
          checked: true,
          value: props.category.categoryName.toLowerCase(),
          type: "CATEGORY",
        });
      }}
    >
      <img className="category__image" src={props.category.image} />
      <div to="/Product" className="tag__name txt-main-white txt-4xl">
        <i className="material-icons txt-main-white">north_east</i>
        {props.category.categoryName}
      </div>
    </Link>
  );
}

export default Category