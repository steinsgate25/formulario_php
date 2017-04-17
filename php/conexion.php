<?php

	function conexion()
	{
		$link=mysqli_connect('localhost','root','','formulario');
		return $link;
	}

	function desconectar($link)
	{
		mysqli_close($link);
	}

?>
