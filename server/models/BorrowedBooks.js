module.exports = (sequelize,DataTypes)=>{
    const BorrowedBooks = sequelize.define("BorrowedBooks",{
        returnDate:{
            type:DataTypes.STRING,
            allowNull:false
        },
        returned:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        },
        }        
    )
    BorrowedBooks.associate = (models)=>{
        BorrowedBooks.belongsTo(models.Books,{
            foreignKey:{
                allowNull:false 
            }
         })
     }

     BorrowedBooks.associate = (models)=>{
        BorrowedBooks.belongsTo(models.Students,{
            foreignKey:{
                allowNull:false
            }
         })
     }
    return BorrowedBooks
}