// TODO: Crear una función que devuelva una credencial de licencia según la licencia en la que se pasa
// Si no hay licencia, devuelva una cadena vacía
function renderLicenseBadge(license) {
  if (license==="Apache"){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }else if (license==="Boost"){
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  }else if (license==="Mozilla"){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
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
    return "[link](https://www.boost.org/LICENSE_1_0.txt)";
  }else if (license==="Mozilla"){
    return "[link](https://opensource.org/licenses/MPL-2.0)";
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
  const renderBadge=renderLicenseBadge(data.license);
  const renderSection=renderLicenseSection(data.license);
  return `

  # ${data.title} ${renderBadge}
  ${data.description}
  
---
  ## Contents
  1. [Instalación](#instalación)
  2. [Uso](#uso)
  3. [Licencia](#licencia)
  4. [Contribución](#contribución)
  5. [Tests](#tests)
  6. [Preguntas](#preguntas)
  
---
  ## Instalación
${data.installation}

URL para clonar repositorio:

    ${data.repo}

---
  ## Uso
${data.use}

---
  ## Licencia
${renderSection}

---
  ## Contribución:
    
  Para contribuir con este proyecto:
- Fork del repositorio.
- Clonar el  repositorio.
- Actualizar la rama master.

        $git pull -r upstream master
- Crear rama.

        $ git checkout -b feature-nombre-rama
- Realizar cambios, agregarlos, hacer commit y despues hacer push hacia nuestro repositorio indicando la rama que hemos creado.

        $ git push origin feature-nombre-rama
- Hacer un Pull Request.
- Esperar que el codigo se acepte y se haga merge.

---
  ## Tests
${data.test}

---
  ## Preguntas
  * [GitHub profile](https://github.com/${data.user})
  * Email: ${data.email} - Mandar correo electronico para una pronta respuesta.

`;
}

module.exports = {generateMarkdown};
