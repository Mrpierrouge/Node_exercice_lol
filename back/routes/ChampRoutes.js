import express from "express"
import { getAllChamps, getChamp, createChamp, deleteChamp, updateChamp } from '../controllers/ChampController.js'

const router = express.Router();

router.get('/', getAllChamps)
router.get('/:id', getChamp)
router.post('/', createChamp)
router.put('/:id', updateChamp)
router.delete('/:id', deleteChamp)

export default router
