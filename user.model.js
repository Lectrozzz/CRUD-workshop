export default (sequelize , Sequelize) => {
    const User = sequelize.define(
        "users",
        {
            user_id: {
                type : Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: Sequelize.STRING,
                require: true
            },
            email:{
                type: Sequelize.STRING,
                require: true
            },
            phone:{
                type: Sequelize.STRING,
                require: true
            },
        },
        {
            freezeTableName: true,
            underscored: true,
            timestamps: true
        }
    )
 
    return User
 }
 