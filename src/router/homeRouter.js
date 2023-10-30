import express from 'express'
const router = express.Router()


import emailController from '../controller/emailController.js'

router.get('/',emailController.email)
router.post('/',emailController.openEmailPost)


export default router;