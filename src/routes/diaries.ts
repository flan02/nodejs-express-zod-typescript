import express from 'express' //? ESModules
const router = express.Router();

router.get('/', (_req, res) => {
    res.send('get all diaries')
})
router.post('/', (_req, res) => {
    res.send('post diary')
})

export default router;