import mongoose from "mongoose";
import validator from "validator"; //For email validation

const reservationSchema = new mongoose.Schema ({
    firstName: {
        type: String,
        required: true,
        minLength: [3,"First Name should contain atleast 3 characters"],
        maxLength: [30,"First Name cannot exceed 30 characters"],

    },
    lastName: {
        type: String,
        required: true,
        minLength: [3,"Last Name should contain atleast 3 characters"],
        maxLength: [30,"Last Name cannot exceed 30 characters"],     
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail,"Provide a valid email!"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone number must contain atleast 10 digits"],
        maxLength: [10, "Phone number must contain max 10 digits"],
    },
    time: {
        type: String,
        required: [true,"time is required"],
    },
    date: {
        type: Date,
        required: [true,"Date is required"],
    },
});

export const Reservation = mongoose.model("Reservation",reservationSchema);
 
