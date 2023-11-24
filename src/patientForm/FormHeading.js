import "./FormHeading.css";

function FormHeading(props) {
  return (
    <ul className={props.headClass}>
      <li className="form-info-main">{props.heading}</li>
      {props.guideline && (
        <li className="form-guide-line">Please fill in the form below</li>
      )}
    </ul>
  );
}

export default FormHeading;
