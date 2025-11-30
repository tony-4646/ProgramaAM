<?php
//TODO: Requerimientos 
require_once('../config/conexion.php');

class Tipo_Servicio
{
    /*TODO: Procedimiento para sacar todos los registros*/
    public function todos()
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $cadena = "SELECT * FROM `tiposervicio` WHERE estado=1";
        $datos = mysqli_query($con, $cadena);
        $con->close();
        return $datos;
    }
    /*UNO: Procedimiento para sacar un registro*/
    public function uno($idUsuarios)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $cadena = "SELECT * FROM `tiposervicio` WHERE id = $idUsuarios and estado=1";
        
        $datos = mysqli_query($con, $cadena);
        $con->close();
        return $datos;
    }
   
    public function unoDetalle($Detalle) 
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $cadena = "SELECT * FROM `tiposervicio` WHERE `detalle` like '%$Detalle%' and estado = 1";
        $datos = mysqli_query($con, $cadena);
        $con->close();
        return $datos;
    }
   
    /*INSERTAR: Procedimiento para insertar */
    public function Insertar($detalle, $valor)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $cadena = "INSERT into tiposervicio(detalle, valor, estado) 
        values ( '$detalle', '$valor',1)";
        if (mysqli_query($con, $cadena)) {
            $con->close();
            return 'ok';
        } else {
            $con->close();
            return 'Error al insertar en la base de datos';
        }
    }
   

    /*ACTUALIZAR: Procedimiento para actualizar */
    public function Actualizar($idTipoServicio, $detalle, $valor, $estado)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $cadena = "update tiposervicio set detalle='$detalle', valor='$valor', estado=$estado where id= $idTipoServicio";
      
        if (mysqli_query($con, $cadena)) {
            $con->close();
            return 'ok';
        } else {
            $con->close();
            return 'error al actualizar el registro';
        }
    }
    /*ELIMINAR: Procedimiento para Eliminar */
    public function Eliminar($idTipoServicio)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $cadena = "DELETE FROM `tiposervicio` WHERE id = $idTipoServicio";
      
        if (mysqli_query($con, $cadena)) {
            $con->close();
            return 'ok';
        } else {
            $con->close();
            return false;
        }
    }
    /*TODO: Procedimiento para Eliminar */
    public function Eliminarsuave($idTipoServicio)
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoConectar();
        $cadena = "UPDATE `tiposervicio` SET `estado`=0 WHERE id = $idTipoServicio";
        if (mysqli_query($con, $cadena)) {
            $con->close();
            return 'ok';
        } else {
            $con->close();
            return false;
        }
    }
}
