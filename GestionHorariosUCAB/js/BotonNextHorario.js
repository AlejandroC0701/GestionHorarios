var siguiente = false;

function siguientePaso(){
  if(!siguiente){
    siguiente = true;
    $('.Deslizador').css('margin-left','-3300px');
    $('#nextBoton').css('margin-left','-200px');//icon-circle-right
    $('#nextBoton').removeClass("icon-circle-right");
    $('#nextBoton').addClass("icon-circle-left");
  }else{
    siguiente = false;
    $('.Deslizador').css('margin-left','0px');
    $('#nextBoton').css('margin-left','0px');
    $('#nextBoton').addClass("icon-circle-right");
    $('#nextBoton').removeClass("icon-circle-left");
  }  
}