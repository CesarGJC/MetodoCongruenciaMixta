function generarTabla() {
    //valores
    var numeroA = parseInt(document.getElementById("numeroA").value);
    var numeroXn = parseInt(document.getElementById("numeroXn").value);
    var numeroM = parseInt(document.getElementById("numeroM").value);
  
    //ref tabla
    var tabla = document.getElementById("tablaResultado");
  
    //limpiar la tabla
    tabla.innerHTML = "";
  
    //crear encabezados de la tabla
    var encabezado = tabla.createTHead();
    var filaEncabezado = encabezado.insertRow();
    var th1 = document.createElement("th");
    th1.innerHTML = "N";
    var th3 = document.createElement("th");
    th3.innerHTML = "Xn";
    var th4 = document.createElement("th");
    th4.innerHTML = "Xn+1";
    var th5 = document.createElement("th");
    th5.innerHTML = "#";
    filaEncabezado.appendChild(th1);
    filaEncabezado.appendChild(th3);
    filaEncabezado.appendChild(th4);
    filaEncabezado.appendChild(th5);
    //conjunto para rastrear los numeros
    var numerosUtilizados = new Set();
    //llenar la tabla
    for (var i = 0; i <= numeroM - 1; i++) {
      if (numerosUtilizados.has(numeroXn)) {
        alert("Numero Repetido");
        break;
      }
      var fila = tabla.insertRow();
      var celda1 = fila.insertCell();
      var celda3 = fila.insertCell();
      var celda4 = fila.insertCell();
      var celda5 = fila.insertCell();
  
      var Result = parseInt((numeroA * numeroXn) % numeroM);
  
      celda1.innerHTML = i;
      celda3.innerHTML = numeroXn;
      celda4.innerHTML = Result;
      celda5.innerHTML = Result / numeroM;
      //agregamos el numeroXn al conjunto
      numerosUtilizados.add(numeroXn);
      numeroXn = Result;
    }
  }