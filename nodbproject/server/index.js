const express = require('express'),
    cors = require('cors'),
    tripsCtrl = require('./controllers/tripsCtrl'),
    gradient = require('gradient-string');

    const app = express();

app.use(cors());    
app.use(express.json());

const PORT = 7777

app.listen(PORT, () => console.log(gradient.rainbow(`Ready for takeoff on runway ${PORT}`)))