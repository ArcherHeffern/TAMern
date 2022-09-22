const express = require('express')
const router = express.Router()
import { getPeople, createPerson } from '../controllers/data'

router.get('/', getPeople)
router.post('/', createPerson)

modules