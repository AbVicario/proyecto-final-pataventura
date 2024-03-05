
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Valoracion{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    puntuacion: number

    @Column()
    descripcion: string
}