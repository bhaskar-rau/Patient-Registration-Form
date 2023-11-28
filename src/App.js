// import "./App.css";
import Card from "./UI/Card";
import Header from "./header/Header";
import PatientForm from "./patientForm/PatientForm";
import EmergencyForm from "./patientForm/EmergencyForm";
import HealthHistoryForm from "./patientForm/HealthHistoryForm";
import InsuranceForm from "./patientForm/InsuranceForm";
import { useFormik } from "formik";

import { basicSchema } from "./schema";

const onSubmit = async (values, actions) => {
  console.log("submitted");
  console.log(actions);
  console.log(values);
  await fetch(
    "https://foodappdata-9263f-default-rtdb.asia-southeast1.firebasedatabase.app/patients.json",
    {
      method: "POST",
      body: JSON.stringify({
        values,
      }),
    }
  );
  actions.resetForm();
};

function App() {
  const formik = useFormik({
    initialValues: {
      dateInput: "2023-11-25",
      timeInput: "",
      healthNumber: "",
      patientFirstName: "",
      patientLastName: "",
      patientSex: "Please Select",
      birthDate: "",
      patientPhone: "",
      patientEmail: "",

      addressLineOne: "",
      addressLineTwo: "",
      city: "",
      province: "",
      zip: "",
      maritalStatus: "Please select",
      ageQ: "",
      emergencyFirstName: "",
      emergencyLastName: "",
      relation: "",
      emergencyPhone: "",
      familyDocFirst: "",
      familyDocLast: "",
      famDocPhone: "",
      favPharma: "",
      favPharmaPhone: "",
      insName: "",
      insNum: "",
      polName: "",
      regReason: "",
      notes: "",
      medQ: "",
    },
    validationSchema: basicSchema,
    onSubmit: onSubmit,
  });
  return (
    <>
      <Card>
        <form onSubmit={formik.handleSubmit}>
          <Header />
          <PatientForm formik={formik} />
          <EmergencyForm formik={formik} />
          <HealthHistoryForm formik={formik} />
          <InsuranceForm formik={formik} />
          <button
            disabled={formik.isSubmitting}
            type="submit"
          >
            Register
          </button>
          <h2>
            {formik.isSubmitting
              ? `${formik.values.patientFirstName}, you are registered as a new patient`
              : ""}
          </h2>
        </form>
      </Card>
    </>
  );
}

export default App;
