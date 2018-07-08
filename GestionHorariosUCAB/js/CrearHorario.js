var MateriaActual = [];
var materiaInvolucradaEnConflicto;
var materiaNuevaEnConflicto;
var id=0;


function elegirSemestre(semestre){
  
  document.getElementById("materia").innerHTML = ""; 
  document.getElementById("profesor").innerHTML = "";
  document.getElementById("seccion").innerHTML = "";
  document.getElementById("hora").innerHTML = "";
  var materiaSemestre = [];
  switch (semestre) {    
    case "Primero": { 
          cargarMaterias(materiaSemestre,"01SE");          
          console.log(materiaSemestre);
          break;}
    case "Segundo":{ 
          cargarMaterias(materiaSemestre,"02SE");          
          console.log(materiaSemestre);
          break;}
    case "Tercero":{ 
          cargarMaterias(materiaSemestre,"03SE");          
          console.log(materiaSemestre);
          break;}
    case "Cuarto":{ 
          cargarMaterias(materiaSemestre,"04SE");          
          console.log(materiaSemestre);
          break;}
    case "Quinto":{ 
          cargarMaterias(materiaSemestre,"05SE");          
          console.log(materiaSemestre);
          break;}
    case "Sexto":{ 
          cargarMaterias(materiaSemestre,"06SE");          
          console.log(materiaSemestre);
          break;}
    case "Septimo":{ 
          cargarMaterias(materiaSemestre,"07SE");          
          console.log(materiaSemestre);
          break;}
    case "Octavo":{ 
          cargarMaterias(materiaSemestre,"08SE");          
          console.log(materiaSemestre);
          break;}
    case "Noveno":{ 
          cargarMaterias(materiaSemestre,"09SE");          
          console.log(materiaSemestre);
          break;}
    case "Decimo":{ 
          cargarMaterias(materiaSemestre,"10SE");          
          console.log(materiaSemestre);
          break;}
    default: $("#materia").append('<option class="ElementoListado" selected="selected">Materia</option>');
      break;
  }
  for(var numeMateria = 0; numeMateria < materiaSemestre.length;numeMateria++)
    $("#materia").append('<option class="ElementoListado" selected="selected">'+materiaSemestre[numeMateria]+'</option>');

    $("#materia").append('<option class="ElementoListado" selected="selected">Materia</option>');
    $("#profesor").append('<option class="ElementoListado" selected="selected">Profesor</option>');  
    $("#seccion").append('<option class="ElementoListado" selected="selected">Sección</option>');
    $("#hora").append('<label style="margin-left: 20px" id="labels">Horas:</label>');
     
  console.log(informatica.length);
  console.log(informatica.length);
}
function cargarMaterias(materiaSemestre,numeroSemestre){
  for(var i = 0; i < informatica.length; i++){
    if(informatica[i].semester === numeroSemestre){         
      var materiaEncontrada = informatica[i].subject;
      if(materiaSemestre.length == 0){
        materiaSemestre.push(materiaEncontrada);
      }else{
        var numeroDeMAterias = 0;
        for(var j = 0; j < materiaSemestre.length; j++){         
          if(materiaEncontrada === materiaSemestre[j]){
            continue;
          }else{
            numeroDeMAterias++;
          }
        }
        if(numeroDeMAterias >= materiaSemestre.length){
          materiaSemestre.push(materiaEncontrada);
        }
      }             
    }            
  }  
}


