import mongoose from 'mongoose'; // Libreria para conectar con MongoDB
import express from 'express'; //Libreria para crear el servidor(es)
import cors from 'cors'; //Libreria para seguridad en el server
import dotenv from 'dotenv'; //Libreria para poder llamar mi archivo .env (variables de entorno)
import {test} from "./Backend/controlers/alumno.controler.js" //Importamos la funcion test del controlador de empleados para poder usarla en este archivo

dotenv.config();
mongoose.connect (process.env.url_bd)
.then( () => console.log("funciono la conexion a la base de datos")) //immprime en consola si todo salio bien
.catch(() => console.log("No jalo esta madre")) //imprime en consola si hubo un error en la conexion a la base de datos
//Creando un servidor local
const app = express(); //creamos una constante llamada app que va a ser igual a express, esto nos permite crear un servidor local
app.use(cors()); //se le da seguridad al servidor

app.listen(4000, () => console.log("Funciona el servidor")); //el servidor se va a ejecutar en el puerto 4000, y se imprime en consola que el servidor esta funcionando
test();
