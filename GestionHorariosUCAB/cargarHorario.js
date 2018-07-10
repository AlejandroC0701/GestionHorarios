

function uploadFile(){
  var barradeCarga = $('#carga');
  var boton_buscar = $('#buscarArchivo');
  var texto_ruta   = $('#rutaArchivo');
  var boton_cancelar = $('#cancelarCarga');

  let peticion = new XMLHttpRequest();
  //progreso
  peticion.upload.on("progress",function(event){
    var porcentaje = ( Math.round(event.loaded/event.total) * 100);
    console.log(porcentaje);
    barradeCarga.animate({'width':porcentaje+"%"});
    barradeCarga.innerHTML = porcentaje+'%';

  });

  //cancelar
  boton_cancelar.on("click",function(){
    peticion.abort();
    barradeCarga.removeClass('progress-bar-animated');
    barradeCarga.addClass('bg-danger');
  });

  //peticion

}