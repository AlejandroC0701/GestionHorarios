

function elegirSemestre(semestre){
  document.getElementById("materia").innerHTML = ""; 
  document.getElementById("profesor").innerHTML = ""; 
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
  cargarProfesores(profesores,nombreMateria);
  
  for(var i = 0; i < profesores.length; i++){
    if(profesores[i] === "Por Asignar"){     
      continue;
    }else{
      $("#profesor").append('<option class="ElementoListado" selected="selected">'+profesores[i]+'</option>');  
    }
  }
  $("#profesor").append('<option class="ElementoListado" selected="selected">Profesor</option>');   
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
  document.getElementById("seccion").innerHTML = "";
  cargarSeccion(seccionList,nombreProfesor,nombreMateria);

  for(var i = 0; i < seccionList.length; i++){
    $("#seccion").append('<option class="ElementoListado" selected="selected">'+seccionList[i]+'</option>');
  }

  $("#seccion").append('<option class="ElementoListado" selected="selected">Seccion</option>');
}
function cargarSeccion(seccionList,nombreProfesor,nombreMateria){
  for(var i = 0; i < informatica.length; i++){
      if(nombreMateria === informatica[i].subject  && nombreProfesor == informatica[i].professor)
        seccionList.push(informatica[i].section);      
  }
}