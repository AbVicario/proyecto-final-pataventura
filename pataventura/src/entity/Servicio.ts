import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Paseador } from "./Paseador";
import { Mascota } from "./Mascota";
import { Guardian } from "./Guardian";


@Entity()
export class Servicio{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    fechaInicio: Date

    @Column()
    fechaFin: Date

    @Column()
    precio: number

    @Column()
    descripcion: string

    @Column()
    estado: string

    @ManyToOne(() => Paseador, paseador => paseador.servicios, {nullable: true} )
    paseador: Paseador;

    @ManyToOne(() => Guardian, guardian => guardian.servicios, {nullable:true} )
    guardian: Guardian;

    @ManyToOne(() => Mascota, mascota => mascota.servicios)
    mascota: Mascota;
}