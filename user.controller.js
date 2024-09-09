import UserService from './user.service.js'

const UserController = {
    async createUser(req, res){
        const { name, email, phone } = req.body
        
        let result = await UserService.createNewUser({ name, email, phone })

        res.status(200).send(result)
    }
}

export default UserController