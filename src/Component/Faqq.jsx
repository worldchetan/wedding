import React, { useEffect } from "react";
import { useState } from "react";
import ProgressBar from "./ProgressBar";
import { Field, Formik, ErrorMessage, Form } from "formik";
import TextError from "./TextError";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import * as Yup from "yup";
import postLevelOne from "../services/postLevelOne";
// import Login from "./../Login";
import YesNoButtonC from "./YesNoButtonC";
import {
  getDistrictList,
  getTehsilList,
  getVillageList,
} from "../User/DynamicDropDown";
import QR from "../image/QR_code_sample.svg";
import { Button } from "reactstrap";
import Swal from "sweetalert2";
import moment from "moment";
// import Level2 from "./Level2";
// import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";

const casteCategoryList = [
  { value: "GENERAL", label: "GENERAL", id: "14" },
  { value: "OBC", label: "OBC", id: "15" },
  { value: "SC", label: "SC", id: "16" },
  { value: "ST", label: "ST", id: "17" },
  { value: "SBC", label: "SBC", id: "18" },
  { value: "VJNT", label: "VJNT", id: "19" },
];
const ProfessionList = [
  { value: "Student", label: "Student" },
  { value: "Farmer", label: "Farmer" },
  { value: "Doctor", label: "Doctor" },
  { value: "Engineer", label: "Engineer" },
  { value: "Lowyer", label: "Lowyer" },
  { value: "Teacher", label: "Teacher" },
  { value: "Chef", label: "Chef" },
  { value: "Designer", label: "Designer" },
  { value: "Pharmacist", label: "Pharmacist" },
  { value: "Police officer", label: "Police officer" },
  { value: "Judge", label: "Judge" },
  { value: "Politician", label: "Politician" },
  { value: "Scientist", label: "Scientist" },
  { value: "Soldier", label: "Soldier" },
  { value: "Other", label: "Other" },
];

const BloodGroupList = [
  { value: "A+", label: "A+" },
  { value: "O+", label: "O+" },
  { value: "B+", label: "B+" },
  { value: "AB+", label: "AB+" },
  { value: "A-", label: "A-" },
  { value: "O-", label: "O-" },
  { value: "B-", label: "B-" },
  { value: "AB-", label: "AB-" },
];
const MaritialStatusList = [
  { value: "Single", label: "Single", id: "4" },
  { value: "Married", label: "Married", id: "5" },
  { value: "Divorced", label: "Divorced", id: "6" },
  { value: "Widowed", label: "Widowed", id: "7" },
];
const HousingConditionList = [
  { value: "Owned", label: "Owned" },
  { value: "Rented", label: "Rented" },
  { value: "Goverment Alloted", label: "Company/Govt Allotted" },
];
const OccupationList = [
  { value: "Student", label: "Student" },
  { value: "Farmer", label: "Farmer" },
  { value: "Builder", label: "Builder" },
  { value: "Shopkeeper", label: "Shopkeeper" },
  { value: "Real Estate Agent", label: "Real Estate Agent" },
  { value: "Carpentary", label: "Carpentary" },
  { value: "Barber", label: "Barber" },
  { value: "Restaurant service", label: "Restaurant service" },
  { value: "NGO service", label: "NGO service" },
  { value: "Other", label: "Other" },
];
const GenderList = [
  { value: "Male", label: "Male", id: "1" },
  { value: "Female", label: "Female", id: "2" },
  { value: "Transgender", label: "Transgender", id: "3" },
];

const FamilyStructureList = [
  { value: "Joint", label: "Joint" },
  { value: "Nuclear", label: "Nuclear" },
];

const EducationList = [
  { value: "Uneducated", label: "Uneducated" },
  { value: "Below Primary (4th Class)", label: "Below Primary (4th Class)" },
  { value: "Below Secondary", label: "Below Secondary" },
  { value: "Under Graduate", label: "Under Graduate" },
  { value: "Graduate", label: "Graduate" },
  { value: "Post Graduate", label: "Post Graduate" },
  { value: "PHD", label: "PHD" },
  { value: "Vocational", label: "Vocational" },
];
const EmploymentList = [
  { value: "Employed", label: "Employed", id: "26" },
  { value: "Unemployed", label: "Unemployed", id: "27" },
  { value: "Selfemployed", label: "Selfemployed", id: "28" },
];

