<?php

require_once('../config/conexion.php');
class Roles{
    public function todos()
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $cadena = "SELECT * FROM `roles`";
        $datos = mysqli_query($con, $cadena);
        $con->close();
        return $datos;
    }

     public function uno($id)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $cadena = "SELECT * From roles  where id =  $id";
        $datos = mysqli_query($con, $cadena);
        $con->close();
        return $datos;
    }
}