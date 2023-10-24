import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const host = process.env.REACT_APP_HOST;
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    father: "",
    mother: "",
    gender: "male",
    dob: "",
    qualification: "intermediate",
    institution: "",
    board: "",
    marks: "",
    appearing: "undergraduate",
    college: "",
    university: "",
    lastmarks: "",
    flat: "",
    town: "",
    city: "",
    district: "",
    state: "",
    indian: "yes",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${host}/api/form`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then((res) => res.json())
      .then((resData) => {
        if (resData.status === 200) {
          if (resData.form.personal.name === details.name) {
            navigate("/success");
          }
        } else {
          console.log(resData.error);
        }
      });
  };
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const handleClear = () => {
    setDetails({
      name: "",
      email: "",
      phone: "",
      father: "",
      mother: "",
      gender: "male",
      dob: "",
      qualification: "intermediate",
      institution: "",
      board: "",
      marks: "",
      appearing: "undergraduate",
      college: "",
      university: "",
      lastmarks: "",
      flat: "",
      town: "",
      city: "",
      district: "",
      state: "",
      indian: "yes",
    });
  };
  return (
    <div className="formpage">
      <div className="details">
        <img src="/logo512.png" alt="logo" />
        <span>uScholar</span>
        <p>Apply Now & Go to your Dream College Abroad</p>
        <p className="small">Steps to fill the form</p>
        <ol>
          <li>Personal Details</li>
          <p>Enter your personal details.</p>
          <li>Educational Details</li>
          <p>Enter your last and current educational qualifications.</p>
          <li>Communication Details</li>
          <p>Enter your current address and communication details.</p>
        </ol>
        <p className="small">Contact Us</p>
        <div id="icons">
          <a href="https://gmail.com" target="blank" rel="noreferrer">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a href="https://facebook.com" target="blank" rel="noreferrer">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://instagram.com/" target="blank" rel="noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://twitter.com/" target="blank" rel="noreferrer">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="main-form">
        <h3>Personal Details</h3>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={details.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={details.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="number"
          name="phone"
          id="phone"
          value={details.phone}
          onChange={handleChange}
          required
        />
        <label htmlFor="father">Father's Name</label>
        <input
          type="text"
          name="father"
          id="father"
          value={details.father}
          onChange={handleChange}
          required
        />
        <label htmlFor="mother">Mother's Name</label>
        <input
          type="text"
          name="mother"
          id="mother"
          value={details.mother}
          onChange={handleChange}
          required
        />
        <label htmlFor="male">Gender</label>
        <input
          type="radio"
          name="gender"
          id="male"
          value={details.gender}
          onChange={handleChange}
          required
        />
        <label htmlFor="male" id="first">
          Male
        </label>
        <input
          type="radio"
          name="gender"
          id="female"
          value={details.gender}
          onChange={handleChange}
          required
        />
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          name="gender"
          id="others"
          value={details.gender}
          onChange={handleChange}
          required
        />
        <label htmlFor="others">Others</label>
        <label htmlFor="dob">Date of Birth</label>
        <input
          type="date"
          name="dob"
          id="dob"
          value={details.dob}
          onChange={handleChange}
          required
        />

        <h3 className="heading">Educational Details</h3>
        <label htmlFor="qualification">Last Qualification</label>
        <select
          name="qualification"
          id="qualification"
          value={details.qualification}
          onChange={handleChange}
          required
        >
          <option value="intermediate">Intermediate</option>
          <option value="undergraduate">Undergraduate</option>
          <option value="postgraduate">Postgraduate</option>
        </select>
        <label htmlFor="institution">Name of College / School</label>
        <input
          type="text"
          name="institution"
          id="institution"
          value={details.institution}
          onChange={handleChange}
          required
        />
        <label htmlFor="board">Name of Board / University</label>
        <input
          type="text"
          name="board"
          id="board"
          value={details.board}
          onChange={handleChange}
          required
        />
        <label htmlFor="marks">Marks</label>
        <input
          type="number"
          name="marks"
          id="marks"
          value={details.marks}
          onChange={handleChange}
          required
        />
        <label htmlFor="appearing">Current Qualification</label>
        <select
          name="appearing"
          id="appearing"
          value={details.appearing}
          onChange={handleChange}
          required
        >
          <option value="intermediate">Intermediate</option>
          <option value="undergraduate">Undergraduate</option>
          <option value="postgraduate">Postgraduate</option>
        </select>
        <label htmlFor="college">Name of College</label>
        <input
          type="text"
          name="college"
          id="college"
          value={details.college}
          onChange={handleChange}
          required
        />
        <label htmlFor="university">Name of University</label>
        <input
          type="text"
          name="university"
          id="university"
          value={details.university}
          onChange={handleChange}
          required
        />
        <label htmlFor="lastmarks">Last Year Marks</label>
        <input
          type="number"
          name="lastmarks"
          id="lastmarks"
          value={details.lastmarks}
          onChange={handleChange}
          required
        />

        <h3 className="heading">Communication Details</h3>
        <label htmlFor="flat">Flat / Street</label>
        <input
          type="flat"
          name="flat"
          id="flat"
          value={details.flat}
          onChange={handleChange}
          required
        />
        <label htmlFor="town">Village / Town</label>
        <input
          type="town"
          name="town"
          id="town"
          value={details.town}
          onChange={handleChange}
          required
        />
        <label htmlFor="city">City</label>
        <input
          type="city"
          name="city"
          id="city"
          value={details.city}
          onChange={handleChange}
          required
        />
        <label htmlFor="district">District</label>
        <input
          type="district"
          name="district"
          id="district"
          value={details.district}
          onChange={handleChange}
          required
        />
        <label htmlFor="state">State</label>
        <input
          type="state"
          name="state"
          id="state"
          value={details.state}
          onChange={handleChange}
          required
        />
        <label htmlFor="indian">Resident</label>
        <select
          name="indian"
          id="indian"
          value={details.indian}
          onChange={handleChange}
          required
        >
          <option value="yes">Indian</option>
          <option value="nri">NRI</option>
          <option value="no">Foreigner</option>
        </select>
        <button className="btn" type="submit">
          Submit
        </button>
        <button
          className="btn"
          type="button"
          id="reset-btn"
          onClick={handleClear}
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default FormPage;
