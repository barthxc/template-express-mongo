import express from 'express';
const router = express.Router();
import { doSomething, respuestason } from './controllers/testController.js';


router.get('/',doSomething )
router.get('/respuestason',respuestason )

export default router;