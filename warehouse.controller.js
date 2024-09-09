import WareHouseService from './warehouse.service.js'

const wareHouseController = {
    async createWareHouse(req,res){
        try{
            const {name, fixed_id, user_id} = req.body

            let result = await WareHouseService.createNewWarehouse([{name, fixed_id, user_id}])
        }
        catch(err){
            console.log(err)
            res.status(500).send(err.message ?? err)
        }
    }
}

export default wareHouseController