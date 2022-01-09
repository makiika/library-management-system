module.exports = (sequelize,DataTypes)=>{
    
    const Students = sequelize.define("Students",{
      
        studentName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        personalNumber:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        college:{
            type:DataTypes.STRING,
            allowNull:false
        },

        email:{
            type:DataTypes.STRING,
            allowNull:false
        }     
    });
    Students.associate = (models)=>{
        Students.hasMany(models.BorrowedBooks,{
             onDelete:'cascade'
         })
     }
   
     
    return Students
}