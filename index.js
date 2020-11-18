// Import modules
const express = require('express')
const axios = require('axios')

// Initiate modules
const app = express()

// Create port
const PORT = process.env.PORT || 3000

// Create routes
app.get('/', (req, res) => {
    // Starting message (MUST COMMENT OUT to avoid conflict below)
    // res.send('GitHub API Express Page')
    // OLD METHOD
    // fetch('api endpoint')
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data)
    // })
    // ALTERNATIVE: CREATE FUNCTION 
    // [WHAT AXIOS DOES UNDER THE HOOD]
    // function myAxios(apiEndpoint) {
    //     fetch(apiEndpoint)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //     })
    // }
    // NEW METHOD
    axios
        // Access API endpoint from GitHub
        .get('https://api.github.com/users/jtreeves')
        .then(response => {
            // Print response data in terminal
            // console.log(response.data)
            // Create object based on previous response data
            const jacksonObject = {
                login: response.data.login,
                url: response.data.html_url,
                name: response.data.name
            }
            // Print new object in terminal
            console.log(jacksonObject)
            // Print new object on website
            res.send(jacksonObject)
        })
})

app.get('/nitish', (req, res) => {
    axios
        .get('https://api.github.com/users/nitishdayal')
        .then(response => {
            const nitishObject = {
                login: response.data.login,
                url: response.data.html_url,
                name: response.data.name
            }
            res.send(nitishObject)
        })
})

app.get('/alan', (req, res) => {
    axios
        .get('https://api.github.com/users/delayedaa')
        .then(response => {
            const alanObject = {
                login: response.data.login,
                url: response.data.html_url,
                name: response.data.name
            }
            res.send(alanObject)
        })
})

app.get('/jeremy', (req, res) => {
    axios
        .get('https://api.github.com/users/JJURIZ')
        .then(response => {
            const jeremyObject = {
                login: response.data.login,
                url: response.data.html_url,
                name: response.data.name
            }
            res.send(jeremyObject)
        })
})

app.get('/angel', (req, res) => {
    axios
        .get('https://api.github.com/users/ABarranco95')
        .then(response => {
            const angelObject = {
                login: response.data.login,
                url: response.data.html_url,
                name: response.data.name
            }
            res.send(angelObject)
        })
})

app.get('/nicole', (req, res) => {
    axios
        .get('https://api.github.com/users/NikkiHmltn')
        .then(response => {
            const nicoleObject = {
                login: response.data.login,
                url: response.data.html_url,
                name: response.data.name
            }
            res.send(nicoleObject)
        })
})

app.get('/jenny', (req, res) => {
    axios
        .get('https://api.github.com/users/ruvvet')
        .then(response => {
            const jennyObject = {
                login: response.data.login,
                url: response.data.html_url,
                name: response.data.name
            }
            res.send(jennyObject)
        })
})

// Listen
app.listen(PORT, () => {
    console.log(`You're vibing to the sounds on PORT ${PORT}`)
})