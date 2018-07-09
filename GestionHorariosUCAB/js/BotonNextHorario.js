var siguiente = false;

function siguientePaso(){
  console.log(idMateria);
  if(!siguiente){
    siguiente = true;

    $('.SeccionBoton').css({'opacity':'0'}); 
    $('#tituloVistaPrev').animate({'opacity':'0'});
    $('#contenedorHorario2').animate({'opacity':'0'}); 
    setTimeout(function(){
      $('#tituloVistaPrev').css("display","none");
      $('.Herramientas').css('height','0px'); 
    },500);
    

    setTimeout(function(){
      $('.Deslizador').css('margin-left','-1060px');
      $('#nextBoton').css('margin-left','100px');//icon-circle-right
      $('#nextBoton').removeClass("icon-circle-right");
      $('#nextBoton').addClass("icon-circle-left");
      $('#siguientesDatos').css('margin-left','');
       
    },1000);   
      
    setTimeout(function(){ 
      $('#prueba').removeClass("col-md-2");
      $('#prueba').addClass("col-md-1");
      $('.SeccionBoton').css('display','block');      
      $('.Herramientas').css('height','100px');      
      $('#contenedorHorario2').css('display','none');     

    setTimeout(function(){ 
      $('#tituloCreacion').css("display","block");
      $('#tituloCreacion').animate({'opacity':'1'});
      $('.SeccionBoton').css({'opacity':'1'}); 
      $('.CabeceraTabla').css({'opacity':'1'});   
      $('.Fila').css({'opacity':'1'}); }, 500);
      $('#contenedorHorario').css('opacity','1');
     
    },1500);
  }else{
    siguiente = false;
    setTimeout(function(){  $('#contenedorHorario').css('opacity','0'); $('.CabeceraTabla').css({'display':'none'}); $('.SeccionBoton').css('display','none');  $('.Herramientas').css('height','0px'); $('.Fila').css({'display':'none'})}, 300);
    $('.SeccionBoton').css({'opacity':'0'});
    $('.Fila').css({'opacity':'0'});
    $('.CabeceraTabla').css({'opacity':'0'});  
    $('#tituloCreacion').animate({'opacity':'0'}); 
    setTimeout(function(){
      $('#tituloCreacion').css("display","none");
      $('#tituloVistaPrev').css("display","block");
      $('#prueba').removeClass("col-md-1");
      $('#prueba').addClass("col-md-2");
      $('#contenedorHorario2').css('display','block'); 
      $('.SeccionBoton').css('display','none');
      $('#siguientesDatos').css('margin-left','5px');
      $('.Deslizador').css('margin-left','-15px');
      $('#nextBoton').css('margin-left','250px');
      $('#nextBoton').addClass("icon-tools");
      $('#nextBoton').removeClass("icon-circle-left");
            
    }, 800);
    setTimeout(function(){
      $('#contenedorHorario2').animate({'opacity':'1'}); 
      $('.Herramientas').css('height','100px');
      $('.SeccionBoton').css('display','block');  
      setTimeout(function(){ $('#tituloVistaPrev').animate({'opacity':'1'}); $('.SeccionBoton').css('opacity','1'); },500); 
      $(document).ready(function(){
        actualizarVista();
      });       
    },1300);
   
  }  
}