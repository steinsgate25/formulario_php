<?php

	function conexion()
	{
		$link=mysqli_connect('localhost','root','','base_ordencompra');
		return $link;
	}

	function desconectar($link)
	{
		mysqli_close($link);
	}

?>