function seleccionDeMateria(nombreMateria){
  var profesores = [];
  document.getElementById("profesor").innerHTML = ""; 
  document.getElementById("seccion").innerHTML = "";
  document.getElementById("hora").innerHTML = "";
  
  cargarProfesores(profesores,nombreMateria);
  
  for(var i = 0; i < profesores.length; i++){
    if(profesores[i] === "Por Asignar"){     
      continue;
    }else{
      $("#profesor").append('<option class="ElementoListado" selected="selected">'+profesores[i]+'</option>');  
    }
  }
  $("#profesor").append('<option class="ElementoListado" selected="selected">Profesor</option>'); 
  $("#seccion").append('<option class="ElementoListado" selected="selected">Sección</option>');  
  $("#hora").append('<label style="margin-left: 20px" id="labels">Horas:</label>'); 
}
function cargarProfesores(profesores,materia){
  
  for(var i = 0; i < informatica.length; i++){
    if(informatica[i].subject === materia){         
      var profesorEncontrado = informatica[i].professor;
      if(profesores.length == 0){
       profesores.push(profesorEncontrado);
      }else{
        var numeroDeProfesor= 0;
        for(var j = 0; j < profesores.length; j++){         
          if(profesorEncontrado ===  profesores[j]){
            continue;
          }else{
            numeroDeProfesor++;
          }
        }
        if(numeroDeProfesor >= profesores.length){
          profesores.push(profesorEncontrado);
        }
      }             
    }            
  }
}

function seleccionarProfesor(nombreProfesor,nombreMateria){
  var seccionList = [];
  MateriaActual=[];
  document.getElementById("seccion").innerHTML = "";
  document.getElementById("hora").innerHTML = "";
  cargarSeccion(seccionList,nombreProfesor,nombreMateria);

  for(var i = 0; i < seccionList.length; i++){
    $("#seccion").append('<option class="ElementoListado" selected="selected">'+seccionList[i]+'</option>');
  }

  $("#seccion").append('<option class="ElementoListado" selected="selected">Sección</option>');
  $("#hora").append('<label style="margin-left: 20px" id="labels">Horas:</label>'); 
}
function cargarSeccion(seccionList,nombreProfesor,nombreMateria){
  for(var i = 0; i < informatica.length; i++){
      if(nombreMateria === informatica[i].subject  && nombreProfesor == informatica[i].professor)
        seccionList.push(informatica[i].section);      
  }
}

function seleccionarSeccion(nombreSeccion,nombreProfesor,nombreMateria){
  var horaList = [];
  cargarHoras(horaList,nombreSeccion,nombreProfesor,nombreMateria);
  document.getElementById("hora").innerHTML = "";
  $("#hora").append('<label style="margin-left: 20px" id="labels">Horas:</label>');

  for(var i = 0; i < horaList.length;i++){
    switch (i) {
      case 0:{ 
      if(horaList[i] != null) { 
      $("#hora").append('<label style="margin-left: 20px" class="hora">'+horaList[i]+'</label>'); 
      var arregloMateria = horaList[i].split(" ");
      prepararElemento(nombreMateria,nombreProfesor,nombreSeccion,arregloMateria[0],arregloMateria[1],arregloMateria[2],arregloMateria[3]);
      }     
        break;}
      case 1:{
      if(horaList[i] != null){  
      $("#hora").append('<label style="margin-left: 20px" class="hora">'+horaList[i]+'</label>'); 
      var arregloMateria = horaList[i].split(" ");
      prepararElemento(nombreMateria,nombreProfesor,nombreSeccion,arregloMateria[0],arregloMateria[1],arregloMateria[2],arregloMateria[3]); 
      }   
        break;}
      case 2:{
      if(horaList[i] != null){     
      $("#hora").append('<label style="margin-left: 20px" class="hora">'+horaList[i]+'</label>');
      var arregloMateria = horaList[i].split(" ");
      prepararElemento(nombreMateria,nombreProfesor,nombreSeccion,arregloMateria[0],arregloMateria[1],arregloMateria[2],arregloMateria[3]); 
      }      
        break;}
      case 3:{
      if(horaList[i] != null){     
      $("#hora").append('<label style="margin-left: 20px" class="hora">'+horaList[i]+'</label>');
      var arregloMateria = horaList[i].split(" ");
      prepararElemento(nombreMateria,nombreProfesor,nombreSeccion,arregloMateria[0],arregloMateria[1],arregloMateria[2],arregloMateria[3]);
      }      
        break;}
      case 4:{
      if(horaList[i] != null){     
      $("#hora").append('<label style="margin-left: 20px" class="hora">'+horaList[i]+'</label>');
      var arregloMateria = horaList[i].split(" ");
      prepararElemento(nombreMateria,nombreProfesor,nombreSeccion,arregloMateria[0],arregloMateria[1],arregloMateria[2],arregloMateria[3]);
      }       
        break;}
    
      default:
        break;
    }
  }
  
  
}
function cargarHoras(horaList,nombreSeccion,nombreProfesor,nombreMateria){
  for(var i = 0; i < informatica.length; i++){
    if(nombreMateria === informatica[i].subject  && nombreProfesor === informatica[i].professor && nombreSeccion === informatica[i].section){
      if(informatica[i].mon != null)
        horaList.push("Lun "+(informatica[i].mon).replace("_"," ") );
      else
        horaList.push( informatica[i].mon);

      if((informatica[i].tue) != null)
        horaList.push("Mar "+ (informatica[i].tue).replace("_"," ") );
      else
        horaList.push(informatica[i].tue);

      if((informatica[i].wed) != null)
        horaList.push("Mie "+ (informatica[i].wed).replace("_"," ") );
      else
        horaList.push(informatica[i].wed);

      if((informatica[i].thu) != null)
        horaList.push("Jue "+ (informatica[i].thu).replace("_"," ") );
      else
        horaList.push(informatica[i].thu);

      if((informatica[i].fri) != null)
        horaList.push("Vie "+ (informatica[i].fri).replace("_"," ") );
      else
        horaList.push(informatica[i].fri);      
       
        break;     
      }              
  }
}

