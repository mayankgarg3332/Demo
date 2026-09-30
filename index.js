const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const roleManagement = require('./routes/roleManagement')

const app = express();

app.use(cors())
app.use(express.json())

app.use('/api/roles', roleManagement);

app.use((req, res) => res.status(404).json({message: 'Route not found'}))

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})


mongoose.connect(process.env.DB_URL).then(() => {
    console.log("Connected to Mongo")
    app.listen(process.env.PORT, () => {
        console.log("Server is running")
    })
}).catch(err => {
    console.log("Error while connecting to mongo:", err)
})