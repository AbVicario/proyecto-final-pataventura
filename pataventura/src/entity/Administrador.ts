
import { Entity, PrimaryGeneratedColumn,} from "typeorm"
import { Usuario } from "./Usuario"

@Entity()
export class Administrador extends Usuario {
    
    @PrimaryGeneratedColumn()
    id_administrador: number
}