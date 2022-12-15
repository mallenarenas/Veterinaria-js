const fs = require('fs')
 const readAppointment = (nameFile)=>{
    const content = fs.readFileSync(nameFile, 'utf8',function (err){
        if (err){
            console.log(err)
        }
        else{
            console.log('File readed')
        }        
    })
    const contentJson = JSON.parse(content)
    console.log(contentJson)

}
const recordAppointment = (nameFile, addContent) =>{
    const oldContent = fs.readFileSync(nameFile, 'utf8')
    const newContent = JSON.parse(oldContent).concat(addContent)
    fs.writeFileSync(nameFile, JSON.stringify(newContent), function (err){
        if (err){
            console.log(err)
        }
        else{
            console.log('Apointment added')
        }   
    })
}
module.exports = { readAppointment, recordAppointment } 