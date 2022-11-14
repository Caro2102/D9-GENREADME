// TODO: Crear una función que devuelva una credencial de licencia según la licencia en la que se pasa
// Si no hay licencia, devuelva una cadena vacía
function renderLicenseBadge(license) {
  if (license==="Apache"){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }else if (license==="Boost"){
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt";
  }else if (license==="Mozilla"){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0";
  }else if (license==="Eclipse"){
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
  }else if (license==="MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
}

// TODO: Crear una función que devuelva el enlace de licencia
// Si no hay licencia, devuelva una cadena vacía
function renderLicenseLink(license) {
  if (license==="Apache"){
    return "[link](https://opensource.org/licenses/Apache-2.0)";
  }else if (license==="Boost"){
    return "[link](https://www.boost.org/LICENSE_1_0.txt";
  }else if (license==="Mozilla"){
    return "[link](https://opensource.org/licenses/MPL-2.0";
  }else if (license==="Eclipse"){
    return "[link](https://opensource.org/licenses/EPL-1.0)";
  }else if (license==="MIT"){
    return "[link](https://opensource.org/licenses/MIT)";
  }else if (license===" "){
     return "";
  }
}

// TODO: Crear una función que devuelva la sección de licencia de README
// Si no hay licencia, devuelva una cadena vacía
function renderLicenseSection(license) {
  if(license){
    return `Este proyecto esta bajo la licencia de ${license}

  * Para obtener mas información sobre la licencia consulte el siguiente ${renderLicenseLink(license)}.`;
  }else {
    return "";
  }
}

// TODO: Crear una función para generar un markdown para README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
