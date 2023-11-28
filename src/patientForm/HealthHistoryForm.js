import "./HealthHistoryForm.css";
import { motion } from "framer-motion";
function HealthHistoryForm({ formik }) {
  const formikValues = formik ? formik.values : {};
  return (
    <>
      <form>
        <div className="healthHis-heading">
          <h2>Health History</h2>
        </div>
        <div className="healthHis-line"></div>
        <div className="regReason-container">
          <div className="regReason-info">
            <div className="regReason-label">
              <label htmlFor="reason">Reason For Registration</label>
            </div>
            <div className="regReason-inputs">
              <div className="regReason-input-container">
                <motion.input
                  value={formikValues.regReason}
                  whileFocus={{ scale: 1.1 }}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  transition={{ type: "tween", stiffness: 100 }}
                  placeholder="reason for registration"
                  type="text"
                  id="regReason"
                  name="regReason"
                ></motion.input>
                {formik.errors.regReason && formik.touched.regReason ? (
                  <p style={{ fontWeight: "bold" }}>
                    {formik.errors.regReason}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="notes-container">
          <div className="notes-info">
            <div className="notes-label">
              <label htmlFor="addresslineOne">Additional Notes</label>
            </div>
            <div className="notes-inputs">
              <div className="notes-input-container">
                <motion.textarea
                  value={formikValues.notes}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  whileFocus={{ scale: 1.1 }}
                  transition={{ type: "tween", stiffness: 100 }}
                  type="text"
                  id="notes"
                  name="notes"
                  placeholder="street address"
                  className={
                    formik.errors.notes && formik.touched.notes
                      ? "input-error"
                      : ""
                  }
                ></motion.textarea>
                {formik.errors.notes && formik.touched.notes ? (
                  <p style={{ fontWeight: "bold" }}>{formik.errors.notes}</p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="med-q-container">
          <div className="med-q-info">
            <div className="med-q-label">
              <label htmlFor="ageAns">
                Taking any medications currently ?{" "}
              </label>
            </div>
            <div className="med-q-inputs">
              <div className="yes-container">
                <motion.input
                  value="Yes"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  whileHover={{ scale: 1.5 }}
                  transition={{ type: "tween", stiffness: 100 }}
                  type="radio"
                  checked={formikValues.medQ === "Yes"}
                  id="medQ"
                  name="medQ"
                  className={
                    formik.errors.medQ && formik.touched.ageYes
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
                  checked={formikValues.medQ === "No"}
                  id="medQ"
                  name="medQ"
                  className={
                    formik.errors.medQ && formik.touched.medQ
                      ? "input-error"
                      : ""
                  }
                ></motion.input>
                <label>No</label>
              </div>
              {formik.errors.medQ && formik.touched.birthDate ? (
                <p style={{ fontWeight: "bold" }}>{formik.errors.birthDate}</p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default HealthHistoryForm;
