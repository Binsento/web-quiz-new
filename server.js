const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.static(path.join(__dirname, 'app/build')));

let dataDir = path.join(__dirname, 'quizzes')

app.get('/api/types', (req, res) => {
    let cache = new Set()
    fs.readdir(dataDir, (err, data) => {
        if (err) throw err
        var promises = []
        data.forEach((item) => {
            promises.push(new Promise((resolve) => {
                let file = path.join(dataDir, item)
                fs.readFile(file, 'utf8', (err, data) => {
                    if (err) throw err;
                    let testInfo = JSON.parse(data)
                    cache.add(testInfo.type || 'Не указан')
                    resolve()
                })
            }))
        })
        Promise.all(promises).then(() => res.send({data: Array.from(cache)}))
    })
})

app.get('/api/tests', (req, res) => {
    let cache = new Map()
    fs.readdir(dataDir, (err, data) => {
        if (err) throw err
        var promises = []
        data.forEach((item) => {
            promises.push(new Promise((resolve) => {
                let file = path.join(dataDir, item)
                fs.readFile(file, 'utf8', (err, data) => {
                    if (err) throw err;
                    let testInfo = JSON.parse(data)
                    cache.set(`${path.basename(file, '.json')}`, testInfo)
                    resolve()
                })
            }))
        })
        Promise.all(promises).then(() => res.send({data: Array.from(cache)}))
    })
})



app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/app/build/index.html'))
    })

app.listen(process.env.PORT || 8080)