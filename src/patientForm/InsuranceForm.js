import "./InsuranceForm.css";
import FormHeading from "./FormHeading";
function InsuranceForm() {
  return (
    <>
      <FormHeading
        heading={"Insurance Information"}
        guideline={false}
        headClass={"form-subHeading"}
      />
      <form>
        <div
          className="test-input"
          //   id="second-input"
        >
          <label>
            <h3>Insurance Company</h3>
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
            <h3>Insurance ID</h3>
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
            <h3>Policy holder's Name</h3>
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
            <h3>Date of Birth</h3>
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

export default InsuranceForm;
