<?php require_once('../html/head2.php');
require_once('../../config/sesiones.php'); ?>

<h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">RegAsis /</span> Vehículos</h4>

<div class="card">
    <button class="btn btn-outline-secondary" 
            data-bs-toggle="modal" data-bs-target="#ModalVehiculos"
            onclick="cargarClientes()">Nuevo Vehículo</button>

    <h5 class="card-header">Lista de Vehículos</h5>

    <div class="table-responsive text-nowrap">
        <table class="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Cliente</th>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Año</th>
                    <th>Motor</th>
                    <th>Acciones</th>
                </tr>
            </thead>

            <tbody id="ListaVehiculos"></tbody>
        </table>
    </div>
</div>

<div class="modal" id="ModalVehiculos">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">

            <div class="modal-header">
                <h5 class="modal-title">Vehículo</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <form id="form_vehiculos">
                <input type="hidden" id="idVehiculo" name="idVehiculo">

                <div class="modal-body">

                    <div class="form-group">
                        <label>Cliente</label>
                        <select name="id_cliente" id="id_cliente" class="form-control" required></select>
                    </div>

                    <div class="form-group">
                        <label>Marca</label>
                        <input type="text" id="marca" name="marca" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Modelo</label>
                        <input type="text" id="modelo" name="modelo" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Año</label>
                        <input type="number" id="anio" name="anio" class="form-control" required>
                    </div>

                    <div class="form-group">
                        <label>Tipo de Motor</label>
                        <select id="tipo_motor" name="tipo_motor" class="form-control">
                            <option value="dos_tiempos">Dos Tiempos</option>
                            <option value="cuatro_tiempos">Cuatro Tiempos</option>
                        </select>
                    </div>

                </div>

                <div class="modal-footer">
                    <button class="btn btn-primary" type="submit">Guardar</button>
                    <button class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>

            </form>
        </div>
    </div>
</div>

<?php require_once('../html/scripts2.php'); ?>
<script src="./vehiculos.js"></script>