const express = require('express'),
    cors = require('cors'),
    tripsCtrl = require('./controllers/tripsCtrl'),
    gradient = require('gradient-string');

    const app = express();

app.use(cors());    
app.use(express.json());

const PORT = 7777

//ENDPOINTS

// app.get('/api/pokemon', pokeCtrol.getAllPokemon);    EXAMPLE CODE

app.get('/api/  ')      
app.post('/api/ ')
app.put('/api/  ')
app.delete('/api/   ')




app.listen(PORT, () => console.log(gradient.pastel(`Ready for takeoff on runway ${PORT}`)))