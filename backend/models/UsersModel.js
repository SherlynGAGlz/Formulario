import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    roll: {
        type: String,
        default: "cliente"
    },
    
});
export const UserModel = model("users", UserSchema);