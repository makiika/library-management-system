module.exports = (sequelize,DataTypes)=>{
    const Books = sequelize.define("Books",{
        bookName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        authorName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        bookEdition:{
            type:DataTypes.STRING,
            allowNull:false
        },
        totalCopies:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
        }        
    )
    Books.associate = (models)=>{
        Books.hasMany(models.BorrowedBooks,{
             onDelete:'cascade'
         })
     }
    return Books
}