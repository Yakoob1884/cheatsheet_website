import express from 'express'
import { apiPage, frontpagePage, functionsPage, gitPage, loopsPage, serverPage, variablesPage, webPage, xssPage } from './templatingEngine/pages.js'
const app = express()

const PORT = 8080

app.use(express.static('public'))


//=================================
// Pages
//=================================

app.get('/', (req, res) => {
    res.send(frontpagePage)
})

app.get('/functions', (req, res) => {
    res.send(functionsPage)
})

app.get('/loops', (req, res) => {
    res.send(loopsPage)
})

app.get('/variables', (req, res) => {
    res.send(variablesPage)
})

app.get('/git', (req, res) => {
    res.send(gitPage)
})

app.get('/rest-api', (req, res) => {
    res.send(apiPage)
})

app.get('/servers', (req, res) => {
    res.send(serverPage)
})

app.get('/web-fundamentals', (req, res) => {
    res.send(webPage)
})

app.get('/xss', (req, res) => {
    res.send(xssPage)
})


app.listen(PORT, (error) =>{
    if(error){
        console.log(error)
        return
    }
    console.log("Server is running on port ", PORT)
})