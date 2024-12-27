import ErrorHandler from "../errorhandling/errorhandling.js";
import {Reservation} from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
    //Data recieved from front end
    const { firstName, lastName, email, phone, time, date} = req.body;
    if(!firstName || !lastName || !email || !phone || !time || !date) {
        return next(new ErrorHandler("Please fill full reservation form!",400));
    }
    try {
        //Creates document for saving data in "Reservation" collection in MongoDB
        await Reservation.create({
            firstName,
            lastName,
            email,
            phone,
            time,
            date
        });
        res.status(200).json({
            success: true,
            message: "Reservation Sent Succesfully",    
        });

    } catch (error) {
        if (error.name === "ValidationError") {
            //Extract error messages through error.errors and join them in a single string
            const validationErrors = Object.values (error.errors).map(     
               (err) => err.message 
            );
            return next(new ErrorHandler(validationErrors.join(","),400));  
            //Pass validation errors to next middleware with a 400 status
        }
        return next(error);
    }
};