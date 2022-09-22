import express from 'express'
const router = express.Router()
import { getPeople, createPerson } from '../controllers/data.js'

router.get('/', getPeople)
router.post('/', createPerson)

export default router