import "./css/uiInputbox.css";

// creo la casse
const UiInputbox = (props) => {
  const getText = (event) => {
    if (props.callback !== undefined) {
      props.callback(event);
    }
  };

  return (
    <div
      className="containerInputbox"
      style={{
        backgroundColor: props.backgroundColor,
        boxShadow: props.boxShadow,
        marginTop: props.marginTop,
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
export default UiInputbox;
