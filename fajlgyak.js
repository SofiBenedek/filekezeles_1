import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'


const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filePath = path.join(__dirname, 'datagyak1.json')
let data = [
    {name: 'Abel'}, {name: 'Bob'}, {name: 'Cedric'}
]

function fileiras(filename,datagyak1){
    const newfile= path.join(__dirname, `${filename}.json`)
    try {
        fs.writeFileSync(filePath, JSON.stringify(datagyak1))
    } catch(err) {
        console.log(err)
    }
}
function olvasas(filename,datagyak1){
    let content = ''
    let rdata
try {
    content = fs.readFileSync(filePath, 'utf8')
    readdata = JSON.parse(content)
    for (let i = 0; i < fs.length; i++) {
        console.log(fs[i])
        
    }
} catch(err) {
    console.log(err)
}
console.log(content)
console.log(readdata)

}

fileiras('sajatadat', data)