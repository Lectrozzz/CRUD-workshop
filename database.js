import { Sequelize } from "sequelize"
let sequelize

// sequelize function: database, username, password
sequelize = new Sequelize("postgres","postgres","6431330821",{
   host: "127.0.0.1",
   port: 5432,
   dialect: "postgres",
   logging: false
})

sequelize
   .authenticate()
   .then(async ()=>{
       await sequelize.sync()
       console.log("Connection has been established successfully");
   })
   .catch((error)=>{
       console.error("Unable to connect database:",error)
   })

let db = {}

import UserModel from "./user.model.js"
import WarehouseModel from "./warehouse.model.js"

db.User = UserModel(sequelize, Sequelize)
// db.Warehouse = WarehouseModel(sequelize, Sequelize)

// Object.entries.(db).forEach(()=> {
    
// });

db.sequelize = sequelize
export default db