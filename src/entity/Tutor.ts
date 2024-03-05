import { Entity, PrimaryGeneratedColumn, Column , OneToMany, JoinColumn} from "typeorm"
import { Cliente } from "./Cliente";
import { Mascota } from "./Mascota";


@Entity()
export class Tutor extends Cliente {
    @PrimaryGeneratedColumn()
    idTutor:number

    @OneToMany(() => Mascota, mascota => mascota.tutor)
    mascotas: Mascota[]
}