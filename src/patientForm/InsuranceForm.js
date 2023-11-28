import "./InsuranceForm.css";
import FormHeading from "./FormHeading";
import { motion, AnimatePresence } from "framer-motion";
function InsuranceForm({ formik }) {
  const formikValues = formik ? formik.values : {};
  return (
    <>
      <form>
        <div className="ins-heading">
          <h2>Insurance Information</h2>
        </div>
        <div className="ins-line"></div>
        <div className="insComp-container">
          <div className="insComp-info">
            <div className="insComp-label">
              <label htmlFor="insName">Insurance Name</label>
            </div>
            <div className="insComp-inputs">
              <div className="insComp-input-container">
                <motion.input
                  value={formikValues.insName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  whileFocus={{ scale: 1.1 }}
                  transition={{ type: "tween", stiffness: 100 }}
                  type="text"
                  id="insName"
                  name="insName"
                  className={
                    formik.errors.insName && formik.touched.insName
                      ? "input-error"
                      : ""
                  }
                ></motion.input>
                {formik.errors.insName && formik.touched.insName ? (
                  <p style={{ fontWeight: "bold" }}>{formik.errors.insName}</p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="insNum-container">
          <div className="insNum-info">
            <div className="insNum-label">
              <label htmlFor="insNum">Insurance ID</label>
            </div>
            <div className="insNum-inputs">
              <div className="insNum-input-container">
                <motion.input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formikValues.insNum}
                  exit={{ opacity: 0, y: -20 }}
                  whileFocus={{ scale: 1.1 }}
                  transition={{ type: "tween", stiffness: 100 }}
                  type="text"
                  id="insNum"
                  name="insNum"
                  className={
                    formik.errors.insNum && formik.touched.insNum
                      ? "input-error"
                      : ""
                  }
                ></motion.input>
                {formik.errors.insNum && formik.touched.insNum ? (
                  <p style={{ fontWeight: "bold" }}>{formik.errors.insNum}</p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="polName-container">
          <div className="polName-info">
            <div className="polName-label">
              <label htmlFor="policy">Policy Holder's Name</label>
            </div>
            <div className="polName-inputs">
              <div className="polName-input-container">
                <AnimatePresence mode="wait">
                  <motion.input
                    value={formikValues.polName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    whileFocus={{ scale: 1.1 }}
                    transition={{ type: "tween", stiffness: 100 }}
                    type="text"
                    id="polName"
                    name="polName"
                    className={
                      formik.errors.polName && formik.touched.polName
                        ? "input-error"
                        : ""
                    }
                  ></motion.input>
                  {formik.errors.polName && formik.touched.polName ? (
                    <p style={{ fontWeight: "bold" }}>
                      {formik.errors.polName}
                    </p>
                  ) : (
                    ""
                  )}
                </AnimatePresence>
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
      </form>
    </>
  );
}

export default InsuranceForm;