function getDia(dia){
  switch (dia) {
    case "Lun":{ return "2018-07-2 "; break;}
    case "Mar":{ return "2018-07-3 "; break;}
    case "Mie":{ return "2018-07-4 "; break;}
    case "Jue":{ return "2018-07-5 "; break;}
    case "Vie":{ return "2018-07-6 "; break;}   
      default:
        break;
    }
}

var idMateria = 0;
function prepararElemento(nombreMateria,nombreProfesor,nombreSeccion,dia,horaInicio,horaFin,salon){  
  var materiaObject = {
    "id": idMateria,
    "nombre":nombreMateria,
    "profesor":nombreProfesor,
    "seccion":nombreSeccion,
    "dia":dia,
    "inicio":horaInicio,
    "fin":horaFin,
    "salon":salon
  };
  MateriaActual.push(materiaObject);
}

function cargarMateriaEnTabla(){ 
  console.log("Id: " + idMateria); 
  var horariosDeMateria = [];
  var choques = 0;
  var data={};  
  for(var i = 0; i < MateriaActual.length;i++){
    data={
      id: MateriaActual[i].id,
      title: MateriaActual[i].nombre+"\n"+MateriaActual[i].profesor+"\n"+MateriaActual[i].salon+"\n"+MateriaActual[i].seccion,
      start: moment(getDia(MateriaActual[i].dia)+MateriaActual[i].inicio, "YYYY-MM-DD HH:mm"),
      end: moment(getDia(MateriaActual[i].dia)+MateriaActual[i].fin, "YYYY-MM-DD HH:mm"),
      color: '#2a92ca',   // an option!
      textColor: 'black', // an option!
      borderColor:'#2a92ca'
    }
    if(!verificarChoqueMateria(data)){
      horariosDeMateria.push(data);   
    }else{
      choques++;
    }
  }
  if(choques === 0){ //Si no hay choques
    for(var j = 0; j < horariosDeMateria.length; j++){
      $("#contenedorHorario").fullCalendar('renderEvent',horariosDeMateria[j]);
    }
    notifica();
  }else{
    opcionesDeConflicto(horariosDeMateria);  
  }    
  idMateria = idMateria+1;  
  MateriaActual=[];
  
}


