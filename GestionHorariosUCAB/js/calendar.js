
function hola(){
  
  $("#contenedorHorario").fullCalendar({
    weekends: false,
    themeSystem: 'bootstrap4',
    header: false,
    defaultView: 'agendaWeek',
    allDaySlot: false,
    minTime: "7:00:00",
    maxTime: "23:00:00",
    columnHeaderFormat: "dddd",
    defaultDate: moment("2018-07-02"),
    displayEventTime: false, 
    
      eventClick: function(calEvent, jsEvent, view) {
    
        // change the border color just for fun
        usarId=calEvent.id;
    
      }

  });


}
