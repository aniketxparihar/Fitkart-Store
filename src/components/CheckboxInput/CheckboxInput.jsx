import React from "react";

const CheckboxInput = ({ name, className, id, label_text, value, checked }) => {
  return (
    <div className="category flex justify-center align-center">
      <input
        type="checkbox"
        id={id}
        name={name}
        className={className}
        value={value}
        checked={checked.includes(value)}
      />
      <label className="txt-2xl txt-gray-200" htmlFor={id}>
        {label_text}
      </label>
    </div>
  );
};

export { CheckboxInput };
