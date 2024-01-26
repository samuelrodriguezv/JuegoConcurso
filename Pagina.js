const http = require('http')
const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

const dotenv = require('dotenv')
dotenv.config({path:'./env/env'})

app.set('view engine', 'ejs');
app.use(express.static('Imagenes'))

const connection = require('./database/db')

let premio = false;
let regla = false;
let cont;
let pregunta, opciona, opcionb, opcionc, opciond;
let marcada, acertado, corazon = false;
let comodin1, comodin2, comodin3, comodin4;
let letra1, letra2;
let mostrarOpciones = false;
let id;

app.get('/', (req, res) => {
    res.render('inicio',{
        alert: regla,
        alert2: premio
    })
})

app.get('/final', (req, res) => {
    res.render('final')
})

app.get('/reglas', (req, res) => {
    if(regla){
        regla = false;
    } else{
        regla = true;
    }
    res.render('inicio',{
        alert: regla,
        alert2: premio
    });
})

app.get('/premios', (req, res) => {
    if(premio){
        premio = false;
    } else{
        premio = true;
    }
    res.render('inicio',{
        alert: regla,
        alert2: premio
    });
})

app.get('/concurso', (req, res) => {
    cont = 1;
    corazon = false;
    comodin1 = false;
    comodin2 = false;
    comodin3 = true;
    comodin4 = false;
    letra1 = '';
    letra2 = '';
    mostrarOpciones = false;
    connection.query('select * from preguntasfaciles where dificultad = "1" order by rand() limit 1', (error, results)=>{
        if(error){
            throw error;
        } else {
            id = results[0].ID;
            console.log(results[0].ID, '-', results[0].Pregunta, '-',  results[0].Correcta)
            pregunta = results[0].Pregunta;
            opciona = results[0].OpcionA;
            opcionb = results[0].OpcionB;
            opcionc = results[0].OpcionC;
            opciond = results[0].OpcionD;
            correcta = results[0].Correcta;
            dificultad = results[0].dificultad;
            res.render('concurso',{
                alert: regla,
                alert2: premio,
                marcado1: null,
                marcado2: null,
                marcado3: null,
                marcado4: null,
                visible: "hidden",
                visible2: "hidden",
                pregunta: results[0].Pregunta,
                opcionA: results[0].OpcionA,
                opcionB: results[0].OpcionB,
                opcionC: results[0].OpcionC,
                opcionD: results[0].OpcionD,
                correcta: results[0].Correcta,
                dificultad: results[0].dificultad,
                cont: cont,
                mostrarCorrecta: null,
                mostrarIncorrecta: null,
                corazon: corazon,
                comodin1: comodin1,
                comodin2: comodin2,
                comodin3: comodin3,
                comodin4: comodin4,
                letra1: letra1,
                letra2: letra2,
                ganar: false,
                mostrarOpciones: mostrarOpciones
            })
        }
    })
    
})

app.get('/opcionA', (req, res)=>{
    marcada = "a";
    res.render('concurso', {
        alert: regla,
        alert2: premio,
        marcado1: "violet",
        marcado2: null,
        marcado3: null,
        marcado4: null,
        visible: "visible",
        visible2: "hidden",
        pregunta: pregunta,
        opcionA: opciona,
        opcionB: opcionb,
        opcionC: opcionc,
        opcionD: opciond,
        correcta: correcta,
        dificultad: dificultad,
        cont: cont,
        mostrarCorrecta: null,
        mostrarIncorrecta: null,
        corazon: corazon,
        comodin1: comodin1,
        comodin2: comodin2,
        comodin3: comodin3,
        comodin4: comodin4,
        letra1: letra1,
        letra2: letra2,
        ganar: false,
        mostrarOpciones: mostrarOpciones
    })
})

