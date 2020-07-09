const express = require('express');

const servidor = express();
let contador=0;
servidor.get('/', function(req, res){

    contador++;
    
    res.send('Hola visitante numero '+contador);

});

servidor.get('/usuario', function(req, res){
    
    res.send('esta pagina es de usuario');

});

servidor.listen(3000, function() {
    console.log('Estoy escuchando');
});
