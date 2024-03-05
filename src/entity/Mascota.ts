import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { Tutor } from "./Tutor"
import { Servicio } from "./Servicio"



@Entity()
export class Mascota {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    edad: number
    
    @Column()
    imagen: string

    @Column()
    tamanyo: number

    @Column()
    peso: number

    @Column()
    tipo: string

    @Column()
    observacion: string

    @ManyToOne( () => Tutor, tutor => tutor.mascotas)
    tutor: Tutor;

    @OneToMany(() => Servicio, servicio => servicio.mascota)
    servicios: Servicio[];
}