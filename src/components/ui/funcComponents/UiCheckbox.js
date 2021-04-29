import "./css/uiCheckbox.css";

// creo la casse
const UiCheckbox = (props) => {
  const getText = (event) => {
    if (props.callback !== undefined) {
      props.callback(event);
    }
  };

  return (
    <div
      className={`${
        props.place === "register"
          ? "containerInputboxReg"
          : "containerInputbox"
      }`}
      style={{
        backgroundColor: props.backgroundColor,
        boxShadow: props.boxShadow,
        color: props.color,
        marginTop: props.marginTop,
        transition: "0.3s ease",
      }}
    >
      <input
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        name={props.name}
        width={props.width}
        height={props.height}
        padding={props.padding}
        onChange={getText}
        required
      />

      <label
        htmlFor={props.name}
        style={{
          marginLeft: "0px",
        }}
      >
        {props.label}
      </label>
    </div>
  );
};

// esporto la classe
export default UiCheckbox;
