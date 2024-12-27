import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose
    .connect(process.env.MONGO_URI, {
        dbName: "DINEIN",
    })
    //Sucessful db connection
    .then(() => {
        console.log("Connected to database succesfully");
    }).catch(err => {
        console.log(`Database connection error: ${err}`);
    })
};  

 