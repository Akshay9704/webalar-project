import mongoose, { Schema } from "mongoose";

const recordsSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true
        },
        status: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        }
    }
)

export const Record = mongoose.model("Record", recordsSchema)