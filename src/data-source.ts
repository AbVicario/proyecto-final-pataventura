import "reflect-metadata"
import { DataSource } from "typeorm"
import { Usuario } from "./entity/Usuario"
import { Administrador } from "./entity/Administrador"
import { Cliente } from "./entity/Cliente"
import { Valoracion } from "./entity/Valoracion"
import { Mascota } from "./entity/Mascota"
import { Contrato } from "./entity/Contrato"
import { Gato } from "./entity/Gato"
import { Perro } from "./entity/Perro"
import { Servicio } from "./entity/Servicio"
import { Guardian } from "./entity/Guardian"
import { Notificacion } from "./entity/Notificacion"
import { Paseador } from "./entity/Paseador"
import { Tutor } from "./entity/Tutor"
import { Ubicacion } from "./entity/Ubicacion"
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432 ,
    username: "postgres",
    password: "secret",
    database: "pataventura",
    synchronize: true,
    logging: false,
    entities: [Usuario, Administrador, Cliente, Valoracion, Mascota, Contrato, Gato, Perro, Servicio,
    Guardian, Notificacion, Paseador, Tutor , Ubicacion],
    migrations: [],
    subscribers: [],
});