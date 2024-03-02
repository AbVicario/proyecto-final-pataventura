import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Paseador } from "./Paseador";
import { Guardian } from "./Guardian";

@Entity()
export class Ubicacion{

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    longitud: number

    @Column()
    latidud: number

    @ManyToOne(() => Paseador, paseador => paseador.direccion)
    paseador: Paseador

    @ManyToOne(() => Guardian, guardian => guardian.direccion)
    guardian: Guardian
}