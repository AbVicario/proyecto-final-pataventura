import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./Cliente";
import { Servicio } from "./Servicio";

@Entity()
export class Paseador extends Cliente{

    @PrimaryGeneratedColumn()
    idPaseador:number

    @Column()
    preicioHora:number

    @ManyToMany(() => Servicio, servicio => servicio.paseador)
    @JoinTable()
    servicios: Servicio[];

    
} 