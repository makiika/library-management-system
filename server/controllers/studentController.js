const {Students,Books} = require('../models')

const registerStudent = async(req,res)=>{
    
    const student = req.body;
    try{
        await Students.create(student).then((student)=>{
            res.status(200).json('student infromations added sucessfully')
        })
    }catch(error){
        console.log(error)
    }
}

const getStudents = async(req,res)=>{
    await Students.findAll().then((students)=>{
        res.status(200).json(students)
    }).catch((error)=>{console.log(error)})
}

module.exports = {
    registerStudent,
    getStudents
}