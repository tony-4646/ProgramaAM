<<?php
//TODO: Requerimientos 
require_once('../config/conexion.php');

class OrdenTrabajo
{
    /*TODO: Procedimiento para sacar todos los registros*/
    public function todos()
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $cadena = "SELECT * FROM `orden_trabajo`";
        $datos = mysqli_query($con, $cadena);
        $con->close();
        return $datos;
    }

    /*TODO: Procedimiento para sacar un registro*/
    public function uno($idOrdenTrabajo)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $cadena = "SELECT * FROM `orden_trabajo` WHERE `id` = $idOrdenTrabajo";
        $datos = mysqli_query($con, $cadena);
        $con->close();
        return $datos;
    }

    /*TODO: Procedimiento para insertar */
    public function Insertar($Descripcion, $Servicio_Id, $TipoServicio_Id, $Usuario_Id, $fecha)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $descripcionEscapada = mysqli_real_escape_string($con, $Descripcion);
        $fechaEscapada = mysqli_real_escape_string($con, $fecha);

        $cadena = "INSERT INTO `orden_trabajo`(`Descripcion`, `Servicio_Id`, `TipoServicio_Id`, `Usuario_Id`, `fecha`) 
                        VALUES ('$descripcionEscapada', $Servicio_Id, $TipoServicio_Id, $Usuario_Id, '$fechaEscapada')";

        if (mysqli_query($con, $cadena)) {
            $idGenerado = mysqli_insert_id($con);
            $con->close();
            return $idGenerado;
        } else {
            $con->close();
            return 0; // 0 = error
        }
    }

    /*TODO: Procedimiento para actualizar */
    public function Actualizar($idOrdenTrabajo, $Descripcion, $Servicio_Id, $TipoServicio_Id, $Usuario_Id, $fecha)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        
        $descripcionEscapada = mysqli_real_escape_string($con, $Descripcion);
        $fechaEscapada = mysqli_real_escape_string($con, $fecha);

        $cadena = "UPDATE `orden_trabajo` 
                    SET `Descripcion` = '$descripcionEscapada',
                        `Servicio_Id` = $Servicio_Id,
                        `TipoServicio_Id` = $TipoServicio_Id,
                        `Usuario_Id` = $Usuario_Id,
                        `fecha` = '$fechaEscapada'
                    WHERE `id` = $idOrdenTrabajo";

        if (mysqli_query($con, $cadena)) {
            $respuesta = 'ok';
        } else {
            $respuesta = 'error al actualizar el registro';
        }
        $con->close();
        return $respuesta;
    }

    /*TODO: Procedimiento para Eliminar */
    public function Eliminar($idOrdenTrabajo)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $cadena = "DELETE FROM `orden_trabajo` WHERE `id` = $idOrdenTrabajo";

        if (mysqli_query($con, $cadena)) {
            $respuesta = 'ok';
        } else {
            $respuesta = false;
        }
        $con->close();
        return $respuesta;
    }
}
?>