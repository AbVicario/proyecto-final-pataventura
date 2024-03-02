import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./Cliente";
import { Servicio } from "./Servicio";
import { Ubicacion } from "./Ubicacion";

@Entity()
export class Paseador extends Cliente{

    @PrimaryGeneratedColumn()
    idPaseador:number

    @Column()
    preicioHora:number

    @OneToMany(() => Servicio, servicio => servicio.paseador)
    servicios: Servicio[];

    @OneToMany(() => Ubicacion, ubicacion => ubicacion.paseador, {nullable: false})
    direccion:Ubicacion[]
    
} 