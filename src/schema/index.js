import * as yup from "yup";

const phoneRules = /^[0-9]{10}$/;
export const basicSchema = yup.object().shape({
  timeInput: yup.string().required("Please enter your registration time"),
  healthNumber: yup
    .string()
    .min(6, "Health Number must be atleast 6 digits")
    .required("Please enter your Health Number"),
  patientFirstName: yup
    .string()
    .max(50, "Please enter valid First Name")
    .required("Your First Name is required"),
  patientLastName: yup
    .string()
    .max(50, "Please enter valid Last Name")
    .required("Your Last Name is required"),
  patientSex: yup
    .string()
    .oneOf(["Male", "Female", "N/A"])
    .required("Please Select Your Sex"),
  birthDate: yup.date().required("Please enter your date of birth"),
  patientPhone: yup
    .string()
    .matches(phoneRules, {
      message: "Please-enter-a-valid-phone-number(###-###-####)",
    })
    .required("Your phone number is required"),
  patientEmail: yup
    .string()
    .email("Please enter a Valid email")
    .required("Please enter your email address"),
  addressLineOne: yup
    .string()
    .min(4, "Please enter your full address")
    .required("Please enter your address"),
  addressLineTwo: yup.string().notRequired(),
  city: yup.string().required("Please enter your city"),
  province: yup.string().required("Please enter your province"),
  zip: yup.number().required("Please enter your zip code"),
  maritalStatus: yup
    .string()
    .oneOf(
      ["Single", "Divorced", "Leagally Separated", "Widowed"],
      "please select your marital status"
    )
    .notRequired(),
  ageQ: yup.string().required("Please answer this question"),
  emergencyFirstName: yup
    .string()
    .max(50, "Please enter valid First Name")
    .required("This is a required field"),
  emergencyLastName: yup
    .string()
    .max(50, "Please enter valid Last Name")
    .required("This is a required field"),
  relation: yup
    .string()
    .oneOf(
      [
        "father",
        "mother",
        "friend",
        "son",
        "daughter",
        "husband",
        "wife",
        "brother",
        "sister",
        "grandfather",
        "grandmother",
        "grandson",
        "uncle",
        "aunt",
        "nephew",
        "niece",
        "cousins",
      ],
      "Please enter valid relation"
    )
    .required("This is a required field"),
  emergencyPhone: yup
    .string()
    .matches(phoneRules, {
      message: "Please-enter-a-valid-phone-number(###-###-####)",
    })
    .required("Your phone number is required"),
  familyDocFirst: yup
    .string()
    .max(50, "Please enter valid First Name")
    .required(" First Name is required"),
  familyDocLast: yup
    .string()
    .max(50, "Please enter valid Last Name")
    .required("Last Name is required"),
  famDocPhone: yup
    .string()
    .matches(phoneRules, {
      message: "Please-enter-a-valid-phone-number(###-###-####)",
    })
    .required(" phone number is required"),
  favPharma: yup.string().required("Please enter your city"),
  favPharmaPhone: yup
    .string()
    .matches(phoneRules, {
      message: "Please-enter-a-valid-phone-number(###-###-####)",
    })
    .required(" phone number is required"),
  insName: yup
    .string()
    .max(50, "Please Insurance Name")
    .required("Insurance Name is required"),
  insNum: yup
    .string()
    .min(6, "Insurance number must be atleast 6 digits")
    .required("Please enter your Insurance Number"),
  polName: yup.string().required("Please enter your insurance provider name"),
  regReason: yup.string().required("Please enter the reason for registration"),
});
