<?php

  require 'conexion/conexion.php';
  $con = conexion();
  //$query = "SELECT * From formulario ORDER BY id desc;";
  $res = mysqli_query($con,"SELECT * FROM formulario");

  if( !$res ){
    die("Opss! Se ocasiono un ERROR....Estamos TRABAJANDO PARA SOLUCIONARLO");
  }
  else{
    $array["data"]=[];
    while ($data = mysqli_fetch_assoc($res)) {
      $array["data"][] = $data;

    }
    echo json_encode($array);
  }
mysqli_free_result($res);
mysqli_close($con);



 ?>
