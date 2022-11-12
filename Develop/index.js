// TODO: Incluir los paquetes necesarios para esta aplicación
const inquirer = require('inquirer');
const fs=require('fs');
const {generateMarkdown}=require('./utils/generateMarkdown');
// TODO: Crear una serie de preguntas para la entrada de usuario
const questions = [
    {
        type: 'input',
        message: '¿Cuál es el titulo de su proyecto?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Ingrese una breve descripcion de su proyecto',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Ingrese el URL para clonar su repositorio',
        name: 'repo',
      },
      {
        type: 'input',
        message: '¿Cuáles son los pasos necesarios para instalar su proyecto?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Proporcione instrucciones de uso de su proyecto',
        name: 'use',
      },
      {
        type: 'input',
        message: 'Escriba pruebas para su aplicacion y ejemplos sobre como ejecutarlas',
        name: 'test',
      },
      {
        type: 'input',
        message: 'Ingrese su usuario de Github',
        name: 'user',
      },
      {
        type: 'input',
        message: 'Ingrese su direccion de correo electronico',
        name: 'email',
      },
      {
        type: 'list',
        message: 'Seleccione la licencia que uso para este proyecto',
        name: 'license',
        choices:['Apache', 'Boost', 'Mozilla', 'Eclipse', 'MIT'],
      },
];

// TODO: Crear una función para escribir el archivo README
function writeToFile(fileName, data) {}
function writeToFile(fileName, data) {
    fs.appendFile(fileName,data,(err)=>{
      err?console.error(err) : console.log('Success!');
    });
  }
// TODO: Crear una función para inicializar la aplicación
function init() {
    inquirer.prompt(questions).then((response) =>{
        console.log('Answers:', response);
        writeToFile('README.md', generateMarkdown(response));
  }
  );
}

// Llamada de función para inicializar la aplicación
init();
