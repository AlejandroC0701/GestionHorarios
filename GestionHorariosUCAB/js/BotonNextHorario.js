var siguiente = false;

function siguientePaso(){
  if(!siguiente){
    siguiente = true;
    $('.Deslizador').css('margin-left','-1060px');
    $('#nextBoton').css('margin-left','100px');//icon-circle-right
    $('#nextBoton').removeClass("icon-circle-right");
    $('#nextBoton').addClass("icon-circle-left");
    $('#siguientesDatos').css('margin-left','');
    $('#contenedorHorario2').css('opacity','0');     
    setTimeout(function(){ 
      $('.SeccionBoton').css('display','block');  
      $('.Herramientas').css('height','100px');      
      $('#contenedorHorario2').css('display','none');       
       

    setTimeout(function(){ 
      
      $('.SeccionBoton').css({'opacity':'1'}); 
      $('.CabeceraTabla').css({'opacity':'1'});   
      $('.Fila').css({'opacity':'1'}); }, 900);
      $('#contenedorHorario').css('opacity','1');
     
    },800);
  }else{
    siguiente = false;
    setTimeout(function(){  $('#contenedorHorario').css('opacity','0'); $('.CabeceraTabla').css({'display':'none'}); $('.SeccionBoton').css('display','none');  $('.Herramientas').css('height','0px'); $('.Fila').css({'display':'none'})}, 300);
    $('.SeccionBoton').css({'opacity':'0'});
    $('.Fila').css({'opacity':'0'});
    $('.CabeceraTabla').css({'opacity':'0'});
   
    setTimeout(function(){
      $('#contenedorHorario2').css('display','block'); 
      $('.SeccionBoton').css('display','none');
      $('#siguientesDatos').css('margin-left','5px');
      $('.Deslizador').css('margin-left','-15px');
      $('#nextBoton').css('margin-left','250px');
      $('#nextBoton').addClass("icon-circle-right");
      $('#nextBoton').removeClass("icon-circle-left");
      $('#contenedorHorario2').css('opacity','1');
    }, 800);
    
  }  
}