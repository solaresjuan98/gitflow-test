const { Router } = require('express')
const router = Router()


router.get('/', (req, res) => {
    res.json({
        msg: 'Hola Mundo 201800496- Haciendo bugfix'
    })
})

module.exports = router;