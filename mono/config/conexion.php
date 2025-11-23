<?php
class ClaseConectar
{
    public $conexion;
    protected $db;
    private $host = "localhost";
    private $usu = "root";
    private $clave = "";
    private $base = "mecanica";

    public function ProcedimientoConectar()
    {
        $this->conexion = mysqli_connect($this->host, $this->usu, $this->clave, $this->base);

        mysqli_query($this->conexion, "SET NAMES utf8");

        if (!$this->conexion) {
            die("Error al conectarse con mysql: " . mysqli_connect_error());
        }
        return $this->conexion;
    }
}
?>