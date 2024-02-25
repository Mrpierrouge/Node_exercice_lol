import express from "express";
import Champs from "./routes/ChampRoutes.js"

const router = express.Router();

router.use('/champs', Champs)

export default router