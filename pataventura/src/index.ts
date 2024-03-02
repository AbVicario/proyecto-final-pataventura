import { AppDataSource } from "./data-source"
import "reflect-metadata"; 


AppDataSource.initialize().then(async () => {

}).catch(error => console.log(error))
