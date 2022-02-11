#! /usr/bin/env node
// 修改读写权限为 755: chmod 755 cli.js

const inquirer = require('inquirer')

inquirer.prompt([
  {
    type: 'input', //type： input, number, confirm, list, checkbox ... 
    name: 'name', // key 名
    message: 'Your name', // 提示信息
    default: 's-cli' // 默认值
  }
]).then(answers => {
  // 打印互用输入结果
  console.log(answers)
})