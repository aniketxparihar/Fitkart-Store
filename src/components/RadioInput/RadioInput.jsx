const RadioInput = ({ name, className, id, label_text, value, checked }) => {
  return (
    <div className="flex">
      <input
        type="radio"
        name={name}
        id={id}
        className={className}
        value={value}
        checked={checked === value}
      />
      <label htmlFor={id} className="txt-2xl txt-gray-200">
        {label_text}
      </label>
    </div>
  );
};
export { RadioInput };
