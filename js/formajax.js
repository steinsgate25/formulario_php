$(document).ready(function(){
  var nombre_producto = $('#nombre_producto').val();
  var cantidades = $('#cantidades').val();
  var precio = $('#precio').val();
  var descripcion = $('#descripcion').val();
  var nombre_comprador = $('#nombre_comprador').val();
  var email = $('#email').val();
  var queryString = 'nombre_producto='+ nombre_producto + 'cantidades='+ cantidades + 'precio='+ precio + 'descripcion='+ descripcion + 'nombre_comprador='+ nombre_comprador + 'email='+ email;
  var query = nombre_producto + cantidades + precio + descripcion + nombre_comprador + email;
  console.log(queryString);

  $('#registro').click(function(e){

    e.preventDeafult();
    $.ajax({
      type: 'POST',
      url: 'base.php',
      data: queryString,
      cache: false,
    })
  })

})
