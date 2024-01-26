const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'concurso'
});

connection.connect((error) => {
    if(error){
        console.log('El error de conexión es: ' + error);
        return;
    }
    console.log('Conectado a la base de datos.');
})
module.exports = connection;
