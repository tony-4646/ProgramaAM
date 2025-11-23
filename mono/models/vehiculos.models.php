<?php

require_once("../config/conexion.php");

class Vehiculos
{
    /*TODO: Procedimiento para sacar todos los registros con el cliente*/
    public function todos()
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $cadena = "SELECT v.*, c.nombres, c.apellidos 
                   FROM vehiculos v
                   INNER JOIN clientes c ON v.id_cliente = c.id
                   ORDER BY v.id DESC";

        $datos = mysqli_query($con, $cadena);
        $con->close();
        return $datos;
    }

    /*UNO: Procedimiento para sacar un registro*/
    public function uno($idVehiculo)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();

        $cadena = "SELECT * FROM vehiculos WHERE id = $idVehiculo";
        $datos = mysqli_query($con, $cadena);
        $con->close();
        return $datos;
    }

    /*INSERTAR: Procedimiento para insertar */
    public function Insertar($id_cliente, $marca, $modelo, $anio, $tipo_motor)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();

        $cadena = "INSERT INTO vehiculos (id_cliente, marca, modelo, anio, tipo_motor)
                   VALUES ($id_cliente, '$marca', '$modelo', $anio, '$tipo_motor')";

        if (mysqli_query($con, $cadena)) {
            $con->close();
            return "ok";
        } else {
            $con->close();
            return "Error al insertar vehículo";
        }
    }

    /*ACTUALIZAR: Procedimiento para actualizar */
    public function Actualizar($idVehiculo, $id_cliente, $marca, $modelo, $anio, $tipo_motor)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();

        $cadena = "UPDATE vehiculos SET
                    id_cliente = $id_cliente,
                    marca = '$marca',
                    modelo = '$modelo',
                    anio = $anio,
                    tipo_motor = '$tipo_motor'
                   WHERE id = $idVehiculo";

        if (mysqli_query($con, $cadena)) {
            $con->close();
            return "ok";
        } else {
            $con->close();
            return "Error al actualizar";
        }
    }

    /*ELIMINAR: Procedimiento para Eliminar */
    public function Eliminar($idVehiculo)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();

        $cadena = "DELETE FROM vehiculos WHERE id = $idVehiculo";

        if (mysqli_query($con, $cadena)) {
            $con->close();
            return "ok";
        } else {
            $con->close();
            return "Error al eliminar";
        }
    }
}