<head>
	<title>REGISTROS</title>

</head>
<<body>
	<?php
	require 'conexion/conexion.php';

	$consulta = mysqli_query($conexion,"SELECT * from formulario")
	or die ("Error al traer los datos")

	echo '<table border="1">';
	echo '<tr>';
	echo 'th id="nombre_producto">Producto</th>';
	echo 'th id="cantidades">Cantidad</th>';
	echo 'th id="precio">Precio</th>';
	echo 'th id="descripcion">Descripcion</th>';
	echo 'th id="nombre_comprador">Cliente</th>';
	echo 'th id="email">Email</th>';
	echo '</tr>';

	while ($extraido = mysqli_fetch_array($consulta))
	{
		echo '<tr>';
		echo '<td>',$extraido['nombre_producto'],'</td>';
		echo '<td>',$extraido['cantidades'],'</td>';
		echo '<td>',$extraido['precio'],'</td>';
		echo '<td>',$extraido['descripcion'],'</td>';
		echo '<td>',$extraido['nombre_comprador'],'</td>';
		echo '<td>',$extraido['email'],'</td>';
		echo '</tr>';
	}
	mysqli_close($conexion);
	echo '/table>';
	?>
	</body>
