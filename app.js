$(function(){
  let estado = false
      $('#btn-toggle').click(function(){
         $('#seccion').slideToggle();

          if(estado ===true){
            $('#seccion').removeClass('hidden')
            $(this).text('abrir')
            estado= false;
          }else{
            $(this).text('cerrar')
            estado= true;
          }
    })
})