app.get('/opcionB', (req, res)=>{
    marcada = "b";
    res.render('concurso', {
        alert: regla,
        alert2: premio,
        marcado1: null,
        marcado2: "violet",
        marcado3: null,
        marcado4: null,
        visible: "visible",
        visible2: "hidden",
        pregunta: pregunta,
        opcionA: opciona,
        opcionB: opcionb,
        opcionC: opcionc,
        opcionD: opciond,
        correcta: correcta,
        dificultad: dificultad,
        cont: cont,
        mostrarCorrecta: null,
        mostrarIncorrecta: null,
        corazon: corazon,
        comodin1: comodin1,
        comodin2: comodin2,
        comodin3: comodin3,
        comodin4: comodin4,
        letra1: letra1,
        letra2: letra2,
        ganar: false,
        mostrarOpciones: mostrarOpciones
    })
})

app.get('/opcionC', (req, res)=>{
    marcada = "c";
    res.render('concurso', {
        alert: regla,
        alert2: premio,
        marcado1: null,
        marcado2: null,
        marcado3: "violet",
        marcado4: null,
        visible: "visible",
        visible2: "hidden",
        pregunta: pregunta,
        opcionA: opciona,
        opcionB: opcionb,
        opcionC: opcionc,
        opcionD: opciond,
        correcta: correcta,
        dificultad: dificultad,
        cont: cont,
        mostrarCorrecta: null,
        mostrarIncorrecta: null,
        corazon: corazon,
        comodin1: comodin1,
        comodin2: comodin2,
        comodin3: comodin3,
        comodin4: comodin4,
        letra1: letra1,
        letra2: letra2,
        ganar: false,
        mostrarOpciones: mostrarOpciones
    })
})

app.get('/opcionD', (req, res)=>{
    marcada = "d";
    res.render('concurso', {
        alert: regla,
        alert2: premio,
        marcado1: null,
        marcado2: null,
        marcado3: null,
        marcado4: "violet",
        visible: "visible",
        visible2: "hidden",
        pregunta: pregunta,
        opcionA: opciona,
        opcionB: opcionb,
        opcionC: opcionc,
        opcionD: opciond,
        correcta: correcta,
        dificultad: dificultad,
        cont: cont,
        mostrarCorrecta: null,
        mostrarIncorrecta: null,
        corazon: corazon,
        comodin1: comodin1,
        comodin2: comodin2,
        comodin3: comodin3,
        comodin4: comodin4,
        letra1: letra1,
        letra2: letra2,
        ganar: false,
        mostrarOpciones: mostrarOpciones
    })
})

app.get('/resolver', (req, res)=>{

    connection.query('delete from preguntasfaciles where id = '+ id, (error, results)=>{
        if(error){
            throw error;
        } else {
        }
        
        })

    if(marcada == correcta){
        acertado = true;
        res.render('concurso', {
            alert: regla,
            alert2: premio,
            marcado1: null,
            marcado2: null,
            marcado3: null,
            marcado4: null,
            visible: "visible",
            visible2: "visible",
            pregunta: pregunta,
            opcionA: opciona,
            opcionB: opcionb,
            opcionC: opcionc,
            opcionD: opciond,
            correcta: correcta,
            dificultad: dificultad,
            cont: cont,
            mostrarCorrecta: correcta,
            mostrarIncorrecta: null,
            corazon: corazon,
            comodin1: comodin1,
            comodin2: comodin2,
            comodin3: comodin3,
            comodin4: comodin4,
            letra1: letra1,
            letra2: letra2,
            ganar: true,
            mostrarOpciones: mostrarOpciones
        })

    } else {
        acertado = false;
        res.render('concurso', {
            alert: regla,
            alert2: premio,
            marcado1: null,
            marcado2: null,
            marcado3: null,
            marcado4: null,
            visible: "visible",
            visible2: "visible",
            pregunta: pregunta,
            opcionA: opciona,
            opcionB: opcionb,
            opcionC: opcionc,
            opcionD: opciond,
            correcta: correcta,
            dificultad: dificultad,
            cont: cont,
            mostrarCorrecta: correcta,
            mostrarIncorrecta: marcada,
            corazon: corazon,
            comodin1: comodin1,
            comodin2: comodin2,
            comodin3: comodin3,
            comodin4: comodin4,
            letra1: letra1,
            letra2: letra2,
            ganar: false,
            mostrarOpciones: mostrarOpciones
        })
    }
    
})

