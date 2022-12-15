const { readAppointment, recordAppointment } = require('./operaciones.js')
const arguments = process.argv.slice(2)
const fileName = 'appointment.json'
const operation = arguments[0]
const animal_name = arguments[1]
const years_old = arguments[2]
const animal_kind = arguments[3]
const animal_color = arguments[4]
const disease = arguments[5]
const content = [
{
    animal_name,
    years_old,
    animal_kind,
    animal_color,
    disease
}
]
if (operation=='register'){
    recordAppointment(fileName,content)
}
else if (operation=='read'){
    readAppointment(fileName)
}