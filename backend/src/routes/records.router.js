import { Router } from "express";
import { createRecord, getRecords } from "../controllers/records.controller.js";

const router = Router();

router.route("/create-record").post(createRecord)

router.route("/get-records").get(getRecords)

export default router;