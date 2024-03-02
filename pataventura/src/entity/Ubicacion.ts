import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Paseador } from "./Paseador";
import { Guardian } from "./Guardian";
import { Cliente } from "./Cliente";

@Entity()
export class Ubicacion{

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    longitud: number

    @Column()
    latidud: number

    @ManyToOne(() => Cliente, cliente => cliente.direccion)
    cliente: Cliente
}