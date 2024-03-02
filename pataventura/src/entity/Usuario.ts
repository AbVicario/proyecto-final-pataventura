import { IsEmail } from "class-validator"
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id_usuario: number

    @Column({nullable: false})
    @IsEmail()
    email: string

    @Column({nullable: false})
    password: string

}
