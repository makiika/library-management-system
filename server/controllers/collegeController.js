const {Colleges} = require('../models')

const getColleges = async(req,res)=>{
    try{
        await Colleges.findAll().then((colleges)=>{
            res.status(200).json(colleges)
        }) 
    }catch(error){
        console.log(error)
    }
}
const addCollege = async(req,res)=>{

    const college = req.body;
    try{
        await Colleges.create(college).then((colleges)=>{
            res.status(200).json("college added")
        })
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    getColleges,
    addCollege
}