import { Entity, Column, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm"
import { Usuario } from "./Usuario"
import { IsNotEmpty, Matches } from "class-validator"
import { Ubicacion } from "./Ubicacion"

@Entity()
export class Cliente extends Usuario {

    @PrimaryGeneratedColumn()
    id_cliente: number

    @Column({nullable: false})
    @IsNotEmpty({ message: 'El teléfono no puede estar en blanco' })
    telefono: string

    @Column({nullable: true})
    nombre: string

    @Column()
    apellido: string
    
    @Column()
    imagen: string

    @Column({unique: true})
    @IsNotEmpty({ message: 'El alias no puede estar en blanco' })
    alias: string

    @OneToMany(() => Ubicacion, ubicacion => ubicacion.cliente, {nullable: false})
    direccion:Ubicacion[]
    
}