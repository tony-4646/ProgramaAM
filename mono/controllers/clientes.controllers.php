<?php
//error_reporting(0);
require_once("../config/conexion.php");
require_once("../models/clientes.models.php");

$clientes = new Clientes();

switch ($_GET["op"]) {

    /* TODO: Listar todos los clientes */
    case "todos":
        $datos = $clientes->todos();
        $lista = array();

        while ($row = mysqli_fetch_assoc($datos)) {
            $lista[] = $row;
        }

        echo json_encode($lista);
        break;

    /* UNO: Listar un cliente */
    case "uno":
        $datos = $clientes->uno($_POST["idCliente"]);
        $resultado = mysqli_fetch_assoc($datos);
        echo json_encode($resultado);
        break;

    /* INSERTAR: Insertar clientes */
    case "insertar":
        $resp = $clientes->Insertar(
            $_POST["nombres"],
            $_POST["apellidos"],
            $_POST["telefono"],
            $_POST["correo"]
        );
        echo json_encode($resp);
        break;

    /* ACTUALIZAR: Actualiza un cliente */
    case "actualizar":
        $resp = $clientes->Actualizar(
            $_POST["idCliente"],
            $_POST["nombres"],
            $_POST["apellidos"],
            $_POST["telefono"],
            $_POST["correo"]
        );
        echo json_encode($resp);
        break;

    /* ELIMINAR: Eliminar un cliente */
    case "eliminar":
        $resp = $clientes->Eliminar($_POST["idCliente"]);
        echo json_encode($resp);
        break;
}