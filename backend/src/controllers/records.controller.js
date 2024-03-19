import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { Record } from "../models/records.model.js";

const createRecord = asyncHandler(async (req, res) => {
    try {
        const { fullName, status, date } = req.body;
        if (!fullName || !status || !date) {
            throw new ApiError(400, "All fields are required");
        }

        const record = await Record.create({
            fullName,
            status,
            date
        });

        if (!record) {
            throw new ApiError(500, "Something is missing while creating the record");
        }

        res.status(201).json(new ApiResponse(200, record, "Record created successfully"));
    } catch (error) {
        throw new ApiError(500, "Something went wrong while creating the record");
    }
});

const getRecords = asyncHandler(async (req, res) => {
    try {
        const allRecords = await Record.find();
        if (!allRecords) {
            throw new ApiError(404, "No records found");
        }
        res.status(200).json(new ApiResponse(200, allRecords, "Records fetched successfully"));
    } catch (error) {
        throw new ApiError(500, "Something went wrong while fetching the records");
    }
});

export { createRecord, getRecords };