function eliminarMateria(){  
  
  $("#contenedorHorario").fullCalendar( 'removeEvents', usarId );
  idMateria--;
}
function forzarCincuentaMinutos(formato){
  var formato_1 = formato.split(" ");
  var hora = formato_1[1].split(":");
  var horaCompuesta = formato_1[0]+" "+hora[0]+":50";
  return horaCompuesta;
}
function isMateriasIguales(materiaActual,materiaVieja){  
  if(materiaActual.title === materiaVieja.title){
    return true;
  }
  return false;
}

function verificarChoqueMateria(materiaActual){       
        var inicioNuevo = materiaActual.start._i;
        var finNuevo    = materiaActual.end._i; 
        var inicioForzado = forzarCincuentaMinutos(inicioNuevo);
        
  if(idMateria > 0){
    for (var i = 0; i < idMateria; i++) {
      var materiaEnHorario = $("#contenedorHorario").fullCalendar('clientEvents',i);
      //Ciclo para ver las horas de la materia
      for (let index = 0; index < materiaEnHorario.length; index++) {        
        var inicioViejo = materiaEnHorario[index].start._i;
        var finViejo = materiaEnHorario[index].end._i; 
        var inicioViejoForzado = forzarCincuentaMinutos(inicioViejo);              
        if(inicioNuevo === inicioViejo || inicioNuevo === finViejo || finNuevo === inicioViejo || finNuevo === finViejo || finNuevo === inicioViejoForzado || inicioForzado === finViejo){
          materiaInvolucradaEnConflicto = materiaEnHorario[index];
          materiaNuevaEnConflicto =materiaActual;
          if(isMateriasIguales(materiaActual,materiaEnHorario[index])){
            alert("Esta materia ya esta agregada");
            return true;
          }else{
            return true;
          }
        }                  
      }
    }
  }
  return false;
}




function notifica() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
} 

function opcionesDeConflicto(){
  var materiaEnConflicto = materiaInvolucradaEnConflicto;
  var materiaNueva = materiaNuevaEnConflicto;  
  var arregloMateriaConflicto = materiaEnConflicto.title.split("\n");
  var arregloMateriaNueva = materiaNueva.title.split("\n");
  var horaInicio;
  var horaFin;
  document.getElementById("conflictoAgregar").innerHTML = "";
  document.getElementById("conflictoAgregarHora").innerHTML = "";
  document.getElementById("conflictoAgregarProfesor").innerHTML = "";

  document.getElementById("conflictoRemplazar").innerHTML = "";
  document.getElementById("conflictoRemplazarHora").innerHTML = "";
  document.getElementById("conflictoRemplazarProfesor").innerHTML = "";

  horaInicio = formatoSoloHoras(materiaNueva.start._i);
  horaFin = formatoSoloHoras(materiaNueva.end._i);
  $("#conflictoAgregar").append("Remplazo: "+arregloMateriaNueva[0]+"\n");
  $("#conflictoAgregarHora").append("Horario: Lunes "+horaInicio+" y "+horaFin+"\n");
  $("#conflictoAgregarProfesor").append("Profesor: "+arregloMateriaNueva[1]);

  horaInicio = formatoSoloHoras(materiaEnConflicto.start._i);
  horaFin = formatoSoloHoras(materiaEnConflicto.end._i);
  $("#conflictoRemplazar").append("Actual: "+arregloMateriaConflicto[0]+"\n");
  $("#conflictoRemplazarHora").append("Horario: Lunes "+horaInicio+" y "+horaFin+"\n");
  $("#conflictoRemplazarProfesor").append("Profesor: "+arregloMateriaConflicto[1]);

  $(".Warning").modal(); 
}
function formatoSoloHoras(hora){
  console.log(hora);
  var formato_1 = hora.split(" ");
  return formato_1[1];  
}
