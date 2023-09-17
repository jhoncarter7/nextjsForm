import mongoose, {Schema} from "mongoose";

const schemaUser = new Schema(
    {
        FirstName: String,
        lastName: String,
        EmailId: String,
        Mobile: Number,
        Address1: String,
        Address2: String,
        State: String,
        Country: String,
        ZipCode: Number,
        
    },

    {
timestamps: true
    }
)

const UserDetails = mongoose.models.UserDetails || mongoose.model("UserDetails", schemaUser)

export default UserDetails;