"use strict";

fetch("/apartments.xml")
  .then((resp) => {
    return resp.text();
  })
  .then((data) => {
    const parser = new DOMParser(),
      xmlDoc = parser.parseFromString(data, "text/xml");
    const apartments = xmlDoc.querySelectorAll("Departamento");

    // Obtener el contenedor de la tabla
    const tablaContainer = document.getElementById("tabla-container");

    // Crear la tabla
    const tabla = document.createElement("table");

    // Crear la fila de encabezado
    const header = document.createElement("tr");

    // Crear las celdas de encabezado
    const arrendatario = document.createElement("th");
    arrendatario.textContent = "Arrendatario";
    const arrendador = document.createElement("th");
    arrendador.textContent = "Arrendador";
    const numContact = document.createElement("th");
    numContact.textContent = "Número de contacto";
    const email = document.createElement("th");
    email.textContent = "Email";
    const province = document.createElement("th");
    province.textContent = "Provincia";

    tabla.appendChild(arrendatario);
    tabla.appendChild(arrendador);
    tabla.appendChild(numContact);
    tabla.appendChild(email);
    tabla.appendChild(province);
    
    for (const apartment of apartments) {
      const fila = document.createElement("tr");

      let arrendatario =
        apartment.getElementsByTagName("Arrendatario")[0].textContent;
      const arrendatarioText = `${arrendatario} \n`;

      let arrendatarioCell = document.createElement("td");
      arrendatarioCell.textContent = arrendatarioText;
      fila.appendChild(arrendatarioCell);

      const arrendador =
        apartment.getElementsByTagName("Arrendador")[0].textContent;
      const arrendadorText = `${arrendador} \n`;

      let arrendadorCell = document.createElement("td");
      arrendadorCell.textContent = arrendadorText;
      fila.appendChild(arrendadorCell);

      const num = apartment.getElementsByTagName("ContactNo")[0].textContent;
      const numText = `${num} \n`;

      let numCell = document.createElement("td");
      numCell.textContent = numText;
      fila.appendChild(numCell);

      const email =
        apartment.getElementsByTagName("Email-Arrendatario")[0].textContent;
      const emailText = `${email} \n`;

      let emailCell = document.createElement("td");
      emailCell.textContent = emailText;
      fila.appendChild(emailCell);

      const adress = apartment.getElementsByTagName("Provincia")[0].textContent;
      const adressText = `${adress} \n`;

      let adressCell = document.createElement("td");
      adressCell.textContent = adressText;
      fila.appendChild(adressCell);

      tabla.appendChild(fila);
    }
    tablaContainer.appendChild(tabla);
  });
