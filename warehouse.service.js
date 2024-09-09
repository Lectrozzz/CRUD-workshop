import { where } from "sequelize"
import db from "./database.js"

const warehouse = db.Warehouse

const WarehouseService = {
    createNewWarehouse(data){
        return warehouse.bulkCreate(data)
    },

    getAllWarehouse(search){
        let query = {}
        

        if (search && search!==''){

        }

        return warehouse.findAll({
            where
        })
    }
}

export default WarehouseService