app.get('/siguiente', (req, res)=>{
    letra1 = ''
    letra2 = ''
    mostrarOpciones = false;
    if(acertado){
        cont = cont + 1;
    } else {
        cont = cont;
    }

    if(cont <= 5){

        connection.query('select * from preguntasfaciles where dificultad = "1" order by rand() limit 1', (error, results)=>{
            if(error){
                throw error;
            } else {
                id = results[0].ID;
                console.log(results[0].ID, '-', results[0].Pregunta, '-',  results[0].Correcta)
                pregunta = results[0].Pregunta;
                opciona = results[0].OpcionA;
                opcionb = results[0].OpcionB;
                opcionc = results[0].OpcionC;
                opciond = results[0].OpcionD;
                correcta = results[0].Correcta;
                dificultad = results[0].dificultad;
                res.render('concurso',{
                    alert: regla,
                    alert2: premio,
                    marcado1: null,
                    marcado2: null,
                    marcado3: null,
                    marcado4: null,
                    visible: "hidden",
                    visible2: "hidden",
                    pregunta: results[0].Pregunta,
                    opcionA: results[0].OpcionA,
                    opcionB: results[0].OpcionB,
                    opcionC: results[0].OpcionC,
                    opcionD: results[0].OpcionD,
                    correcta: results[0].Correcta,
                    dificultad: results[0].dificultad,
                    cont: cont,
                    mostrarCorrecta: null,
                    mostrarIncorrecta: null,
                    corazon: corazon,
                    comodin1: comodin1,
                    comodin2: comodin2,
                    comodin3: comodin3,
                    comodin4: comodin4,
                    letra1: letra1,
                    letra2: letra2,
                    ganar: false,
                    mostrarOpciones: mostrarOpciones
                })
            }
        })

    } else if (cont > 5 && cont <= 10){

        connection.query('select * from preguntasfaciles where dificultad = "2" order by rand() limit 1', (error, results)=>{
            if(error){
                throw error;
            } else {
                id = results[0].ID;
                console.log(results[0].ID, '-', results[0].Pregunta, '-',  results[0].Correcta)
                pregunta = results[0].Pregunta;
                opciona = results[0].OpcionA;
                opcionb = results[0].OpcionB;
                opcionc = results[0].OpcionC;
                opciond = results[0].OpcionD;
                correcta = results[0].Correcta;
                dificultad = results[0].dificultad;
                res.render('concurso',{
                    alert: regla,
                    alert2: premio,
                    marcado1: null,
                    marcado2: null,
                    marcado3: null,
                    marcado4: null,
                    visible: "hidden",
                    visible2: "hidden",
                    pregunta: results[0].Pregunta,
                    opcionA: results[0].OpcionA,
                    opcionB: results[0].OpcionB,
                    opcionC: results[0].OpcionC,
                    opcionD: results[0].OpcionD,
                    correcta: results[0].Correcta,
                    dificultad: results[0].dificultad,
                    cont: cont,
                    mostrarCorrecta: null,
                    mostrarIncorrecta: null,
                    corazon: corazon,
                    comodin1: comodin1,
                    comodin2: comodin2,
                    comodin3: comodin3,
                    comodin4: comodin4,
                    letra1: letra1,
                    letra2: letra2,
                    ganar: false,
                    mostrarOpciones: mostrarOpciones
                })
            }
        })

    } else if (cont > 10 && cont <= 15) {

        connection.query('select * from preguntasfaciles where dificultad = "3" order by rand() limit 1', (error, results)=>{
            if(error){
                throw error;
            } else {
                id = results[0].ID;
                console.log(results[0].ID, '-', results[0].Pregunta, '-',  results[0].Correcta)
                pregunta = results[0].Pregunta;
                opciona = results[0].OpcionA;
                opcionb = results[0].OpcionB;
                opcionc = results[0].OpcionC;
                opciond = results[0].OpcionD;
                correcta = results[0].Correcta;
                dificultad = results[0].dificultad;
                res.render('concurso',{
                    alert: regla,
                    alert2: premio,
                    marcado1: null,
                    marcado2: null,
                    marcado3: null,
                    marcado4: null,
                    visible: "hidden",
                    visible2: "hidden",
                    pregunta: results[0].Pregunta,
                    opcionA: results[0].OpcionA,
                    opcionB: results[0].OpcionB,
                    opcionC: results[0].OpcionC,
                    opcionD: results[0].OpcionD,
                    correcta: results[0].Correcta,
                    dificultad: results[0].dificultad,
                    cont: cont,
                    mostrarCorrecta: null,
                    mostrarIncorrecta: null,
                    corazon: corazon,
                    comodin1: comodin1,
                    comodin2: comodin2,
                    comodin3: comodin3,
                    comodin4: comodin4,
                    letra1: letra1,
                    letra2: letra2,
                    ganar: false,
                    mostrarOpciones: mostrarOpciones
                })
            }
        })

    }
    
})

