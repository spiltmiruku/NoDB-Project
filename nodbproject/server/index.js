const express = require('express'),
    cors = require('cors'),
    tripsCtrl = require('./controllers/tripsCtrl'),
    gradient = require('gradient-string');

    const app = express();

app.use(cors());    
app.use(express.json());

const PORT = 7777

//ENDPOINTS

app.get('/api/flights', tripsCtrl.getFlights)      
app.post('/api/flights', tripsCtrl.add)
app.put('/api/flights/:id', tripsCtrl.edit)
app.delete('/api/flights/:id', tripsCtrl.delete)


app.listen(PORT, () => console.log(gradient.pastel(`Ready for takeoff on runway ${PORT}`)))