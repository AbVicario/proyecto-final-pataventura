import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./Cliente";
import { Servicio } from "./Servicio";
import { Ubicacion } from "./Ubicacion";

@Entity()
export class Guardian extends Cliente{

    @PrimaryGeneratedColumn()
    idGuardian:number

    @Column()
    precioDia : number

    @OneToMany(() => Servicio, servicio => servicio.guardian)
    servicios: Servicio[];

    @OneToMany(() => Ubicacion, ubicacion => ubicacion.guardian)
    direccion:Ubicacion[]

}