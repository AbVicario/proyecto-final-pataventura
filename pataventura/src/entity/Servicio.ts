import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @ManyToMany(() => Paseador, paseador => paseador.servicios, {nullable: true} )
    @JoinTable()
    paseador: Paseador;

    @ManyToMany(() => Guardian, guardian => guardian.servicios, {nullable:true} )
    @JoinTable()
    guardian: Guardian;

    @ManyToOne(() => Mascota, mascota => mascota.servicios)
    mascota: Mascota;
}