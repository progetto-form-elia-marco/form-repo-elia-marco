import React from "react";

const UiSelect = (props) => {
  const callbackSelect = () => {
    props.callback();
  };

  return (
    <div className="selectTitle">
      <span>Title:</span>
      <select
        name={props.name}
        required
        defaultValue={props.defaultValue}
        onChange={callbackSelect}
      >
        {props.options.map((option, index) => {
          return (
            <option value={option} key={index}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default UiSelect;
