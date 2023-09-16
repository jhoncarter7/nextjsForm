import mongoose from "mongoose";

 const mongoDBConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('connected to database')
    } catch (error) {
        console.log(error)
    }
}


export default mongoDBConnection;



// "FirstName": "Nikhil",
// "lastName": "rai",
// "EmailId": "String",
// "Mobile": "String",
// "Address1": "String",
// "Address2": "String",
// "State": "String",
// "Country": "String",
// "ZipCode": 3984785