const ReligionOptions = [
  // Define religion options here
  { value: "Hindu", label: "Hindu" },
  { value: "Muslim", label: "Muslim" },
  { value: "Buddhist", label: "Buddhist" },
  { value: "Jain", label: "Jain" },
  { value: "Sikh", label: "Sikh" },
  { value: "Christian", label: "Christian" },
];
const Level1 = ({ handleLevelState }) => {
  const [dist, setDist] = useState([]);
  const [tehsil, setTehsil] = useState([]);
  const [distId, setDistId] = useState("");
  const [VillageDList, setVillageDList] = useState([]);
  const [formper, setFormper] = useState(null);
  // const history = useHistory();
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState("");
  // console.log("modalData:-", modalData);
  const [maritail, setMaritail] = useState("");
  const [gender, setGender] = useState("");
  const [cast, setCast] = useState("");
  const [empsta, setEmpsta] = useState("");
  const [currentLocation, setCurrentLocation] = useState({});
  const [phoneNumber, setPhoneNumber] = useState("0123456789");
  const [showErrr, setShowErrr] = useState(false);
  // const [showLogin, setShowLogin] = useState(false);
  // const [show, setShow] = useState(false);
  // const [isShow, setIsShow] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [lgShow, setLgShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => {
    setLgShow(false);
    navigate("/");
  };
  const handleShow = (result) => {
    setModalData(result.data);
    setLgShow(true);
    // setShowLogin(true);
    // showFunction();
  };

  // const showFunction = () => {
  //   setIsShow(true);
  // };

  const toggle = (item) => {
    setModalData(item.data);
    setModal(!modal);
  };
  const emailValidRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const initialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    noOfFamilyMember: "",
    DOB: "",
    mobNo: "",
    email: "",
    address: "",
    pincode: "",
    blood: "",
    Maritial: "",
    castecatageory: "",
    housingCondition: "",
    Occupation: "",
    Profession: "",
    Gender: "",
    FamilyStructure: "",
    Education: "",
    Employment: "",
    district: "",
    tehsil: "",
    village: "",
    latitude: "",
    longitude: "",
    // religion: "",
    bplCategory: "",
    diffAble: "",
    whatsappNo: false,
    percentage: 25,
  };
  const phoneRegEx = "^([0|+[0-9]{1,5})?([7-9][0-9]{9})$";
  const pincodeRegEx = "^[1-9]{1}[0-9]{2}[0-9]{3}$";

  var my_array = [];

  for (var i = 1; i <= 100; i++) {
    my_array.push(i);
  }
  const levelOneSchema = Yup.object({
    firstName: Yup.string()
      .required("Required")
      .matches(/^[A-Za-z\s]+$/, "Enter only alphabets")
      .matches(/^\S*$/, "Field should not contain white spaces")
      .min(2, "Too Short!"),
    middleName: Yup.string()
      .required("Required")
      .matches(/^[A-Za-z\s]+$/, "Enter only alphabets")
      .matches(/^\S*$/, "Field should not contain white spaces")
      .min(2, "Too Short!"),
    lastName: Yup.string()
      .required("Required")
      .matches(/^[A-Za-z\s]+$/, "Enter only alphabets")
      .matches(/^\S*$/, "Field should not contain white spaces")
      .min(2, "Too Short!"),
    // /^[0-20/]{1}$/
    // noOfFamilyMember: Yup.string()
    //   .matches(/^[0-9/]{1}$/, "Enter Proper member")
    //   .required("Please enter the Family Member"),
    noOfFamilyMember: Yup.number()
      .required("Numeric input is required")
      .integer("Input must be an integer")
      .positive("Input must be a positive number")
      .oneOf(
        my_array,
        // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],

        "Enter Family Member Number more Than Zero "
      ),
    // DOB: Yup.date()
    //   .max(new Date(), "Date of Birth can not be in future")
    //   .required("Please select the DOB"),
    DOB: Yup.date()
      .required("Required")

      .max(new Date(), "Date of birth cannot be in the future")
      .min(
        Yup.ref("minDateOfBirth"),
        "Date of birth must be at least 120 years ago"
      )
      .required("Date of birth is required"),
    minDateOfBirth: Yup.date()
      .default(() => {
        const currentDate = new Date();
        currentDate.setFullYear(currentDate.getFullYear() - 120);
        return currentDate;
      })
      .test("is-over-1", "Age must be at least 1 years old", (value) => {
        const today = new Date();
        const birthDate = new Date(value);
        const age = today.getFullYear() - birthDate.getFullYear();
        // const monthDiff = today.getMonth() - birthDate.getMonth();

        // Check if the age is exactly 14 or greater
        if (age > 1 || (age === 1 && age >= 120)) {
          return true;
        }
        return false;
      }),
    address: Yup.string().min(3).max(25).required("Please enter the Address"),
    mobNo: Yup.string()
      .required("Required")
      .matches(/^[0-9\s]+$/, "Enter Numbers Only")
      .test(
        "valid-phone",
        "Mobile number must be exactly 10 digits",
        (value) => {
          if (!value) return false;
          const cleanedNumber = value.replace(/\s/g, "");
          return /^\d{10}$/.test(cleanedNumber);
        }
      )
      .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits")
      .matches(phoneRegEx, "Mobile number is not valid")
      .max(10, "Mobile number must be exactly 10 digits"),
    // email: Yup.string()
    //   .required("Required")
    //   .email("Invalid email")
    //   .test("com", "Email must include .com", (value) => {
    //     if (value && !value.includes(".com")) {
    //       return false;
    //     }
    //     return true;
    //   }),
    email: Yup.string()
      .matches(emailValidRegex, "Email_Id is not valid")
      .required("Enter Email_Id "),
    // email: Yup.string()
    //   .required("Required")
    //   .matches(emailValidRegex, "Email_Id is not valid")
    //   .test(
    //     "is-valid-domain",
    //     "Email address must be from the domain",
    //     // Email address must be from the domain petrotec.com
    //     (value) => {
    //       // Extract the domain from the email address using regex
    //       const domain = value?.split("@")[1];
    //       // Check if the domain is example.com
    //       return domain === "yahoo.com" || domain === "google.com";
    //     }
    //   ),

    pincode: Yup.string()
      .required("Required")
      .matches(/^[0-9\s]+$/, "Enter Numbers Only")
      .matches(/^\d{6}$/, "Pincode must be 6 digits")
      .matches(pincodeRegEx, "Pincode is not valid"),
    district: Yup.object().required("Required"),
    tehsil: Yup.object().required("Required"),
    village: Yup.object().required("Required"),
    Maritial: Yup.string().required("Please select the Maritial option"),
    blood: Yup.string().required("Required"),
    castecatageory: Yup.string().required(
      "Please select the Caste Gatageory option"
    ),
    housingCondition: Yup.string().required(
      "Please select the housingCondition option"
    ),
    Occupation: Yup.string().required("Please select the Occupation option"),
    Profession: Yup.string().required("Please select the Profession option "),
    Gender: Yup.string().required("Please select the Gender option"),
    FamilyStructure: Yup.string().required(
      "Please select the FamilyStructure option"
    ),
    Education: Yup.string().required("Please select the Education option"),
    Employment: Yup.string().required("Please select the Employment option"),
    bplCategory: Yup.string().required("Please select the bpl option"),
    diffAble: Yup.string().required(
      "Please select the Differently abled option"
    ),
  });

  const getAllDistrictList = async () => {
    await getDistrictList().then((result) => {
      console.log("getDistrictList result:-", result);
      setDist(result);
    });
  };

  const handleLevel = () => {
    handleLevelState("/");
  };

  useEffect(() => {
    getAllDistrictList();
  }, []);

  useEffect(() => {
    if (navigator && navigator && navigator.geolocation) {
      navigator &&
        navigator.geolocation &&
        navigator &&
        navigator.geolocation &&
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
  }, []);

  const showPosition = (position) => {
    console.log("position:-", position);
    const { latitude, longitude } = position.coords;
    console.log("latitude,longitude:-", latitude, longitude);
    setCurrentLocation({ latitude, longitude });
  };
  const showError = (error) => {
    Swal.fire(
      "Failed",
      "Geolocation is not supported in your browser enable it from browser setting",
      "warning"
    );
    console.log("showError error :-", error);
  };

  // const otpVerifyPage = () => {
  const otpVerifyPage = () => {
    // navigate('/verifyotp');
  };

  return (
    <>
      <ProgressBar percentage={percentage} />

      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={levelOneSchema}
          onSubmit={async (values, { resetForm }) => {
            const capitalizeWord = (word) => {
              return word
                .toLowerCase()
                .split(" ")
                .map((w) => w.trim())
                .filter((w) => w !== "")
                .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                .join(" ")
                .trimStart()
                .trimEnd();
            };
            try {
              const questionset = [
                maritail ? 2 : "",
                gender ? 1 : "",
                cast ? 4 : "",
                empsta ? 8 : "",
              ];
              const addUser = {
                firstName: capitalizeWord(values.firstName),
                middleName: capitalizeWord(values.middleName),
                lastName: capitalizeWord(values.lastName),
                numerOfFamilyMembers: values.noOfFamilyMember,
                mobileNumber: values.mobNo,
                email: values.email,
                address: values.address,
                dob: values.DOB,
                pinCode: values.pincode,
                casteCategory: values.castecatageory,
                profession:
                  values.Profession === "Other"
                    ? values.professionT
                    : values.Profession,
                maritalStatus: values.Maritial,
                housingCondition: values.housingCondition,
                occupation:
                  values.Occupation === "Other"
                    ? values.occupationT
                    : values.Occupation,
                gender: values.Gender,
                familyStructure: values.FamilyStructure,
                eduction:
                  values.Education === "Vocational"
                    ? values.educationT
                    : values.Education,
                employment: values.Employment,
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
                bloodGroup: values.blood,
                districtId: values.district.id,
                tehsilId: values.tehsil.id,
                villageId: values.village.id,
                answerId: [maritail, gender, cast, empsta],
                questionId: questionset,
                // bplCategory: values.bpl === "yes" ? values.bpl : values.income,
                bplCategory: values.bplCategory,
                differentlyAbled: values.diffAble,
                whatsappNo: values.whatsappNo,
                // religion: values.religion,
                // level: "25",
                percentage: parseInt(25),
              };
              console.log("addUser :-", addUser);

              // setFormper(25);
              let result = await postLevelOne(addUser);
              console.log("postLevelOne result :-", result);
              if (result.status === 200) {
                console.log("Level1 result :-", result);
                // Swal.fire(
                //   "Great",
                //   "User Added Successfully & Unique ID card Created",
                //   "success"
                // );
                navigate("/verifyotp", {
                  state: {
                    uniqueCode: result?.data?.data?.beneficiary?.uniqueCode,
                  },
                });
                resetForm();
                // handleShow(result);
              }
            } catch (error) {
              if (error.response && error.response.status === 400) {
                console.log_(
                  "addNewUser error with 400 :-",
                  error.response.data.message
                );
                // swal("Failed", ${error.response.data.message}, "warning");
              } else {
                console.log("addNewUser :-", error);
                Swal.fire(
                  "Failed",
                  "Something went wrong please fill correct details",
                  "error"
                );
              }
            }
          }}
        >
          {(formik) => {
            return (
              <>
                <h3 className="text-center">Basic Details</h3>
                <Form>
                  <div className="level1field row mt-2">
                    <div className="col-lg-4">
                      <div className="mt-3">
                        <label className="ms-1" htmlFor="">
                          First Name
                        </label>
                        <Field
                          type="text"
                          placeholder="First Name"
                          name="firstName"
                          class="form-control "
                        />
                      </div>
                      <ErrorMessage name="firstName" component={TextError} />
                    </div>
                    <div className="col-lg-4">
                      <div class=" mt-3">
                        <label className="ms-1" htmlFor="">
                          Middle Name
                        </label>
                        <Field
                          type="text"
                          name="middleName"
                          placeholder="Middle Name"
                          class="form-control"
                        />
                      </div>
                      <ErrorMessage name="middleName" component={TextError} />
                    </div>

                    <div className="col-lg-4">
                      <div class=" mt-3">
                        <label className="ms-1" htmlFor="">
                          Last Name
                        </label>
                        <Field
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          class="form-control"
                        />
                      </div>
                      <ErrorMessage name="lastName" component={TextError} />
                    </div>

                    <div className="col-lg-4">
                      <div className="mt-3">
                        <label className="ms-1" htmlFor="">
                          DOB
                        </label>
                        <Field
                          type="date"
                          name="DOB"
                          placeholder="Date Of birth"
                          className="form-control"
                        />
                      </div>
                      <ErrorMessage name="DOB" component={TextError} />
                    </div>
                    <div className="col-lg-4">
                      <div className="mt-3">
                        <label className="ms-1" htmlFor="">
                          Blood Group
                        </label>
                        <Select
                          name="blood"
                          class="form-control"
                          placeholder="Blood Group"
                          options={BloodGroupList}
                          onChange={(e) => {
                            formik.setFieldValue("blood", e.value);
                            setMaritail(e.id);
                          }}
                        />
                      </div>
                      <ErrorMessage name="blood" component={TextError} />
                    </div>
                    <div className="col-lg-4">
                      <div className="mt-3">
                        <label className="ms-1" htmlFor="">
                          Gender
                        </label>
                        <Select
                          name="Gender"
                          placeholder="Gender"
                          options={GenderList}
                          onChange={(e) => {
                            formik.setFieldValue("Gender", e.value);
                            setGender(e.id);
                          }}
                        />
                      </div>
                      <ErrorMessage name="Gender" component={TextError} />
                    </div>

                    <div className="col-lg-4">
                      <div className="mt-3">
                        <label className="ms-1" htmlFor="">
                          Marital Status
                        </label>
                        <Select
                          name=""
                          placeholder="Marital Status"
                          options={MaritialStatusList}
                          onChange={(e) => {
                            formik.setFieldValue("Maritial", e.value);
                            setMaritail(e.id);
                          }}
                        />
                      </div>
                      <ErrorMessage name="Maritial" component={TextError} />
                    </div>

                    <div className="col-lg-4">
                      <div className="mt-3">
                        <label className="ms-1" htmlFor="">
                          Education
                        </label>
                        <Select
                          name="Education"
                          placeholder="Education"
                          options={EducationList}
                          onChange={(e) => {
                            formik.setFieldValue("Education", e.value);
                          }}
                        />
                      </div>
                      <ErrorMessage name="Education" component={TextError} />
                    </div>
                    {formik.values.Education === "Vocational" ? (
                      <>
                        <div className="col-lg-4">
                          <div className="mt-3">
                            <label className="ms-1" htmlFor="">
                              Education
                            </label>
                            <Field
                              type="text"
                              placeholder="Enter your Education"
                              name="educationT"
                              class="form-control"
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      " "
                    )}
                    {/* <div className="col-lg-4">
                      <div className="my-3 ">
                        <Select
                          name="religion"
                          options={ReligionOptions}
                          placeholder="Select Religion"
                          onChange={(e) => {
                            formik.setFieldValue("religion", e.value);
                          }}
                        />
                      </div>
                      <ErrorMessage
                        name="castecatageory"
                        component={TextError}
                      />
                    </div> */}
                    <div className="col-lg-4">
                      <div className="mt-3">
                        <label className="ms-1" htmlFor="">
                          Caste Category
                        </label>
                        <Select
                          name="castecatageory"
                          placeholder="Catageory"
                          options={casteCategoryList}
                          onChange={(e) => {
                            formik.setFieldValue("castecatageory", e.value);
                            setCast(e.id);
                          }}
                        />
                      </div>
                      <ErrorMessage
                        name="castecatageory"
                        component={TextError}
                      />
                    </div>

                    <div className="col-lg-4">
                      <div className="mt-3">
                        <label className="ms-1" htmlFor="">
                          Employment Status
                        </label>
                        <Select
                          name="Employment"
                          placeholder="Employment Status"
                          options={EmploymentList}
                          onChange={(e) => {
                            formik.setFieldValue("Employment", e.value);
                            setEmpsta(e.id);
                          }}
                        />
                      </div>
                      <ErrorMessage name="Employment" component={TextError} />
                    </div>
                    <div className="col-lg-4">
                      <div className="mt-3">
                        <label className="ms-1" htmlFor="">
                          Profession
                        </label>
                        <Select
                          name="Profession"
                          placeholder="Profession"
                          options={ProfessionList}
                          onChange={(e) => {
                            formik.setFieldValue("Profession", e.value);
                          }}
                        />
                      </div>
                      <ErrorMessage name="Profession" component={TextError} />
                    </div>
                    {formik.values.Profession === "Other" ? (
                      <>
                        <div className="col-lg-4">
                          <div className="mt-3">
                            <label className="ms-1" htmlFor="">
                              Enter Your Profession
                            </label>
                            <Field
                              type="text"
                              placeholder="Enter Your Profession  "
                              name="professionT"
                              class="form-control"
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      " "
                    )}

                    <div className="col-lg-4">
                      <div className="mt-3">
                        <label className="ms-1" htmlFor="">
                          Occupation
                        </label>
                        <Select
                          name="Occupation"
                          placeholder="Occupation"
                          options={OccupationList}
                          onChange={(e) => {
                            formik.setFieldValue("Occupation", e.value);
                          }}
                        />
                      </div>
                      <ErrorMessage name="Occupation" component={TextError} />
                    </div>
                    {formik.values.Occupation === "Other" ? (
                      <>
                        <div className="col-lg-4">
                          <div className="mt-3">
                            <label className="ms-1" htmlFor="">
                              Enter Your Occupation
                            </label>
                            <Field
                              type="text"
                              placeholder="Enter your Occupation "
                              name="occupationT"
                              class="form-control"
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      " "
                    )}
                    <div className="col-lg-4">
                      <div className="mt-3">
                        <label className="ms-1" htmlFor="">
                          No. of Family member
                        </label>
                        <Field
                          type="text"
                          name="noOfFamilyMember"
                          placeholder="Number of Family Members"
                          class="form-control"
                          maxLength="2"
                        />
                      </div>
                      <ErrorMessage
                        name="noOfFamilyMember"
                        component={TextError}
                      />
                    </div>
                    <div className="col-lg-4">
                      <div className="mt-3">
                        <label className="ms-1" htmlFor="">
                          Family Structure
                        </label>
                        <Select
                          name="FamilyStructure"
                          placeholder="FamilyStructure"
                          options={FamilyStructureList}
                          onChange={(e) => {
                            formik.setFieldValue("FamilyStructure", e.value);
                          }}
                        />
                      </div>
                      <ErrorMessage
                        name="FamilyStructure"
                        component={TextError}
                      />
                    </div>
                    <div className="col-lg-4">
                      <div className="mt-3">
                        <label className="ms-1" htmlFor="">
                          Housing Condition
                        </label>
                        <Select
                          name="housingCondition"
                          placeholder="Housing Condition"
                          options={HousingConditionList}
                          onChange={(e) => {
                            formik.setFieldValue("housingCondition", e.value);
                          }}
                        />
                      </div>
                      <ErrorMessage
                        name="housingCondition"
                        component={TextError}
                      />
                    </div>
                    {/* {showErrr ? (
                      <div style={{ color: "red" }}>invalid Mobile No</div>
                    ) : (
                      <div>vaild no</div>
                    )} */}
                    <div className="col-lg-4">
                      <div className="mt-3">
                        <label className="ms-1" htmlFor="">
                          Mobile No.
                        </label>
                        <Field
                          type="tel"
                          placeholder="Mobile No."
                          name="mobNo"
                          class="form-control"
                          maxLength="10"

                          // onChange={handleMobile}
                        />
                        <label className="mx-2" htmlFor="">
                          It is your Whats app No ?
                        </label>
                        <Field type="checkbox" name="whatsappNo" />
                      </div>

                      <ErrorMessage name="mobNo" component={TextError} />
                    </div>

                    <div className="col-lg-4">
                      <div className="mt-3">
                        <label className="ms-1" htmlFor="">
                          Email Id
                        </label>
                        <Field
                          type="text"
                          placeholder="Email Id."
                          name="email"
                          class="form-control"
                        />
                      </div>
                      <ErrorMessage name="email" component={TextError} />
                    </div>
                    <div className="col-lg-4">
                      <div className="mt-3">
                        <label className="ms-1" htmlFor="">
                          House No./ Landmark
                        </label>
                        <Field
                          type="text"
                          name="address"
                          placeholder="House Number/Landmark"
                          class="form-control"
                        />
                      </div>
                      <ErrorMessage name="address" component={TextError} />
                    </div>

                    <div className="col-lg-4">
                      <div className="mt-3">
                        <label className="ms-1" htmlFor="">
                          Latitude
                        </label>
                        <Field
                          name="latitude"
                          placeholder="latitude"
                          value={currentLocation.latitude}
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="mt-3">
                        <label className="ms-1" htmlFor="">
                          Longitude
                        </label>
                        <Field
                          name="longitude"
                          placeholder="longitude"
                          value={currentLocation.longitude}
                          class="form-control"
                        />
                      </div>
                      {/* <ErrorMessage name="Maritial" component={TextError} /> */}
                    </div>
                    <div className="col-lg-4">
                      <div className="mt-3">
                        <label className="ms-1" htmlFor="">
                          District
                        </label>
                        <Select
                          name="district"
                          placeholder="District"
                          options={dist}
                          onChange={async (e) => {
                            formik.setFieldValue("district", e);
                            formik.setFieldValue("tehsil", "");
                            formik.setFieldValue("village", "");
                            setDistId(e.id);
                            let districtId = e.id;
                            try {
                              let result = await getTehsilList(districtId);
                              console.log("getTehsilList result:-", result);
                              setTehsil(result);
                            } catch (error) {
                              console.log("getTehsil error:-", error);
                            }
                          }}
                          value={formik.values.district}
                        />
                      </div>
                      <ErrorMessage name="district" component={TextError} />
                    </div>
                    <div className="col-lg-4">
                      <div className="mt-3">
                        <label className="ms-1" htmlFor="">
                          Tehsil
                        </label>
                        <Select
                          name="tehsil"
                          placeholder="Tehsil"
                          options={tehsil}
                          onChange={async (e) => {
                            formik.setFieldValue("tehsil", e);
                            let tehsilId = e.id;
                            try {
                              let result = await getVillageList(
                                distId,
                                tehsilId
                              );
                              console.log("getTehsilList result:-", result);
                              setVillageDList(result);
                            } catch (error) {
                              console.log("getTehsil error:-", error);
                            }
                          }}
                          value={formik.values.tehsil}
                        />
                      </div>
                      <ErrorMessage name="tehsil" component={TextError} />
                    </div>
                    <div className="col-lg-4">
                      <div className="mt-3">
                        <label className="ms-1" htmlFor="">
                          Village
                        </label>
                        <Select
                          name="village"
                          placeholder="Village"
                          options={VillageDList}
                          onChange={(e) => {
                            formik.setFieldValue("village", e);
                          }}
                          value={formik.values.village}
                        />
                      </div>
                      <ErrorMessage name="village" component={TextError} />
                    </div>
                    <div className="col-lg-4">
                      <div className="mt-3">
                        <label className="ms-1" htmlFor="">
                          Pincode
                        </label>
                        <Field
                          type="text"
                          placeholder="Pin Code."
                          name="pincode"
                          class="form-control"
                          maxLength="6"
                        />
                      </div>
                      <ErrorMessage name="pincode" component={TextError} />
                    </div>
                  </div>

                  <div className="level1field row mt-2">
                    <div className="col-lg-6">
                      <div className="my-3">
                        <label htmlFor="bplCategory" style={{ marginLeft: "135px" }}>
                          BPL Catageory
                        </label>

                        <YesNoButtonC
                          name="bplCategory"
                          style={{ marginLeft: "135px" }}
                        />
                        <br />
                      </div>
                      <ErrorMessage name="bplCategory" className="ms-5" component={TextError} />
                      {/* <ErrorMessage name="diffAble" component={TextError} /> */}
                    </div>
                    <div className="col-lg-6">
                      <div className="my-3 ">
                        <label
                          htmlFor="diffAble"
                          style={{ marginLeft: "135px" }}
                        >
                          Differently Abled
                        </label>

                        <YesNoButtonC
                          name="diffAble"
                          style={{ marginLeft: "135px" }}
                        />
                        <br />
                        {/* {formik.values.diffAble === "Yes" ? (
                          <>
                            <Field
                              type="text"
                              placeholder="Enter your Differently abled percentage "
                              name="percentage"
                              class="form-control"
                            />

                            <br />
                          </>
                        ) : (
                          " "
                        )} */}
                      </div>
                      <div className="ms-5">
                      <ErrorMessage name="diffAble"  component={TextError} />
                      </div>
                   
                    </div>
                  </div>

                  <div
                    className="d-flex justify-content-center mt-5 mb-5"
                    style={{ margin: "auto" }}
                  >
                    <Button
                      type="submit"
                      // id="formbutton"
                      disabled={formik.isSubmitting}
                      class="btn btn-primary"
                      onClick={otpVerifyPage}
                    >
                      Submit
                    </Button>
                  </div>

                  <Modal size="lg" show={lgShow} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>
                        Congratulations!
                        <br />
                        Now you are esteemed member of our unique ecosystem.
                        {/* User Added Successfully & Unique Id Card Created */}
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {/* <div className="container">
                        <div className="fourE">
                          <h1 className="text-center"> 4E Portal</h1>

                          <div className="row">
                            <div
                              className="CandidateInfo col-lg-8"
                              style={{ color: "black" }}
                            >
                              <h4 className="RegNo">
                                {modalData &&
                                  modalData.data &&
                                  modalData.data.UniqueCode}{" "}
                              </h4>
                              <h4 className="mb-4">
                                {modalData &&
                                  modalData.data &&
                                  modalData.data.name}{" "}
                              </h4>

                              <div className="CandidatepersonalInfo">
                                <p>
                                  <label htmlFor="">Contact:</label>
                                  {modalData &&
                                    modalData.data &&
                                    modalData.data.beneficiary.mobileNumber}
                                </p>
                                <p>
                                  <label htmlFor="">DOB:</label>
                                  {modalData &&
                                    modalData.data &&
                                    modalData.data.beneficiary.dob}
                                </p>
                                <p>
                                  <label htmlFor="">Blood Group:</label>
                                  {modalData &&
                                    modalData.data &&
                                    modalData.data.beneficiary.bloodGroup}
                                </p>
                                <p>
                                  <label htmlFor="">Gender:</label>
                                  {modalData &&
                                    modalData.data &&
                                    modalData.data.beneficiary.gender}
                                </p>
                              </div>
                            </div>
                            <div className="QR col-lg-4">
                              <img src={QR} alt="" />
                              <p className="m-3">www.4e.com</p>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <div className="fourE3">
                        <h1 className="text-center"> 4e India</h1>

                        <div className="row">
                          <div
                            className="CandidateInfo col-8"
                            style={{ color: "black" }}
                          >
                            <h4 className="RegNo">
                              {" "}
                              {modalData &&
                                modalData.data &&
                                modalData.data.UniqueCode}{" "}
                            </h4>
                            <h4 className="CardUName">
                              {" "}
                              {modalData &&
                                modalData.data &&
                                modalData.data.name}{" "}
                            </h4>

                            <div className="CandidatepersonalInfo">
                              <p>
                                <label htmlFor="" className="labelstyle">
                                  Contact <span className="colonSpace1">:</span>{" "}
                                </label>
                                {modalData &&
                                  modalData.data &&
                                  modalData.data.beneficiary.mobileNumber}
                              </p>
                              <p>
                                <label htmlFor="" className="labelstyle">
                                  DOB <span className="colonSpace2">:</span>
                                </label>
                                {modalData &&
                                  modalData.data &&
                                  modalData.data.beneficiary.dob}
                              </p>
                              <p>
                                <label htmlFor="" className="labelstyle">
                                  Blood Gp<span className="colonSpace3">:</span>
                                </label>
                                {modalData &&
                                  modalData.data &&
                                  modalData.data.beneficiary.bloodGroup}
                              </p>
                              <p>
                                <label htmlFor="" className="labelstyle">
                                  Gender <span className="colonSpace4">:</span>
                                </label>
                                {modalData &&
                                  modalData.data &&
                                  modalData.data.beneficiary.gender}
                              </p>
                            </div>
                          </div>
                          <div
                            className="QR col-4"
                            style={{ textAlign: "center" }}
                          >
                            <div className="QRBox3">
                              <img
                                src={QR}
                                alt=""
                                style={{ maxWidth: "100%", height: "auto" }}
                              />
                            </div>
                            <p className="foureCardLink">www.4e.com</p>
                          </div>
                        </div>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <p>
                        To know your opportunities / schemes, Please login with
                        above 13 digit unique Id number and fill further
                        details.
                      </p>
                    </Modal.Footer>
                  </Modal>
                </Form>
                {/* {showLogin ? (
                  <Login isOpen={isShow} showFunctionP={() => showFunction()} />
                ) : (
                  ""
                )} */}
              </>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default Level1;
