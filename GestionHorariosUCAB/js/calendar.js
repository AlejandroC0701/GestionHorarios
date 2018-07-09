var selected = "-1";
function crearTabla(contenedor){
  
  $(contenedor).fullCalendar({
    weekends: false,
    themeSystem: 'bootstrap4',
    header: false,
    defaultView: 'agendaWeek',
    allDaySlot: false,
    minTime: "7:00:00",
    maxTime: "21:00:00",
    columnHeaderFormat: "dddd",
    defaultDate: moment("2018-07-02"),
    displayEventTime: false,
    timeFormat: 'h:mm', 
    locale: "es-us",
    
      eventClick: function(calEvent, jsEvent, view) {
        console.log("Selected: " + selected);
        if(parseInt(selected) >= 0){
          var idViejo = selected;
          usarId=calEvent.id; 
          selected = calEvent.id;
          var materiaCompleta = $(contenedor).fullCalendar('clientEvents',calEvent.id); 
          var materiaViejaSelect = $(contenedor).fullCalendar('clientEvents',idViejo);          
          if(idViejo != selected){
            console.log("Viejo: " + idViejo + " Nuevo: " + selected);
            for(var i = 0; i < materiaCompleta.length; i++){
              materiaCompleta[i].color = "rgb(238, 222, 164)"; 
            }   
            for(var i = 0; i < materiaViejaSelect.length; i++){
              materiaViejaSelect[i].color = "#2a92ca"; 
            }                 
             $(contenedor).fullCalendar('updateEvents',materiaCompleta); 
             $(contenedor).fullCalendar('updateEvents',materiaViejaSelect); 
          }else{
          calEvent.color = "rgb(238, 222, 164)";
          $('#contenedorHorario').fullCalendar('updateEvent', calEvent); 
          }          
        }else{
          console.log("Vacio");
          usarId=calEvent.id;  
          selected = calEvent.id;      
          calEvent.color = "rgb(238, 222, 164)";
          $(contenedor).fullCalendar('updateEvent', calEvent); 
        }        
            
            
      },
      eventMouseover: function(calEvent, jsEvent, view) {       
        $(this).css("background","rgb(204, 220, 242)");                   
      },
      eventMouseout: function(calEvent, jsEvent, view) {        
        $(this).css("background","#2a92ca");
        $(contenedor).fullCalendar('updateEvent',calEvent);       
      }  
    });
  $(contenedor).fullCalendar('option', 'contentHeight', 400);
}