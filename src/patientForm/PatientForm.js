import "./PatientForm.css";
import "./FormHeading";
import FormHeading from "./FormHeading";

import { motion, useAnimate, stagger } from "framer-motion";
import { useFormik } from "formik";
import { basicSchema } from "../schema/index";

function PatientForm({ formik }) {
  const [scope, animate] = useAnimate();
  const formikValues = formik ? formik.values : {};
  console.log("Formik formik.values:", formikValues);
  console.log("Formik formik.errors:", formik.errors);
  const errorLength = Object.keys(formik.errors).length;

  return (
    <>
      <FormHeading />
      <form
        autoComplete="off"
        ref={scope}
      >
        <div className="registration-container">
          <div className="date-time-info">
            <div className="date-time-label">
              <label htmlFor="dateAndTime">Registration Date and Time</label>
            </div>
            <div className="date-time-inputs">
              <div className="date-container">
                <motion.input
                  value={formikValues.dateInput}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "tween", stiffness: 100 }}
                  className="flex-item"
                  id="dateInput"
                  name="dateInput"
                  type="date"
                ></motion.input>
                <div id="date-desc">
                  <p>Date</p>
                </div>
              </div>
              <div className="time-container">
                <motion.input
                  value={formikValues.timeInput}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "tween", stiffness: 100 }}
                  className={
                    formik.errors.timeInput && formik.touched.timeInput
                      ? "input-error"
                      : ""
                  }
                  type="time"
                  id="timeInput"
                  name="timeInput"
                  min="00:00"
                  max="23:59"
                ></motion.input>
                {formik.errors.timeInput && formik.touched.timeInput ? (
                  <p style={{ fontWeight: "bold" }}>
                    {formik.errors.timeInput}
                  </p>
                ) : (
                  ""
                )}
                <div id="time-desc">
                  <p>Hours Minutes</p>
                </div>
              </div>
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
                  value={formikValues.healthNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  whileFocus={{
                    scale: 1.1,
                  }}
                  transition={{ type: "tween", stiffness: 100 }}
                  type="number"
                  id="healthNumber"
                  name="healthNumber"
                  placeholder="Ex:320456"
                  className={
                    formik.errors.healthNumber && formik.touched.healthNumber
                      ? "input-error"
                      : ""
                  }
                ></motion.input>
                {formik.errors.healthNumber && formik.touched.healthNumber ? (
                  <p style={{ fontWeight: "bold" }}>
                    {formik.errors.healthNumber}
                  </p>
                ) : (
                  ""
                )}
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
                  value={formikValues.patientFirstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  whileFocus={{ scale: 1.1 }}
                  transition={{ type: "tween", stiffness: 100 }}
                  type="text"
                  id="patientFirstName"
                  name="patientFirstName"
                  placeholder="First Name"
                  className={
                    formik.errors.patientFirstName &&
                    formik.touched.patientFirstName
                      ? "input-error"
                      : ""
                  }
                ></motion.input>
                {formik.errors.patientFirstName &&
                formik.touched.patientFirstName ? (
                  <p style={{ fontWeight: "bold" }}>
                    {formik.errors.patientFirstName}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="last-name-container">
                <motion.input
                  value={formikValues.patientLastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  whileFocus={{ scale: 1.1 }}
                  transition={{ type: "tween", stiffness: 100 }}
                  type="text"
                  id="patientLastName"
                  name="patientLastName"
                  placeholder="Last Name"
                  className={
                    formik.errors.patientLastName &&
                    formik.touched.patientLastName
                      ? "input-error"
                      : ""
                  }
                ></motion.input>
                {formik.errors.patientLastName &&
                formik.touched.patientLastName ? (
                  <p style={{ fontWeight: "bold" }}>
                    {formik.errors.patientLastName}
                  </p>
                ) : (
                  ""
                )}
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
                  value={formikValues.patientSex}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "tween", stiffness: 100 }}
                  type="text"
                  id="patientSex"
                  name="patientSex"
                  className={
                    formik.errors.patientSex && formik.touched.patientSex
                      ? "input-error"
                      : ""
                  }
                >
                  <option>Please Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>N/A</option>
                </motion.select>
                {formik.errors.patientSex && formik.touched.patientSex ? (
                  <p style={{ fontWeight: "bold" }}>
                    {formik.errors.birthDate}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="birth-container">
          <div className="birth-info">
            <div className="birthTest-label">
              <label htmlFor="birthDate">Date of Birth</label>
            </div>
            <div className="birth-inputs">
              <div className="birth-input-container">
                <motion.input
                  value={formikValues.birthDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "tween", stiffness: 100 }}
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  className={
                    formik.errors.birthDate && formik.touched.birthDate
                      ? "input-error"
                      : ""
                  }
                ></motion.input>
                {formik.errors.birthDate && formik.touched.birthDate ? (
                  <p style={{ fontWeight: "bold" }}>
                    {formik.errors.birthDate}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="phone-container">
          <div className="phone-info">
            <div className="phone-label">
              <label htmlFor="patientPhone">Phone Number</label>
            </div>
            <div className="phone-inputs">
              <div className="phone-input-container">
                <motion.input
                  value={formikValues.patientPhone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  whileFocus={{ scale: 1.1 }}
                  transition={{ type: "tween", stiffness: 100 }}
                  type="number"
                  id="patientPhone"
                  name="patientPhone"
                  placeholder="123-456-7890"
                  className={
                    formik.errors.patientPhone && formik.touched.patientPhone
                      ? "input-error"
                      : ""
                  }
                ></motion.input>
                {formik.errors.patientPhone && formik.touched.patientPhone ? (
                  <p style={{ fontWeight: "bold" }}>
                    {formik.errors.patientPhone}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="email-container">
          <div className="email-info">
            <div className="email-label">
              <label htmlFor="patientEmail">Email</label>
            </div>
            <div className="email-inputs">
              <div className="email-input-container">
                <motion.input
                  value={formikValues.patientEmail}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  whileFocus={{ scale: 1.1 }}
                  transition={{ type: "tween", stiffness: 100 }}
                  type="email"
                  id="patientEmail"
                  name="patientEmail"
                  placeholder="ex:myname@example.com"
                  className={
                    formik.errors.patientEmail && formik.touched.patientEmail
                      ? "input-error"
                      : ""
                  }
                ></motion.input>
                {formik.errors.patientEmail && formik.touched.patientEmail ? (
                  <p style={{ fontWeight: "bold" }}>
                    {formik.errors.patientEmail}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="address-line-one-container">
          <div className="address-line-one-info">
            <div className="address-line-one-label">
              <label htmlFor="addresslineOne">Address</label>
            </div>
            <div className="address-line-one-inputs">
              <div className="address-line-one-input-container">
                <motion.textarea
                  value={formikValues.addressLineOne}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  whileFocus={{ scale: 1.1 }}
                  transition={{ type: "tween", stiffness: 100 }}
                  type="text"
                  id="addressLineOne"
                  name="addressLineOne"
                  placeholder="street address"
                  className={
                    formik.errors.addressLineOne &&
                    formik.touched.addressLineOne
                      ? "input-error"
                      : ""
                  }
                ></motion.textarea>
                {formik.errors.addressLineOne &&
                formik.touched.addressLineOne ? (
                  <p style={{ fontWeight: "bold" }}>
                    {formik.errors.addressLineOne}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="address-line-two-container">
          <div className="address-line-two-info">
            <div className="address-line-two-label">
              <label htmlFor="addressLineTwo"></label>
            </div>
            <div className="address-line-two-inputs">
              <div className="address-line-two-input-container">
                <motion.textarea
                  value={formikValues.addressLineTwo}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  whileFocus={{ scale: 1.1 }}
                  transition={{ type: "tween", stiffness: 100 }}
                  type="text"
                  id="addressLineTwo"
                  name="addressLineTwo"
                  placeholder="street address line 2"
                  className={formik.errors.addressLineTwo ? "input-error" : ""}
                ></motion.textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="address-line-three-container">
          <div className="address-line-three-info">
            <div className="address-line-three-label">
              <label htmlFor="place"></label>
            </div>
            <div className="place-inputs">
              <div className="city-container">
                <motion.input
                  value={formikValues.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  whileFocus={{ scale: 1.1 }}
                  transition={{ type: "tween", stiffness: 100 }}
                  type="text"
                  id="city"
                  name="city"
                  placeholder="City"
                  className={
                    formik.errors.city && formik.touched.city
                      ? "input-error"
                      : ""
                  }
                ></motion.input>
                {formik.errors.city && formik.touched.city ? (
                  <p style={{ fontWeight: "bold" }}>{formik.errors.city}</p>
                ) : (
                  ""
                )}
              </div>
              <div className="province-container">
                <motion.input
                  value={formikValues.province}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  whileFocus={{ scale: 1.1 }}
                  transition={{ type: "tween", stiffness: 100 }}
                  type="text"
                  id="province"
                  name="province"
                  placeholder="State/Province"
                  className={
                    formik.errors.province && formik.touched.province
                      ? "input-error"
                      : ""
                  }
                ></motion.input>
                {formik.errors.province && formik.touched.province ? (
                  <p style={{ fontWeight: "bold" }}>{formik.errors.province}</p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="address-line-four-container">
          <div className="address-line-four-info">
            <div className="address-line-four-label">
              <label htmlFor="zip"></label>
            </div>
            <div className="address-line-four-inputs">
              <div className="address-line-four-input-container">
                <motion.input
                  value={formikValues.zip}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  whileFocus={{ scale: 1.1 }}
                  transition={{ type: "tween", stiffness: 100 }}
                  type="number"
                  id="zip"
                  name="zip"
                  placeholder="Postal/Zip Code"
                  className={
                    formik.errors.zip && formik.touched.zip ? "input-error" : ""
                  }
                ></motion.input>
                {formik.errors.zip && formik.touched.zip ? (
                  <p style={{ fontWeight: "bold" }}>{formik.errors.zip}</p>
                ) : (
                  ""
                )}
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
                  value={formikValues.maritalStatus}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "tween", stiffness: 100 }}
                  type="text"
                  id="maritalStatus"
                  name="maritalStatus"
                  className={
                    formik.errors.maritalStatus && formik.touched.maritalStatus
                      ? "input-error"
                      : ""
                  }
                >
                  <option defaultValue={"Please Select"}>Please Select</option>
                  <option>Single</option>
                  <option>Divorced</option>
                  <option>Legally Separated</option>
                  <option>Widowed</option>
                </motion.select>
                {formik.errors.maritalStatus && formik.touched.maritalStatus ? (
                  <p style={{ fontWeight: "bold" }}>
                    {formik.errors.maritalStatus}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="age-q-container">
          <div className="age-q-info">
            <div className="age-q-label">
              <label htmlFor="ageAns">Is the patient younger than 18 ?</label>
            </div>
            <div className="age-q-inputs">
              <div className="yes-container">
                <motion.input
                  value="Yes"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  whileHover={{ scale: 1.5 }}
                  transition={{ type: "tween", stiffness: 100 }}
                  type="radio"
                  checked={formikValues.ageQ === "Yes"}
                  id="ageAns"
                  name="ageQ"
                  className={
                    formik.errors.ageYes && formik.touched.ageYes
                      ? "input-error"
                      : ""
                  }
                ></motion.input>
                <label>Yes</label>
              </div>
              <div className="no-container">
                <motion.input
                  value="No"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  whileHover={{ scale: 1.4 }}
                  transition={{ type: "tween", stiffness: 100 }}
                  type="radio"
                  checked={formikValues.ageQ === "No"}
                  id="ageAns"
                  name="ageQ"
                  className={
                    formik.errors.ageNo && formik.touched.ageNo
                      ? "input-error"
                      : ""
                  }
                ></motion.input>
                <label>No</label>
              </div>{" "}
            </div>
          </div>
        </div>
        {formik.errors.ageQ && formik.touched.ageQ ? (
          <p
            style={{
              fontWeight: "bold",
              textAlign: "center",
              paddingLeft: "90px",
            }}
          >
            {formik.errors.ageQ}
          </p>
        ) : (
          ""
        )}
      </form>
    </>
  );
}

export default PatientForm;
