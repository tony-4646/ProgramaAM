<?php

require_once('../config/conexion.php');

class Clientes
{

    /*TODO: Procedimiento para sacar todos los registros*/
    public function todos()
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $cadena = "SELECT * FROM clientes ORDER BY id DESC";
        $datos = mysqli_query($con, $cadena);
        $con->close();
        return $datos;
    }

    /*UNO: Procedimiento para sacar un registro*/
    public function uno($idCliente)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $cadena = "SELECT * FROM clientes WHERE id = $idCliente";
        $datos = mysqli_query($con, $cadena);
        $con->close();
        return $datos;
    }

    /*INSERTAR: Procedimiento para insertar */
    public function Insertar($nombres, $apellidos, $telefono, $correo)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $cadena = "INSERT INTO clientes (nombres, apellidos, telefono, correo_electronico)
                   VALUES ('$nombres', '$apellidos', '$telefono', '$correo')";

        if (mysqli_query($con, $cadena)) {
            $con->close();
            return "ok";
        } else {
            $con->close();
            return "Error al insertar";
        }
    }

    /*ACTUALIZAR: Procedimiento para actualizar */
    public function Actualizar($idCliente, $nombres, $apellidos, $telefono, $correo)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();

        $cadena = "UPDATE clientes 
                   SET nombres='$nombres',
                       apellidos='$apellidos',
                       telefono='$telefono',
                       correo_electronico='$correo'
                   WHERE id = $idCliente";
        if (mysqli_query($con, $cadena)) {
            $con->close();
            return "ok";
        } else {
            $con->close();
            return "Error al actualizar";
        }
    }

    /*ELIMINAR: Procedimiento para Eliminar */
    public function Eliminar($idCliente)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();

        $cadena = "DELETE FROM clientes WHERE id = $idCliente";

        if (mysqli_query($con, $cadena)) {
            $con->close();
            return "ok";
        } else {
            $con->close();
            return "Error al eliminar";
        }
    }
}