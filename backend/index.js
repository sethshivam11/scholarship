const express = require("express");
const app = express();
const connectDb = require("./db");
const dotenv = require("dotenv").config();
const port = process.env.PORT;
const path = require("path");
const __dirname1 = path.resolve();
const Form = require("./Form");

connectDb();

app.use(express.json());

app.post("/api/form", async (req, res) => {
  let status = 400;
  const {
    name,
    email,
    phone,
    father,
    mother,
    gender,
    dob,
    qualification,
    institution,
    board,
    marks,
    appearing,
    college,
    university,
    lastmarks,
    flat,
    town,
    city,
    district,
    state,
    indian,
  } = req.body;
  if (
    !name ||
    !email ||
    !phone ||
    !father ||
    !mother ||
    !gender ||
    !dob ||
    !qualification ||
    !institution ||
    !board ||
    !marks ||
    !appearing ||
    !college ||
    !university ||
    !lastmarks ||
    !flat ||
    !town ||
    !city ||
    !district ||
    !state ||
    !indian
  ) {
    return res
      .status(400)
      .json({ status, error: "Enter the details correctly!" });
  }
  try {
    const form = await Form.create({
      personal: {
        name,
        email,
        phone,
        father,
        mother,
        gender,
        dob,
      },
      education: {
        last: {
          qualification,
          institution,
          board,
          marks,
        },
        current: {
          qualification: appearing,
          college,
          university,
          marks: lastmarks,
        },
      },
      communication: {
        flat,
        town,
        city,
        district,
        state,
        indian,
      },
    });
    status = 200;
    res.status(200).json({ status, form });
  } catch (err) {
    console.log(err);
    res.status(400).json({ status, error: err });
  }
});

app.listen(port, () => console.log(`App is listening on port ${port}`));

// -------------------------- Deployment ------------------------------

if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("App is under development!");
  });
}