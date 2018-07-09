var MateriaActual = [];
var materiaInvolucradaEnConflicto;
var materiaNuevaEnConflicto;
var id=0;
var numeroHorariosGuardados = 0;

function elegirSemestre(semestre){
  
  document.getElementById("materia").innerHTML = ""; 
  document.getElementById("profesor").innerHTML = "";
  document.getElementById("seccion").innerHTML = ""; 
  closeHora();
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
    //$("#hora").append("");
     
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
  closeHora();
  
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
  //document.getElementById("hora").innerHTML = "";  
  closeHora();
  cargarSeccion(seccionList,nombreProfesor,nombreMateria);

  for(var i = 0; i < seccionList.length; i++){
    $("#seccion").append('<option class="ElementoListado" selected="selected">'+seccionList[i]+'</option>');
  }

  $("#seccion").append('<option class="ElementoListado" selected="selected">Sección</option>');
  //$("#hora").append(''); 
}
function cargarSeccion(seccionList,nombreProfesor,nombreMateria){
  for(var i = 0; i < informatica.length; i++){
      if(nombreMateria === informatica[i].subject  && nombreProfesor == informatica[i].professor)
        seccionList.push(informatica[i].section);      
  }
}

function seleccionarSeccion(nombreSeccion,nombreProfesor,nombreMateria){
  if(nombreSeccion === "Sección"){
    closeHora();
  }else{
    var horaList = [];
    MateriaActual=[];
    cargarHoras(horaList,nombreSeccion,nombreProfesor,nombreMateria);
    // document.getElementById("hora").innerHTML = "";
    $("#horaText").empty();
    $("#horaText").append('<strong>Horas:</strong> ');
    console.log("pasa")
    for(var i = 0; i < horaList.length;i++){
      switch (i) {
        case 0:{ 
        if(horaList[i] != null) { 
          $("#horaText").append(horaList[i]+"&nbsp;&nbsp; ");
        var arregloMateria = horaList[i].split(" ");
        prepararElemento(nombreMateria,nombreProfesor,nombreSeccion,arregloMateria[0],arregloMateria[1],arregloMateria[2],arregloMateria[3]);
        }     
          break;}
        case 1:{
        if(horaList[i] != null){  
        $("#horaText").append(horaList[i]+"&nbsp;&nbsp; ");
        var arregloMateria = horaList[i].split(" ");
        prepararElemento(nombreMateria,nombreProfesor,nombreSeccion,arregloMateria[0],arregloMateria[1],arregloMateria[2],arregloMateria[3]); 
        }   
          break;}
        case 2:{
        if(horaList[i] != null){     
          $("#horaText").append(horaList[i]+"&nbsp;&nbsp; ");
        var arregloMateria = horaList[i].split(" ");
        prepararElemento(nombreMateria,nombreProfesor,nombreSeccion,arregloMateria[0],arregloMateria[1],arregloMateria[2],arregloMateria[3]); 
        }      
          break;}
        case 3:{
        if(horaList[i] != null){     
          $("#horaText").append(horaList[i]+"&nbsp;&nbsp; ");
        var arregloMateria = horaList[i].split(" ");
        prepararElemento(nombreMateria,nombreProfesor,nombreSeccion,arregloMateria[0],arregloMateria[1],arregloMateria[2],arregloMateria[3]);
        }      
          break;}
        case 4:{
        if(horaList[i] != null){     
        $("#horaText").append(horaList[i]+"&nbsp;&nbsp; ");
        var arregloMateria = horaList[i].split(" ");
        prepararElemento(nombreMateria,nombreProfesor,nombreSeccion,arregloMateria[0],arregloMateria[1],arregloMateria[2],arregloMateria[3]);
        }       
          break;}
      
        default:
          break;
      }
    }
    openHora();
  }  
    
}
function cargarHoras(horaList,nombreSeccion,nombreProfesor,nombreMateria){
  MateriaActual=[];
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
  if(MateriaActual.length > 0){
    var horariosDeMateria = [];
    var choques = 0;
    var data={};  
    console.log("dia: "+getDia(MateriaActual[0].dia));
    console.log("Inicio: "+MateriaActual[0].inicio);
    console.log("Fin: "+MateriaActual[0].fin);

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
        break;
      }
    }
    if(choques === 0 && horariosDeMateria.length > 0){ //Si no hay choques
      for(var j = 0; j < horariosDeMateria.length; j++){
        $("#contenedorHorario").fullCalendar('renderEvent',horariosDeMateria[j]);
      }
      notifica("Materia agregada exitosamente!",'rgba(0, 0, 0, 0.7)');
      idMateria = idMateria+1;
    }else{
      if(!isMateriasIguales(materiaNuevaEnConflicto,materiaInvolucradaEnConflicto))
        opcionesDeConflicto(horariosDeMateria);  
    }
   
  }else{
    notifica("No a seleccionado una materia aun",'rgba(226, 112, 112, 0.604)');
  }

}
  

