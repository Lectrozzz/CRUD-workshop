export default (sequelize , Sequelize) => {
    const Warehouse = sequelize.define(
        "Warehouse",
        {
            warehouse_id: {
                type : Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: Sequelize.STRING,
                require: true
            },
            fixed_id:{
                type: Sequelize.STRING,
            },
        },
        {
            freezeTableName: true,
            underscored: true,
            timestamps: true
        }
    )
    Warehouse.association = (db) =>{
        db.user.hasMany(Warehouse, {
            foreignKey: 'user_id',
        })
        Warehouse.belongsTo(db.user,{
            foreignKey: 'user_id',
        })  
    }
 
    return Warehouse
 }
 