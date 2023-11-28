import "./EmergencyForm.css";
import { motion } from "framer-motion";
function EmergencyForm({ formik }) {
  const formikValues = formik ? formik.values : {};
  return (
    <>
      <div className="emergency-heading">
        <h2>Emergency Contact</h2>
      </div>
      <div className="emergency-line"></div>
      <form>
        <div className="emergency-container">
          <div className="emergency-info">
            <div className="emergency-label">
              <label htmlFor="emergencyContact">Emergency Contact</label>
            </div>
            <div className="emergency-inputs">
              <div className="emergency-first-name-container">
                <motion.input
                  value={formikValues.emergencyFirstName}
                  whileFocus={{ scale: 1.1 }}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  id="emergencyFirstName"
                  name="emergencyFirstName"
                  className={
                    formik.errors.familyDocLast &&
                    formik.touched.emergencyLastName
                      ? "input-error"
                      : ""
                  }
                  placeholder="First Name"
                  transition={{ type: "tween", stiffness: 100 }}
                ></motion.input>
                {formik.errors.emergencyFirstName &&
                formik.touched.emergencyFirstName ? (
                  <p style={{ fontWeight: "bold" }}>
                    {formik.errors.emergencyFirstName}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="emergency-last-name-container">
                <motion.input
                  value={formikValues.emergencyLastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  whileFocus={{ scale: 1.1 }}
                  transition={{ type: "tween", stiffness: 100 }}
                  type="text"
                  id="emergencyLastName"
                  name="emergencyLastName"
                  className={
                    formik.errors.emergencyLastName &&
                    formik.touched.emergencyLastName
                      ? "input-error"
                      : ""
                  }
                  placeholder="Last Name"
                ></motion.input>
                {formik.errors.emergencyLastName &&
                formik.touched.emergencyLastName ? (
                  <p style={{ fontWeight: "bold" }}>
                    {formik.errors.emergencyLastName}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="emergency-relation-container">
          <div className="emergency-relation-info">
            <div className="emergency-relation-label">
              <label htmlFor="relation">Relationship</label>
            </div>
            <div className="emergency-relation-inputs">
              <div className="emergency-relation-input-container">
                <motion.input
                  value={formikValues.relation}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  whileFocus={{ scale: 1.1 }}
                  transition={{ type: "tween", stiffness: 100 }}
                  placeholder=" 
                  ex:Son/Daughter"
                  type="text"
                  id="relation"
                  name="relation"
                  className={
                    formik.errors.relation && formik.touched.relation
                      ? "input-error"
                      : ""
                  }
                ></motion.input>
                {formik.errors.relation && formik.touched.relation ? (
                  <p style={{ fontWeight: "bold" }}>{formik.errors.relation}</p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="emergency-phone-container">
          <div className="emergency-phone-info">
            <div className="emergency-phone-label">
              <label htmlFor="emergencyPhone">Contact Number</label>
            </div>
            <div className="emergency-phone-inputs">
              <div className="emergency-phone-input-container">
                <motion.input
                  whileFocus={{ scale: 1.1 }}
                  value={formikValues.emergencyPhone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  transition={{ type: "tween", stiffness: 100 }}
                  type="number"
                  id="emergencyPhone"
                  name="emergencyPhone"
                  placeholder="123-456-7890"
                  className={
                    formik.errors.emergencyPhone &&
                    formik.touched.emergencyPhone
                      ? "input-error"
                      : ""
                  }
                ></motion.input>
                {formik.errors.emergencyPhone &&
                formik.touched.emergencyPhone ? (
                  <p style={{ fontWeight: "bold" }}>
                    {formik.errors.emergencyPhone}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="famDoc-container">
          <div className="famDoc-info">
            <div className="famDoc-label">
              <label htmlFor="familyDoc">Family Doctor Name</label>
            </div>
            <div className="famDoc-inputs">
              <div className="famDoc-first-name-container">
                <motion.input
                  value={formikValues.familyDocFirst}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  whileFocus={{ scale: 1.1 }}
                  transition={{ type: "tween", stiffness: 100 }}
                  type="text"
                  id="familyDocFirst"
                  name="familyDocFirst"
                  placeholder="First Name"
                  className={
                    formik.errors.familyDocFirst &&
                    formik.touched.familyDocFirst
                      ? "input-error"
                      : ""
                  }
                ></motion.input>
                {formik.errors.familyDocFirst &&
                formik.touched.familyDocFirst ? (
                  <p style={{ fontWeight: "bold" }}>
                    {formik.errors.familyDocFirst}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="famDoc-last-name-container">
                <motion.input
                  value={formikValues.familyDocLast}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  whileFocus={{ scale: 1.1 }}
                  transition={{ type: "tween", stiffness: 100 }}
                  type="text"
                  id="familyDocLast"
                  name="familyDocLast"
                  placeholder="Last Name"
                  className={
                    formik.errors.familyDocLast && formik.touched.familyDocLast
                      ? "input-error"
                      : ""
                  }
                ></motion.input>
                {formik.errors.familyDocLast && formik.touched.familyDocLast ? (
                  <p style={{ fontWeight: "bold" }}>
                    {formik.errors.familyDocLast}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="famDoc-phone-container">
          <div className="famDoc-phone-info">
            <div className="famDoc-phone-label">
              <label htmlFor="familyDocPhone">Family Doctor Phone Number</label>
            </div>
            <div className="famDoc-phone-inputs">
              <div className="famDoc-phone-input-container">
                <motion.input
                  value={formikValues.famDocPhone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  whileFocus={{ scale: 1.1 }}
                  transition={{ type: "tween", stiffness: 100 }}
                  type="number"
                  id="famDocPhone"
                  name="famDocPhone"
                  placeholder="123-456-7890"
                  className={
                    formik.errors.famDocPhone && formik.touched.famDocPhone
                      ? "input-error"
                      : ""
                  }
                ></motion.input>
                {formik.errors.famDocPhone && formik.touched.famDocPhone ? (
                  <p style={{ fontWeight: "bold" }}>
                    {formik.errors.famDocPhone}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="favPharmacy-container">
          <div className="favPharmacy-relation-info">
            <div className="favPharmacy-relation-label">
              <label htmlFor="favPharma">Prefered Pharmacy</label>
            </div>
            <div className="favPharmacy-inputs">
              <div className="favPharmacy-input-container">
                <motion.input
                  value={formikValues.favPharma}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  whileFocus={{ scale: 1.1 }}
                  transition={{ type: "tween", stiffness: 100 }}
                  type="text"
                  id="favPharma"
                  name="favPharma"
                  className={
                    formik.errors.favPharma && formik.touched.favPharma
                      ? "input-error"
                      : ""
                  }
                ></motion.input>
                {formik.errors.favPharma && formik.touched.favPharma ? (
                  <p style={{ fontWeight: "bold" }}>
                    {formik.errors.favPharma}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="favPharmacy-phone-container">
          <div className="favPharmacy-phone-info">
            <div className="favPharmacy-phone-label">
              <label htmlFor="familyDocPhone">Pharmacy Phone Number</label>
            </div>
            <div className="favPharmacy-phone-inputs">
              <div className="favPharmacy-phone-input-container">
                <motion.input
                  value={formikValues.favPharmaPhone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  whileFocus={{ scale: 1.1 }}
                  transition={{ type: "tween", stiffness: 100 }}
                  type="number"
                  id="favPharmaPhone"
                  name="favPharmaPhone"
                  placeholder="123-456-7890"
                  className={
                    formik.errors.favPharmaPhone &&
                    formik.touched.favPharmaPhone
                      ? "input-error"
                      : ""
                  }
                ></motion.input>
                {formik.errors.favPharmaPhone &&
                formik.touched.favPharmaPhone ? (
                  <p style={{ fontWeight: "bold" }}>
                    {formik.errors.favPharmaPhone}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default EmergencyForm;
