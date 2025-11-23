function init() {
    $("#form_vehiculos").on("submit", function(e) {
        GuardarEditar(e);
    });
}

const ruta = "../../controllers/vehiculos.controllers.php?op=";

$().ready(() => {
    CargaLista();
});

var CargaLista = () => {
    var html = "";
    $.get(ruta + "todos", (data) => {
        data = JSON.parse(data);
        $.each(data, (index, v) => {
            html += `<tr>
                <td>${index + 1}</td>
                <td>${v.nombres} ${v.apellidos}</td>
                <td>${v.marca}</td>
                <td>${v.modelo}</td>
                <td>${v.anio}</td>
                <td>${v.tipo_motor}</td>
                <td>
                    <button class='btn btn-primary' data-bs-toggle="modal" 
                        data-bs-target="#ModalVehiculos" onclick='uno(${v.id})'>Editar</button>

                    <button class='btn btn-danger' onclick='eliminar(${v.id})'>Eliminar</button>
                </td>
            </tr>`;
        });
        $("#ListaVehiculos").html(html);
    });
};

var GuardarEditar = (e) => {
    e.preventDefault();
    var formData = new FormData($("#form_vehiculos")[0]);
    let accion = "";

    if ($("#idVehiculo").val() > 0) {
        accion = ruta + "actualizar";
        formData.append("idVehiculo", $("#idVehiculo").val());
    } else {
        accion = ruta + "insertar";
    }

    $.ajax({
        url: accion,
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: (resp) => {
            resp = JSON.parse(resp);
            if (resp == "ok") {
                alert("Guardado correctamente");
                CargaLista();
                Limpiar();
            }
        }
    });
};

var uno = async (id) => {
    await cargarClientes();
    $.post(ruta + "uno", { idVehiculo: id }, (data) => {
        data = JSON.parse(data);
        $("#idVehiculo").val(data.id);
        $("#id_cliente").val(data.id_cliente);
        $("#marca").val(data.marca);
        $("#modelo").val(data.modelo);
        $("#anio").val(data.anio);
        $("#tipo_motor").val(data.tipo_motor);
    });
};

var eliminar = (id) => {
    $.post(ruta + "eliminar", { idVehiculo: id }, (resp) => {
        resp = JSON.parse(resp);
        if (resp == "ok") {
            alert("Eliminado correctamente");
            CargaLista();
        }
    });
};

var cargarClientes = () => {
    return new Promise((resolve, reject) => {
        var html = `<option value="">Seleccione cliente</option>`;

        $.post("../../controllers/clientes.controllers.php?op=todos", (data) => {
            data = JSON.parse(data);
            data.forEach(c => {
                html += `<option value="${c.id}">${c.nombres} ${c.apellidos}</option>`;
            });

            $("#id_cliente").html(html);
            resolve();
        }).fail(() => reject());
    });
};

var Limpiar = () => {
    $("#idVehiculo").val("");
    $("#marca").val("");
    $("#modelo").val("");
    $("#anio").val("");
    $("#tipo_motor").val("dos_tiempos");
    $("#ModalVehiculos").modal("hide");
};

init();