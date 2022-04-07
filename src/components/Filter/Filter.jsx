import React from "react";
import { useFilter } from "../../Context/Filter-Context";
import { CheckboxInput } from "../../components/CheckboxInput/CheckboxInput";
import { RadioInput } from "../../components/RadioInput/RadioInput";

const Filter = ({ prod }) => {
  const { filterVisible } = useFilter();
  const { state, dispatch } = useFilter();
  return (
    <div
      className="bg-main-black box-shadow filters"
      style={{ left: filterVisible ? "0rem" : "-100rem" }}
    >
      <div id="row_one" className="p-6">
        <div id="filter__heading" className="txt-4xl p-4 txt-gray-200">
          Filters
        </div>
        <div
          id="filter__clear"
          className="txt-3xl p-4 txt-gray-400 pointer"
          onClick={() => dispatch({ type: "CLEAR" })}
        >
          Clear All
        </div>
      </div>
      <div id="row_two" className="p-6">
        <div id="price__heading" className="txt-4xl p-4 txt-gray-200">
          Price
        </div>
        <div className="m-2 txt-2xl txt-gray-200">{state.maxPrice}</div>
        <div id="price__slider">
          <div
            id="slider__value"
            className="txt-2xl txt-bold txt-gray-400 m-4"
          />
          <div className="flex align-center">
            <div className="m-2 txt-2xl txt-gray-200">0</div>
            <input
              type="range"
              name
              min={1000}
              max={60000}
              defaultValue={60000}
              id="slider"
              onChange={(e) => {
                return dispatch({
                  type: "MAX_PRICE",
                  value: e.target.value,
                });
              }}
            />

            <div className="m-2 txt-2xl txt-gray-200">60000+</div>
          </div>
        </div>
      </div>

      <div id="row_three" className="p-6">
        <div id="category__heading" className="txt-4xl p-4 txt-gray-200">
          Category
        </div>
        <div id="category__list">
          <div className="list__wrapper flex flex-col bg-main-black rounded-2xl">
            <div
              className="list__select"
              onChange={(e) =>
                dispatch({
                  checked: e.target.checked,
                  value: e.target.value,
                  type: "CATEGORY",
                })
              }
            >
              <CheckboxInput
                id="weights"
                name="weights"
                className="list__item__select"
                value="weights"
                label_text="Weights"
                checked={state.category}
              />
              <CheckboxInput
                id="equipments"
                name="equipments"
                className="list__item__select"
                value="equipments"
                label_text="Equipments"
                checked={state.category}
              />
              <CheckboxInput
                id="yoga"
                name="yoga"
                className="list__item__select"
                value="yoga"
                label_text="Yoga Accessories"
                checked={state.category}
              />
              <CheckboxInput
                id="clothing"
                name="clothing"
                className="list__item__select"
                value="clothing"
                label_text="Clothing"
                checked={state.category}
              />
            </div>
          </div>
        </div>
      </div>
      <div id="row_four" className="p-6">
        <div id="rating__heading" className="txt-4xl p-4 txt-gray-200">
          Rating
        </div>
        <div
          id="rating__radio-button"
          onChange={(e) => {
            dispatch({ value: e.target.value, type: "RATING" });
          }}
        >
          <RadioInput
            name="star"
            id="fourstar"
            className="radio"
            label_text="4 or more stars"
            value="4"
            checked={state.rating}
          />
          <RadioInput
            name="star"
            id="threestar"
            className="radio"
            label_text="3 or more stars"
            value="3"
            checked={state.rating}
          />
          <RadioInput
            name="star"
            id="twostar"
            className="radio"
            label_text="2 or more stars"
            value="2"
            checked={state.rating}
          />
          <RadioInput
            name="star"
            id="onestar"
            className="radio"
            label_text="1 or more stars"
            value="1"
            checked={state.rating}
          />
        </div>
      </div>
      <div id="row_five" className="p-6">
        <div id="sort__heading" className="txt-4xl p-4 txt-gray-200">
          Sort by
        </div>
        <div
          id="sort__radio-button"
          className="flex flex-col"
          onChange={(e) => {
            dispatch({ value: e.target.value, type: "SORT" });
          }}
        >
          <RadioInput
            name="radio"
            className="radio"
            id="ltoh"
            label_text="Low to High"
            value="LOW_TO_HIGH"
            checked={state.sort}
          />

          <RadioInput
            name="radio"
            className="radio"
            id="htol"
            label_text="High to Low"
            value="HIGH_TO_LOW"
            checked={state.sort}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
