$(document).ready(function(){

  var flag = false;



  $('button').click(function(e){
    var inputVal1 = $('#name_product').val();
    var inputVal2 = $('#cantidad').val();
    var inputVal3 = $('#precio').val();
    var inputVal4 = $('#descripcion').val();
    var inputVal5 = $('#nombre_comprador').val();
    var inputVal6 = $('#email').val();

    if (inputVal1 == '') {
       $('#name_product').css({"border-left":"7px solid #e11515"})
       $('#alert1').html('Este campo es requerido')
       e.preventDefault()
     }
     else {
       $('#name_product').css({"border-left":"7px solid #00923d"})
       $('#name_product').css({"background-color":"rgb(250, 255, 189)"})
       $('#alert1').css({'opacity':'0'})

     }
     if (inputVal2 == '') {
        $('#cantidad').css({"border-left":"7px solid #e11515"})
        $('#alert2').html('Este campo es requerido')
        e.preventDefault()

      }
      else {
        $('#cantidad').css({"border-left":"7px solid #00923d"})
        $('#cantidad').css({"background-color":"rgb(250, 255, 189)"})
         $('#alert2').css({'opacity':'0'})

      }
    if (inputVal3 == '') {
       $('#precio').css({"border-left":"7px solid #e11515"})
       $('#alert3').html('Este campo es requerido')
       e.preventDefault()
     }
     else {
       $('#precio').css({"border-left":"7px solid #00923d"})
       $('#precio').css({"background-color":"rgb(250, 255, 189)"})
        $('#alert3').css({'opacity':'0'})
     }
     if (inputVal4 == '') {
        $('#descripcion').css({"border-left":"7px solid #e11515"})
        $('#alert4').html('Este campo es requerido')
        e.preventDefault()
      }
      else {
        $('#descripcion').css({"border-left":"7px solid #00923d"})
        $('#descripcion').css({"background-color":"rgb(250, 255, 189)"})
         $('#alert4').css({'opacity':'0'})

      }
    if (inputVal5 == '') {
       $('#nombre_comprador').css({"border-left":"7px solid #e11515"})
       $('#alert5').html('Este campo es requerido')
       e.preventDefault()
     }
     else {
       $('#nombre_comprador').css({"border-left":"7px solid #00923d"})
       $('#nombre_comprador').css({"background-color":"rgb(250, 255, 189)"})
        $('#alert5').css({'opacity':'0'})

     }
     if (inputVal6 == '') {
        $('#email').css({"border-left":"7px solid #e11515"})
        $('#alert6').html('Este campo es requerido')
        e.preventDefault()
      }
      else {
        $('#email').css({"border-left":"7px solid #00923d"})
        $('#email').css({"background-color":"rgb(250, 255, 189)"})
         $('#alert6').css({'opacity':'0'})
      }
      $('form').submit(function(){
        flag = true;
        $("form").ajaxForm({url: 'server.php', type: 'post'})
      })
      })

    });
