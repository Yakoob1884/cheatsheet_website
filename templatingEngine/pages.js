import { constructPage, readPage } from "./templatingEngine.js"

const frontpage = readPage('public/pages/index.html')
const functions = readPage('public/pages/functions-page.html')
const loops = readPage('public/pages/loops-page.html')
const variables = readPage('public/pages/variables-page.html')
const git = readPage('public/pages/git-page.html')
const api = readPage('public/pages/rest-api-page.html')
const server = readPage('public/pages/first-server-page.html')
const web = readPage('public/pages/web-fundamentals-page.html')
const xss = readPage('public/pages/xss-page.html')


export const frontpagePage = constructPage(frontpage)

export const functionsPage = constructPage(functions, {
    tabTitle: "Cheatsheet | Functions",
    navLink: `<nav> <a class="home-button" href="/">📝 cheatsheet</a> </nav>`
})

export const loopsPage = constructPage(loops, {
    tabTitle: "Cheatsheet | Loops",
     navLink: `<nav> <a class="home-button" href="/">📝 cheatsheet</a </nav>`
})

export const variablesPage = constructPage(variables, {
    tabTitle: "Cheatsheet | Variables",
    navLink: `<nav> <a class="home-button" href="/">📝 cheatsheet</a </nav>`
})

export const gitPage = constructPage(git, {
    tabTitle: "Cheatsheet | Git",
    navLink: `<nav> <a class="home-button" href="/">📝 cheatsheet</a </nav>`
})

export const apiPage = constructPage(api, {
    tabTitle: "Cheatsheet | REST API",
    navLink: `<nav> <a class="home-button" href="/">📝 cheatsheet</a </nav>`
})

export const serverPage = constructPage(server, {
    tabTitle: "Cheatsheet | Server",
    navLink: `<nav> <a class="home-button" href="/">📝 cheatsheet</a </nav>`
})

export const webPage = constructPage(web, {
    tabTitle: "Cheatsheet | Web",
    navLink: `<nav> <a class="home-button" href="/">📝 cheatsheet</a </nav>`
})

export const xssPage = constructPage(xss, {
    tabTitle: "Cheatsheet | XSS",
    navLink: `<nav> <a class="home-button" href="/">📝 cheatsheet</a </nav>`
})