import "./EmergencyForm.css";
import { motion } from "framer-motion";
function EmergencyForm() {
  return (
    <>
      <div className="emergency-heading">
        <h2>Emergency Contact</h2>
      </div>
      <div className="emergency-line"></div>
      <form className>
        <div className="emergency-container">
          <div className="emergency-info">
            <div className="emergency-label">
              <label htmlFor="emergencyContact">Emergency Contact</label>
            </div>
            <div className="emergency-inputs">
              <div className="emergency-first-name-container">
                <motion.input
                  whileFocus={{ scale: 1.1 }}
                  type="text"
                  id="emergencyContact"
                  name="emergencyContact"
                  placeholder="First Name"
                ></motion.input>
              </div>
              <div className="emergency-last-name-container">
                <motion.input
                  whileFocus={{ scale: 1.1 }}
                  type="text"
                  id="EmergencyContact"
                  name="EmergencyContact"
                  placeholder="Last Name"
                ></motion.input>
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
                  whileFocus={{ scale: 1.1 }}
                  type="text"
                  id="relation"
                  name="relation"
                ></motion.input>
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
                  type="number"
                  id="emergencyPhone"
                  name="emergencyPhone"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="123-456-7890"
                  required
                ></motion.input>
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
                  whileFocus={{ scale: 1.1 }}
                  type="text"
                  id="familyDoc"
                  name="familyDoc"
                  placeholder="First Name"
                ></motion.input>
              </div>
              <div className="famDoc-last-name-container">
                <motion.input
                  whileFocus={{ scale: 1.1 }}
                  type="text"
                  id="familyDoc"
                  name="familyDoc"
                  placeholder="Last Name"
                ></motion.input>
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
                  whileFocus={{ scale: 1.1 }}
                  type="number"
                  id="emergencyPhone"
                  name="emergencyPhone"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="123-456-7890"
                  required
                ></motion.input>
              </div>
            </div>
          </div>
        </div>
        <div
          className="test-input"
          //   id="second-input"
        >
          <label>
            <h3>Preffered Pharmacy</h3>
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
            <h3>Pharmacy Phone Number</h3>
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

export default EmergencyForm;