function rotarIdAlEliminar(idAEliminar){
  if(parseInt(idAEliminar) === idMateria-1){
    $("#contenedorHorario").fullCalendar( 'removeEvents',idAEliminar);
    idMateria--;
  }else if(idAEliminar === 0){
    $("#contenedorHorario").fullCalendar( 'removeEvents',idAEliminar);
    for(var index = 0; index < idMateria; index++){
      if(index === parseInt(idAEliminar)){
        continue;
      }else{
        var materia = $("#contenedorHorario").fullCalendar('clientEvents',index);
        for(var j = 0; j < materia.length;j++){
          materia[j].id = index-1;
        }
        $("#contenedorHorario").fullCalendar('updateEvents',materia);
      }
    }
    idMateria--;
  }else{
    $("#contenedorHorario").fullCalendar( 'removeEvents',idAEliminar);
    for(var index = parseInt(idAEliminar); index < idMateria; index++){
      if(index === parseInt(idAEliminar)){
        continue;
      }else{
        var materia = $("#contenedorHorario").fullCalendar('clientEvents',index);
        for(var j = 0; j < materia.length;j++){
          materia[j].id = index-1;
        }
        $("#contenedorHorario").fullCalendar('updateEvents',materia);
      }
    }
    selected = -1;
    idMateria--;
  }
  
}
function eliminarMateria(){ 
  rotarIdAlEliminar(usarId);
  selected = -1;
  notifica("Materia eliminada exitosamente!!",'rgba(226, 133, 133, 0.844)'); 
}
function botonEliminarMateria(){
  if(MateriaActual.length > 0 || selected >= 0){
    $('.Delete').modal();
  }else{ 
    notifica('No se a seleccionado ninguna materia','rgba(226, 133, 133, 0.844)'); 
  }
}
function remplazarMateria(){
  rotarIdAlEliminar(materiaInvolucradaEnConflicto.id);
  cargarMateriaEnTabla();
  $('.Warning').modal("hide");
  notifica('La materia fue remplazada con éxito!','rgba(206, 136, 230, 0.844)');
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
          materiaNuevaEnConflicto = materiaActual;
          if(isMateriasIguales(materiaActual,materiaEnHorario[index])){
            $(".MateriaRepetida").modal();
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
function crearJsonConHorario(){
  $('#contenedorHorario2 .fc-left').empty();
  var horario = $("#contenedorHorario").fullCalendar('clientEvents');
  var arreglo = [];
  var materia = [];
  
  for(var i = 0; i < horario.length;i++){
    var inicio = (horario[i].start._i).split(" ");
    var fin = (horario[i].end._i).split(" ");
    
    console.log(inicio);
    console.log(fin);

    materia.push({
      id: horario[i].id,
      title: horario[i].title,
      start:""+(horario[i].start._i),
      end: ""+(horario[i].end._i),
      color: '#2a92ca',   // an option!
      textColor: 'black', // an option!
      borderColor:'#2a92ca'
    });
  }
  var horarioConMaterias = {
    "tituloHorario":$('#tituloHorario').val() || "horario",
     materia
  };
  var jsonHorario = JSON.stringify(horarioConMaterias);
  console.log(horarioConMaterias);
  localStorage.setItem("horario",jsonHorario);  
  localStorage.setItem("totalHorarios",numeroHorariosGuardados);
  return jsonHorario;
}
function botonGuardarHorario(){ 
  if( ($("#contenedorHorario").fullCalendar('clientEvents')).length > 0 ){
    if(localStorage.getItem("horario") == null){
      var contenidoDeArchivo =  new Blob([crearJsonConHorario()],{type: "application/json"});      
      notifica("El horario se a guardado!","rgba(240, 156, 125, 0.844)");
      $('.DescargarHorario').modal();
    }else{
      $('.GuardarRemp').modal();
    }
  }else{
    notifica("El horario esta Vacio!","rgba(240, 156, 125, 0.844)");
  }
}
function remplazarHorarioAlmacenado(){
  $('.GuardarRemp').modal("hide");
  var contenidoDeArchivo =  new Blob([crearJsonConHorario()],{type: "application/json"}); 
  notifica("El horario se a guardado!","rgba(240, 156, 125, 0.844)");
  $('.DescargarHorario').modal();
}

function ventanaDescargar(){
  $('.DescargarHorario').modal("hide");
  var contenidoDeArchivo =  new Blob([crearJsonConHorario()],{type: "application/json"});  
  descargarArchivo(contenidoDeArchivo,$('#tituloHorario').val()+".json");
}

function descargarArchivo(contenidoEnBlob, nombreArchivo) {
  var reader = new FileReader();
  reader.onload = function (event) {   
    var save = document.createElement('a');
    save.href = event.target.result;
    save.target = '_blank';  
    if( $('#tituloHorario').val().length > 0 ){
      save.download = nombreArchivo || 'horario.json';
    }
    else{
      save.download = 'horario.json'; 
    }
    var clicEvent = new MouseEvent('click', {
      'view': window,
      'bubbles': true,
      'cancelable': true
    });    
    save.dispatchEvent(clicEvent);
    (window.URL || window.webkitURL).revokeObjectURL(save.href);
  }; 
  reader.readAsDataURL(contenidoEnBlob);
}

function notifica(mensaje,color) {
  document.getElementById("snackbar").innerHTML = "";
  document.getElementById("snackbar").innerHTML = mensaje;
  $('#snackbar').css("background",color);
  var x = document.getElementById("snackbar");  
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
} 

function openHora(){
  $("#hora").animate({"height":"30px"});
  $('#hora').animate({'opacity':'1'});  
}

function closeHora(){
  $('#hora').animate({'opacity':'0'});
  $("#hora").animate({"height":"0px"});   
  setTimeout(function(){
   $("#horaText").empty();  
  },500); 
  
}

function opcionesDeConflicto(){
  var materiaEnConflicto = materiaInvolucradaEnConflicto;
  var materiaNueva = materiaNuevaEnConflicto;  
  var arregloMateriaConflicto = materiaEnConflicto.title.split("\n");
  var arregloMateriaNueva = materiaNueva.title.split("\n");
  var horario;

  document.getElementById("conflictoAgregar").innerHTML = "";
  document.getElementById("conflictoAgregarHora").innerHTML = "";
  document.getElementById("conflictoAgregarProfesor").innerHTML = "";

  document.getElementById("conflictoRemplazar").innerHTML = "";
  document.getElementById("conflictoRemplazarHora").innerHTML = "";
  document.getElementById("conflictoRemplazarProfesor").innerHTML = "";

  horario = formatoSoloHoras(materiaNueva.start._i,materiaNueva.end._i);  
  $("#conflictoAgregar").append("Remplazo: "+arregloMateriaNueva[0]+"\n");
  $("#conflictoAgregarHora").append("Horario: "+horario+"\n");
  $("#conflictoAgregarProfesor").append("Profesor: "+arregloMateriaNueva[1]);

  horario = formatoSoloHoras(materiaEnConflicto.start._i,materiaEnConflicto.end._i);  
  $("#conflictoRemplazar").append("Actual: "+arregloMateriaConflicto[0]+"\n");
  $("#conflictoRemplazarHora").append("Horario: "+horario+"\n");
  $("#conflictoRemplazarProfesor").append("Profesor: "+arregloMateriaConflicto[1]);

  $(".Warning").modal(); 
}
function formatoSoloHoras(horaIn,horaFin){  
  var formato_1 = horaIn.split(" ");
  var formato_2 = horaFin.split(" ");
  var dia = formato_1[0].split("-");
  var horaDelDiaInicio = formato_1[1].split(":");
  var horaDelDiaFin = formato_2[1].split(":");

  if(parseInt(horaDelDiaInicio[0]) < 12){
    formato_1[1] = formato_1[1]+"am"
  }else{
    formato_1[1] = formato_1[1]+"pm"
  }
  if(parseInt(horaDelDiaFin[0]) < 12){
    formato_2[1] = formato_2[1]+"am"
  }else{
    formato_2[1] = formato_2[1]+"pm"
  }

  var formatoCompleto;
  switch (parseInt(dia[2])) {
    case 2: formatoCompleto = "Lunes "+formato_1[1]+" y "+formato_2[1];      
      break;
    case 3: formatoCompleto = "Martes "+formato_1[1]+" y "+formato_2[1];   
      break;
    case 4: formatoCompleto = "Miercoles "+formato_1[1]+" y "+formato_2[1];   
      break;
    case 5: formatoCompleto = "jueves "+formato_1[1]+" y "+formato_2[1];   
      break;
    case 6: formatoCompleto = "Viernes "+formato_1[1]+" y "+formato_2[1];   
      break;      
    default:
    formatoCompleto = "No se pudo obtener la fecha";
      break;
  }
  return formatoCompleto;  
}
function nuevoDocumentoHorario(){
  if( ($("#contenedorHorario").fullCalendar('clientEvents')).length > 0 ){    
    $('.WarningClear').modal();    
  }else{
    notifica("Nuevo documento de horario listo","rgba(240, 156, 125, 0.844)");
  }
}
function vaciarHorario(){
  $('.WarningClear').modal("hide"); 
  var materias = $("#contenedorHorario").fullCalendar('clientEvents');
    for(var i = 0; i < materias.length;i++){
      rotarIdAlEliminar(i);
    }
    notifica("Nuevo documento de horario listo","rgba(240, 156, 125, 0.844)");
}

function botonEditar(){
  if(localStorage.getItem("horario") != null){
    var materias = $("#contenedorHorario").fullCalendar('clientEvents');
    if(materias.length > 0){
      for(var i = 0; i < materias.length;i++){
        rotarIdAlEliminar(i);
      }
    }    
    var horario = JSON.parse(localStorage.getItem("horario"));
    MateriaActual = [];
    idMateria = 0;
    selected = '-1';

    var idAnt = -1;
    
    for (var index = 0; index < horario.materia.length; index++) {

      
      if(idAnt === -1){
        idAnt = horario.materia[index].id;
      }

      if(idAnt === horario.materia[index].id){
        MateriaActual.push(horario.materia[index]);
      }else{
        idMateria++;
        
        var horariosDeMateria = [];
        for(var j = 0; j <MateriaActual.length;j++){
          var inicio = (MateriaActual[j].start._i).split(" ");
          var fin = (MateriaActual[j].end._i).split(" ");
          data={
            id: MateriaActual[j].id,
            title: MateriaActual[j].title,
            start: moment(inicio[0]+" "+inicio[1],"YYYY-MM-DD HH:mm"),            
            end:   moment(fin[0]+" "+fin[1],"YYYY-MM-DD HH:mm"),
            color: '#2a92ca',   // an option!
            textColor: 'black', // an option!
            borderColor:'#2a92ca'
          }
          horariosDeMateria.push(data);          
        }
        for(var x = 0; x < horariosDeMateria.length; x++){
          $("#contenedorHorario").fullCalendar('renderEvent',horariosDeMateria[x]);
        }        
        MateriaActual = [];
        idMateria++;
        MateriaActual.push(horario.materia[index]);
      } 
      idAnt =  horario.materia[index].id; 

       if(index === horario.materia.length-1 ){
        var horariosDeMateria = [];
        for(var j = 0; j <MateriaActual.length;j++){
          var inicio = (MateriaActual[j].start).split(" ");
          var fin = (MateriaActual[j].end).split(" ");
          data={
            id: MateriaActual[j].id,
            title: MateriaActual[j].title,
            start: moment(inicio[0]+" "+inicio[1],"YYYY-MM-DD HH:mm"),            
            end:   moment(fin[0]+" "+fin[1], "YYYY-MM-DD HH:mm"),
            color: '#2a92ca',   // an option!
            textColor: 'black', // an option!
            borderColor:'#2a92ca'
          }
          horariosDeMateria.push(data);          
        }
        for (var index = 0; index < horariosDeMateria.length; index++) {
          $("#contenedorHorario").fullCalendar('renderEvent',horariosDeMateria[index]);			
        }        
        MateriaActual = [];        
       } 
       console.log(idMateria);		
    }   
    idMateria++; 
    siguientePaso();
  } 

}
function actualizarVista(){
  var materias = $("#contenedorHorario2").fullCalendar('clientEvents');
    for(var i = 0; i < materias.length;i++){
      try{
        $("#contenedorHorario2").fullCalendar( 'removeEvents',materias[i].id);
      }catch(error){
        continue;
      }
    }
    if(localStorage.getItem("horario") != null){
      var horario = JSON.parse(localStorage.getItem("horario"));
      var horariosDeMateria = [];
      for(var j = 0; j <horario.materia.length;j++){
        var inicio = (horario.materia[j].start).split(" ");
        var fin = (horario.materia[j].end).split(" ");
        data={
          id: horario.materia[j].id,
          title: horario.materia[j].title,
          start: moment(inicio[0]+" "+inicio[1],"YYYY-MM-DD HH:mm"),            
          end:   moment(fin[0]+" "+fin[1], "YYYY-MM-DD HH:mm"),
          color: '#2a92ca',   // an option!
          textColor: 'black', // an option!
          borderColor:'#2a92ca'
        }
        horariosDeMateria.push(data);          
      }
      for (var index = 0; index < horariosDeMateria.length; index++) {
        $("#contenedorHorario2").fullCalendar('renderEvent',horariosDeMateria[index]);			
      }    			
    }
    $('#contenedorHorario2 .fc-left').empty();
    $('#contenedorHorario2 .fc-left').append("<p><h2 class='text-success' >"+JSON.parse(localStorage.getItem("horario")).tituloHorario+"</h2></p>");
    $('#contenedorHorario2').fullCalendar();
  }
