const express = require('express')
var cors = require('cors')
const app = express()


app.use(cors())
app.get('/', function (req, res) {
    res.send('Hello World')
})
app.get('/sound/:name', function (req, res) {
    const {name}=req.params
    console.log(name)

    if(name=='dog'){
    res.json({'sound':'멍멍'})
    }
    else if(name=='cat'){
        res.json({'sound':'야옹'})
    }
    else if(name=='pig'){
        res.json({'sound':'꿀꿀'})
    }
    else{
        res.json({'sound':'알 수 없음'})
    }
})
app.get('/user/:id', function (req, res) {
    // const q = req.params
    // console.log(q)
    const q =req.query
    console.log(q.id)
    console.log(q.name)
    console.log(q.age)
    console.log(q)

    res.send({'userName':q.name})

})

app.listen(3000)