app.get('/cambiar', (req, res)=>{
    mostrarOpciones = false;
    if(cont <= 5){

        connection.query('select * from preguntasfaciles where dificultad = "1" order by rand() limit 1', (error, results)=>{
            if(error){
                throw error;
            } else {
                id = results[0].ID;
                console.log(results[0].ID, '-', results[0].Pregunta, '-',  results[0].Correcta)
                pregunta = results[0].Pregunta;
                opciona = results[0].OpcionA;
                opcionb = results[0].OpcionB;
                opcionc = results[0].OpcionC;
                opciond = results[0].OpcionD;
                correcta = results[0].Correcta;
                dificultad = results[0].dificultad;
                res.render('concurso',{
                    alert: regla,
                    alert2: premio,
                    marcado1: null,
                    marcado2: null,
                    marcado3: null,
                    marcado4: null,
                    visible: "hidden",
                    visible2: "hidden",
                    pregunta: results[0].Pregunta,
                    opcionA: results[0].OpcionA,
                    opcionB: results[0].OpcionB,
                    opcionC: results[0].OpcionC,
                    opcionD: results[0].OpcionD,
                    correcta: results[0].Correcta,
                    dificultad: results[0].dificultad,
                    cont: cont,
                    mostrarCorrecta: null,
                    mostrarIncorrecta: null,
                    corazon: corazon,
                    comodin1: comodin1,
                    comodin2: comodin2,
                    comodin3: comodin3,
                    comodin4: comodin4,
                    letra1: letra1,
                    letra2: letra2,
                    ganar: false,
                    mostrarOpciones: mostrarOpciones
                })
            }
        })

    } else if (cont > 5 && cont <= 10){

        connection.query('select * from preguntasfaciles where dificultad = "2" order by rand() limit 1', (error, results)=>{
            if(error){
                throw error;
            } else {
                id = results[0].ID;
                console.log(results[0].ID, '-', results[0].Pregunta, '-',  results[0].Correcta)
                pregunta = results[0].Pregunta;
                opciona = results[0].OpcionA;
                opcionb = results[0].OpcionB;
                opcionc = results[0].OpcionC;
                opciond = results[0].OpcionD;
                correcta = results[0].Correcta;
                dificultad = results[0].dificultad;
                res.render('concurso',{
                    alert: regla,
                    alert2: premio,
                    marcado1: null,
                    marcado2: null,
                    marcado3: null,
                    marcado4: null,
                    visible: "hidden",
                    visible2: "hidden",
                    pregunta: results[0].Pregunta,
                    opcionA: results[0].OpcionA,
                    opcionB: results[0].OpcionB,
                    opcionC: results[0].OpcionC,
                    opcionD: results[0].OpcionD,
                    correcta: results[0].Correcta,
                    dificultad: results[0].dificultad,
                    cont: cont,
                    mostrarCorrecta: null,
                    mostrarIncorrecta: null,
                    corazon: corazon,
                    comodin1: comodin1,
                    comodin2: comodin2,
                    comodin3: comodin3,
                    comodin4: comodin4,
                    letra1: letra1,
                    letra2: letra2,
                    ganar: false,
                    mostrarOpciones: mostrarOpciones
                })
            }
        })

    } else if (cont > 10) {

        connection.query('select * from preguntasfaciles where dificultad = "3" order by rand() limit 1', (error, results)=>{
            if(error){
                throw error;
            } else {
                id = results[0].ID;
                console.log(results[0].ID, '-', results[0].Pregunta, '-',  results[0].Correcta)
                pregunta = results[0].Pregunta;
                opciona = results[0].OpcionA;
                opcionb = results[0].OpcionB;
                opcionc = results[0].OpcionC;
                opciond = results[0].OpcionD;
                correcta = results[0].Correcta;
                dificultad = results[0].dificultad;
                res.render('concurso',{
                    alert: regla,
                    alert2: premio,
                    marcado1: null,
                    marcado2: null,
                    marcado3: null,
                    marcado4: null,
                    visible: "hidden",
                    visible2: "hidden",
                    pregunta: results[0].Pregunta,
                    opcionA: results[0].OpcionA,
                    opcionB: results[0].OpcionB,
                    opcionC: results[0].OpcionC,
                    opcionD: results[0].OpcionD,
                    correcta: results[0].Correcta,
                    dificultad: results[0].dificultad,
                    cont: cont,
                    mostrarCorrecta: null,
                    mostrarIncorrecta: null,
                    corazon: corazon,
                    comodin1: comodin1,
                    comodin2: comodin2,
                    comodin3: comodin3,
                    comodin4: comodin4,
                    letra1: letra1,
                    letra2: letra2,
                    ganar: false,
                    mostrarOpciones: mostrarOpciones
                })
            }
        })

    }

    
})

