import express from 'express'
import path from 'path'
const app = express()

const PORT = 8080
console.log(path.resolve())

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/homepage/index.html'))
})

app.get('/functions', (req, res) => {
    res.sendFile(path.resolve('public/functions/functions-page.html'))
})


app.get('/Loops', (req, res) => {
    res.sendFile(path.resolve('public/loops/loops-page.html'))
})

app.get('/Variables', (req, res) => {
    res.sendFile(path.resolve('public/variables/variables-page.html'))
})



app.listen(PORT, (error) =>{
    if(error){
        console.log(error)
        return
    }
    console.log("Server is running on port ", PORT)
})