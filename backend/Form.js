const mongoose = require("mongoose");
const { Schema } = mongoose;
const FormSchema = new Schema({
  personal: {
    name: {
      type: String,
      required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    father: {
        type: String,
        required: true
    },
    mother: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
},
education: {
    last: {
        qualification: {
            type: String,
            required: true
        },
        institution: {
            type: String,
            required: true
        },
        board: {
            type: String,
            required: true
        },
        marks: {
            type: Number,
            required: true
        },
    },
    current: {
        qualification: {
            type: String,
            required: true
        },
        college: {
            type: String,
            required: true
        },
        university: {
            type: String,
            required: true
        },
        marks: {
            type: Number,
            required: true
        },
    },
},
communication: {
    flat: {
        type: String,
        required: true
    },
    town: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    indian: {
        type: String,
        required: true
    }
  },
});
const Form = mongoose.model("form", FormSchema);
Form.createIndexes();
module.exports = Form;