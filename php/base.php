<?php
	//Código  PHP
	require 'conexion.php';

	$nombre_producto = $_POST['nombre_producto'];

	$cantidades = $_POST['cantidades'];

	$precio = $_POST['precio'];

	$descripcion = $_POST['descripcion'];

	$nombre_comprador = $_POST['nombre_comprador'];

	$email = $_POST['email'];



	//Llamo a la función guardar producto.
	guardarproducto($nombre_producto,$cantidades,
	$precio,$descripcion,$nombre_comprador,$email);

	echo "<h2>Se guardo el registro correctamente</h2>";
	echo "<a href='index.html'>Captura un nuevo Registro</a>";

	function guardarproducto($nombre_producto,$cantidades,
	$precio,$descripcion,$nombre_comprador,$email)
	{
		$link = conexion();
		$query ="insert into tab_ordencompra (nombre_producto,cantidades,precio,
			descripcion,nombre_comprador,email)

			values ('$nombre_producto','$cantidades',
			'$precio','$descripcion','$nombre_comprador','$email')";
		$result = mysqli_query($link,$query) or die (mysqli_error($link));
		desconectar ($link);
	}

?>
