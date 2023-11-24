import "./HealthHistoryForm.css";
import FormHeading from "./FormHeading";
function HealthHistoryForm() {
  return (
    <>
      <FormHeading
        heading="Health History"
        guideline={false}
        headClass={"form-subHeading"}
      />
      <form className>
        <div
          className="test-input"
          //   id="second-input"
        >
          <label>
            <h3>Reason for Registration</h3>
          </label>
          <input
            type="text"
            id="name"
            name="name"
          ></input>
        </div>
        <div
          className="test-input"
          //   id="second-input"
        >
          <label>
            <h3>Additional Notes</h3>
          </label>
          <input
            type="name"
            id="name"
            name="name"
          ></input>
        </div>
        <div
          className="test-input"
          //   id="second-input"
        >
          <label>
            <h3>Taking any medications currently ? </h3>
          </label>
          <input
            type="name"
            id="name"
            name="name"
          ></input>
        </div>
      </form>
    </>
  );
}

export default HealthHistoryForm;
