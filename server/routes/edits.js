import express from "express";
import {
   UpdatePersonalInfo
} from "../controllers/edits.js";
import { verifyToken } from "../middleware/auth.js";


const router = express.Router();

router.post("/editing/:id", verifyToken, UpdatePersonalInfo);

export default router;

//, verifyToken