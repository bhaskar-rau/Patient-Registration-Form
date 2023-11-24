import "./PatientForm.css";
import "./FormHeading";
import FormHeading from "./FormHeading";
import { motion } from "framer-motion";

function PatientForm() {
  return (
    <>
      <FormHeading
        heading={"New Patient Registration"}
        guideline={true}
        headClass={"form-heading"}
      />
      <form>
        <div className="registration-container">
          <div className="date-time-info">
            <div className="date-time-label">
              <label htmlFor="dateAndTime">Registration Date and Time</label>
            </div>
            <div className="date-time-inputs">
              <div className="date-container">
                <motion.input
                  whileHover={{ scale: 1.1 }}
                  className="flex-item"
                  id="dateInput"
                  type="date"
                  required
                ></motion.input>
              </div>
              <div className="time-container">
                <motion.input
                  whileHover={{ scale: 1.1 }}
                  className="flex-item"
                  type="time"
                  id="timeInput"
                  name="timeInput"
                  min="00:00"
                  max="23:59"
                  required
                ></motion.input>
              </div>
            </div>
          </div>
          <div className="desc">
            <div id="date-desc">
              <p>Date</p>
            </div>
            <div id="time-desc">
              <p>Hours Minutes</p>
            </div>
          </div>
        </div>
        <div className="health-care-container">
          <div className="health-care-info">
            <div className="health-care-label">
              <label htmlFor="healthNumber">Health Care Number</label>
            </div>
            <div className="health-care-inputs">
              <div className="health-care-input-container">
                <motion.input
                  whileFocus={{ scale: 1.1 }}
                  type="number"
                  id="healthNumber"
                  name="healthNumber"
                  placeholder="Ex:320456"
                ></motion.input>
              </div>
            </div>
          </div>
        </div>

        <div className="line"></div>

        <div className="patient-container">
          <div className="patient-name-info">
            <div className="patient-name-label">
              <label htmlFor="patientName">Patient Name</label>
            </div>
            <div className="patient-inputs">
              <div className="first-name-container">
                <motion.input
                  whileFocus={{ scale: 1.1 }}
                  type="text"
                  id="patientName"
                  name="patientName"
                  placeholder="First Name"
                ></motion.input>
              </div>
              <div className="last-name-container">
                <motion.input
                  whileFocus={{ scale: 1.1 }}
                  type="text"
                  id="patientName"
                  name="patientName"
                  placeholder="Last Name"
                ></motion.input>
              </div>
            </div>
          </div>
        </div>

        <div className="sex-container">
          <div className="sex-info">
            <div className="sex-label">
              <label htmlFor="sex">Sex</label>
            </div>
            <div className="sex-inputs">
              <div className="sex-input-container">
                <motion.select
                  whileHover={{ scale: 1.1 }}
                  type="text"
                  id="sex"
                  name="sex"
                >
                  <option defaultValue={"Please Select"}>Please Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>N/A</option>
                </motion.select>
              </div>
            </div>
          </div>
        </div>

        <div className="birth-container">
          <div className="birth-info">
            <div className="birth-label">
              <label htmlFor="birthDate">Date of Birth</label>
            </div>
            <div className="birth-inputs">
              <div className="birth-input-container">
                <motion.input
                  whileHover={{ scale: 1.1 }}
                  type="date"
                  id="birthDate"
                  name="birthDate"
                ></motion.input>
              </div>
            </div>
          </div>
        </div>

        <div className="phone-container">
          <div className="phone-info">
            <div className="phone-label">
              <label htmlFor="phone">Phone Number</label>
            </div>
            <div className="phone-inputs">
              <div className="phone-input-container">
                <motion.input
                  whileFocus={{ scale: 1.1 }}
                  type="number"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="123-456-7890"
                  required
                ></motion.input>
              </div>
            </div>
          </div>
        </div>

        <div className="email-container">
          <div className="email-info">
            <div className="email-label">
              <label htmlFor="email">Email</label>
            </div>
            <div className="email-inputs">
              <div className="email-input-container">
                <motion.input
                  whileFocus={{ scale: 1.1 }}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="ex:myname@example.com"
                ></motion.input>
              </div>
            </div>
          </div>
        </div>

        <div className="address-line-one-container">
          <div className="address-line-one-info">
            <div className="address-line-one-label">
              <label htmlFor="address">Address</label>
            </div>
            <div className="address-line-one-inputs">
              <div className="address-line-one-input-container">
                <motion.textarea
                  whileFocus={{ scale: 1.1 }}
                  type="text"
                  id="address"
                  name="address"
                  placeholder="street address"
                ></motion.textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="address-line-two-container">
          <div className="address-line-two-info">
            <div className="address-line-one-label">
              <label htmlFor="address"></label>
            </div>
            <div className="address-line-two-inputs">
              <div className="address-line-two-input-container">
                <motion.textarea
                  whileFocus={{ scale: 1.1 }}
                  type="text"
                  id="address"
                  name="address"
                  placeholder="street address line 2"
                ></motion.textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="address-line-three-container">
          <div className="address-line-three-info">
            <div className="address-line-three-label">
              <label htmlFor="address"></label>
            </div>
            <div className="place-inputs">
              <div className="city-container">
                <motion.input
                  whileFocus={{ scale: 1.1 }}
                  type="text"
                  id="address"
                  name="address"
                  placeholder="City"
                ></motion.input>
              </div>
              <div className="province-container">
                <motion.input
                  whileFocus={{ scale: 1.1 }}
                  type="text"
                  id="address"
                  name="address"
                  placeholder="State/Province"
                ></motion.input>
              </div>
            </div>
          </div>
        </div>
        <div className="address-line-four-container">
          <div className="address-line-four-info">
            <div className="address-line-four-label">
              <label htmlFor="address"></label>
            </div>
            <div className="address-line-four-inputs">
              <div className="address-line-four-input-container">
                <motion.input
                  whileFocus={{ scale: 1.1 }}
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Postal/Zip Code"
                ></motion.input>
              </div>
            </div>
          </div>
        </div>

        <div className="marital-container">
          <div className="marital-info">
            <div className="marital-label">
              <label htmlFor="maritalStatus">Marital Status</label>
            </div>
            <div className="marital-inputs">
              <div className="marital-input-container">
                <motion.select
                  whileHover={{ scale: 1.1 }}
                  type="text"
                  id="maritalStatus"
                  name="maritalStatus"
                >
                  <option defaultValue={"Please Select"}>Please Select</option>
                  <option>Single</option>
                  <option>Divorced</option>
                  <option>Legally Separated</option>
                  <option>Widowed</option>
                </motion.select>
              </div>
            </div>
          </div>
        </div>

        <div className="age-q-container">
          <div className="age-q-info">
            <div className="age-q-label">
              <label>
                Is your patient younger than <br />
                18 ?
              </label>
            </div>
            <div className="age-q-inputs">
              <div className="yes-container">
                <motion.input
                  whileHover={{ scale: 1.5 }}
                  type="radio"
                  id="name"
                  name="name"
                ></motion.input>
                <label>Yes</label>
              </div>
              <div className="no-container">
                <motion.input
                  whileHover={{ scale: 1.4 }}
                  type="radio"
                  id="name"
                  name="name"
                ></motion.input>
                <label>No</label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default PatientForm;
