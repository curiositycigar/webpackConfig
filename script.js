/**
 * Created by YOU on 2018/6/11.
 */
const fs =require('fs')

let dir = fs.readdirSync('./src')

console.log(dir)
console.log(dir.indexOf('main.js'))
console.log(dir.indexOf('testfile'))