import db from "./database.js"

const user = db.User

const UserService = {
    createNewUser({ name, email, phone }){
        return user.create({
            name,
            email,
            phone
        })
    }
}

export default UserService