app.get('/corazon', (req,res)=>{
    if(corazon){
        corazon = false;
    } else{
        corazon = true;
    }
    res.render('concurso',{
        alert: regla,
        alert2: premio,
        marcado1: null,
        marcado2: null,
        marcado3: null,
        marcado4: null,
        visible: "hidden",
        visible2: "hidden",
        pregunta: pregunta,
        opcionA: opciona,
        opcionB: opcionb,
        opcionC: opcionc,
        opcionD: opciond,
        correcta: correcta,
        dificultad: dificultad,
        cont: cont,
        mostrarCorrecta: null,
        mostrarIncorrecta: null,
        corazon: corazon,
        comodin1: comodin1,
        comodin2: comodin2,
        comodin3: comodin3,
        comodin4: comodin4,
        letra1: letra1,
        letra2: letra2,
        mostrarOpciones: mostrarOpciones
    })
})

app.get('/comodin1', (req,res)=>{
    if(comodin1){
        comodin1 = false;
    } else{
        comodin1 = true;
        
        const letras = 'abcd';
        let nuevoLetras = letras.replace(correcta, '');
        let contador = 0;
        letra1 = nuevoLetras[Math.floor(Math.random() * nuevoLetras.length)];
        nuevoLetras = nuevoLetras.replace(letra1, '');
        letra2 = nuevoLetras[Math.floor(Math.random() * nuevoLetras.length)];
        console.log(letra1, letra2);
        contador++;
    }

    res.render('concurso',{
        alert: regla,
        alert2: premio,
        marcado1: null,
        marcado2: null,
        marcado3: null,
        marcado4: null,
        visible: "hidden",
        visible2: "hidden",
        pregunta: pregunta,
        opcionA: opciona,
        opcionB: opcionb,
        opcionC: opcionc,
        opcionD: opciond,
        correcta: correcta,
        dificultad: dificultad,
        cont: cont,
        mostrarCorrecta: null,
        mostrarIncorrecta: null,
        corazon: corazon,
        comodin1: comodin1,
        comodin2: comodin2,
        comodin3: comodin3,
        comodin4: comodin4,
        letra1: letra1,
        letra2: letra2,
        ganar: false,
        mostrarOpciones: mostrarOpciones
    })
})

app.get('/comodin2', (req,res)=>{
    if(comodin2){
        comodin2 = false;
    } else{
        comodin2 = true;
    }
    res.render('concurso',{
        alert: regla,
        alert2: premio,
        marcado1: null,
        marcado2: null,
        marcado3: null,
        marcado4: null,
        visible: "hidden",
        visible2: "hidden",
        pregunta: pregunta,
        opcionA: opciona,
        opcionB: opcionb,
        opcionC: opcionc,
        opcionD: opciond,
        correcta: correcta,
        dificultad: dificultad,
        cont: cont,
        mostrarCorrecta: null,
        mostrarIncorrecta: null,
        corazon: corazon,
        comodin1: comodin1,
        comodin2: comodin2,
        comodin3: comodin3,
        comodin4: comodin4,
        letra1: letra1,
        letra2: letra2,
        ganar: false,
        mostrarOpciones: mostrarOpciones
    })
})

