module.exports = (sequelize,DataTypes)=>{
    const Colleges = sequelize.define("Colleges",{
        college:{
            type:DataTypes.STRING,
            allowNull:false
        }
        }     
    )
    return Colleges
}