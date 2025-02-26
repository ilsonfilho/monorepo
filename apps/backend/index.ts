import express from 'express'
import cors from 'cors'

const port = 3000
const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.json({
        status: true,
        message: 'API - 1.0.0',
        hora: new Date().toLocaleTimeString()
    })
})

app.listen(port, () => console.log(`Server running - ${port}`))