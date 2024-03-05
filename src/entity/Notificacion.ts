import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export class Notificacion {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    texto: string

    @Column()
    fecha: Date

    @Column()
    isLeido: boolean

}

