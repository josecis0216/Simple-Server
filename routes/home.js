const express = require('express')

const router = express.Router()

router.get('/api', (req, res, next) => {
    res.json(
        {
            status: 'ok',
            ozzy: 'here',
            malone: 'all tatooed up'
        }
    )
})

router.get('/', (req, res, next) => {
    // console.log('in another the middleware!')
    res.send('<h1>Hello from express</h1>')
    // res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

module.exports = router