app.get('/comodin3', (req,res)=>{
    if(comodin3){
        comodin3 = false;
    } else{
        comodin3 = true;
    }
    res.render('concurso',{
        alert: regla,
        alert2: premio,
        marcado1: null,
        marcado2: null,
        marcado3: null,
        marcado4: null,
        visible: "hidden",
        visible2: "hidden",
        pregunta: pregunta,
        opcionA: opciona,
        opcionB: opcionb,
        opcionC: opcionc,
        opcionD: opciond,
        correcta: correcta,
        dificultad: dificultad,
        cont: cont,
        mostrarCorrecta: null,
        mostrarIncorrecta: null,
        corazon: corazon,
        comodin1: comodin1,
        comodin2: comodin2,
        comodin3: comodin3,
        comodin4: comodin4,
        letra1: letra1,
        letra2: letra2,
        ganar: false,
        mostrarOpciones: mostrarOpciones
    })
})

app.get('/comodin4', (req,res)=>{
    if(comodin4){
        comodin4 = false;
    } else{
        comodin4 = true;
    }
    res.render('concurso',{
        alert: regla,
        alert2: premio,
        marcado1: null,
        marcado2: null,
        marcado3: null,
        marcado4: null,
        visible: "hidden",
        visible2: "hidden",
        pregunta: pregunta,
        opcionA: opciona,
        opcionB: opcionb,
        opcionC: opcionc,
        opcionD: opciond,
        correcta: correcta,
        dificultad: dificultad,
        cont: cont,
        mostrarCorrecta: null,
        mostrarIncorrecta: null,
        corazon: corazon,
        comodin1: comodin1,
        comodin2: comodin2,
        comodin3: comodin3,
        comodin4: comodin4,
        letra1: letra1,
        letra2: letra2,
        ganar: false,
        mostrarOpciones: mostrarOpciones
    })
})

app.get('/mostrar', (req,res)=>{
    mostrarOpciones = true;
    res.render('concurso',{
        alert: regla,
        alert2: premio,
        marcado1: null,
        marcado2: null,
        marcado3: null,
        marcado4: null,
        visible: "hidden",
        visible2: "hidden",
        pregunta: pregunta,
        opcionA: opciona,
        opcionB: opcionb,
        opcionC: opcionc,
        opcionD: opciond,
        correcta: correcta,
        dificultad: dificultad,
        cont: cont,
        mostrarCorrecta: null,
        mostrarIncorrecta: null,
        corazon: corazon,
        comodin1: comodin1,
        comodin2: comodin2,
        comodin3: comodin3,
        comodin4: comodin4,
        letra1: letra1,
        letra2: letra2,
        ganar: false,
        mostrarOpciones: mostrarOpciones
    })
})

app.get('/concursoP', (req,res)=>{
    if(premio){
        premio = false;
    } else{
        premio = true;
    }
    res.render('concurso',{
        alert: regla,
        alert2: premio,
        marcado1: null,
        marcado2: null,
        marcado3: null,
        marcado4: null,
        visible: "hidden",
        visible2: "hidden",
        pregunta: pregunta,
        opcionA: opciona,
        opcionB: opcionb,
        opcionC: opcionc,
        opcionD: opciond,
        correcta: correcta,
        dificultad: dificultad,
        cont: cont,
        mostrarCorrecta: null,
        mostrarIncorrecta: null,
        corazon: corazon,
        comodin1: comodin1,
        comodin2: comodin2,
        comodin3: comodin3,
        comodin4: comodin4,
        letra1: letra1,
        letra2: letra2,
        ganar: false,
        mostrarOpciones: mostrarOpciones
    })
})


app.listen(3000, (req, res) => {
    console.log('Servidor funcionando')
})