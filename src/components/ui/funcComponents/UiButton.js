import facebook from "../../../assets/images/facebook.svg";
import google from "../../../assets/images/google.svg";
import "./css/uiButton.css";

const UiButton = (props) => {
  const callbackButton = () => {
    if (props.callback !== undefined) props.callback();
  };

  return (
    <button
      type={props.type}
      className="buttonContainer"
      style={{
        width: props.width,
        height: props.height,
        borderRadius: props.borderRadius,
        fontSize: props.fontSize,
        cursor: "pointer",
        padding: props.padding,
        display: props.display,
        justifyContent: props.justifyContent,
        alignItems: props.alignItems,
        boxShadow: props.boxShadow,
        marginTop: props.marginTop,
      }}
      onClick={callbackButton}
    >
      <span style={{ color: props.color }}>{props.label}</span>

      {
        //Controllo props.img per sapere quale icona mostrare
        props.img === "facebook" && <img src={facebook} alt="facebook" />
      }

      {
        //Controllo props.img per sapere quale icona mostrare
        props.img === "google" && (
          <img src={google} alt="google" style={{ width: "80%" }} />
        )
      }
    </button>
  );
};

// esporto la classe
export default UiButton;
