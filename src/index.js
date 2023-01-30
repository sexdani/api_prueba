const express = require('express');
const cors = require('cors');
const app = express();
const indexControllers = require('./controllers/index.controlles');

// Politcas CORS
app.use(cors());


//añadir nombre del puerto en este caso es el Fly ----- o el localthost
require('dotenv').config();

const port = process.env.PORT;
//middlewars
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//cors
app.use(cors({
    origin: true,
    methods: ['GET', 'POST']
}));


//Login and register
app.post('/register', indexControllers.setRegister);
app.post('/login', indexControllers.setLogin);

//router
app.use('/producto', require('./routers/index'));
app.use('/marca', require('./routers/indexM'));
app.use('/categoria', require('./routers/indexC'));
app.use('/usuario', require('./routers/indexU'));
app.use('/favoritos', require('./routers/indexF'));
app.use('/administracion', require('./routers/indexA'));

app.listen(port);
console.log('INICIO DE SERVER EXITOSO', port, '!!');