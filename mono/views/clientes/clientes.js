function init() {
    $("#form_clientes").on("submit", function (e) {
        GuardarEditar(e);
    });
}

const ruta = "../../controllers/clientes.controllers.php?op=";

$().ready(() => {
    CargaLista();
});

var CargaLista = () => {
    var html = "";
    $.get(ruta + "todos", (data) => {
        data = JSON.parse(data);
        $.each(data, (index, c) => {
            html += `<tr>
        <td>${index + 1}</td>
        <td>${c.nombres}</td>
        <td>${c.apellidos}</td>
        <td>${c.telefono}</td>
        <td>${c.correo_electronico}</td>
        <td>
            <button class='btn btn-primary' data-bs-toggle="modal" data-bs-target="#ModalClientes" onclick='uno(${c.id})'>Editar</button>
            <button class='btn btn-danger' onclick='eliminar(${c.id})'>Eliminar</button>
        </td>
      </tr>`;
        });
        $("#ListaClientes").html(html);
    });
};

var GuardarEditar = (e) => {
    e.preventDefault();
    var formData = new FormData($("#form_clientes")[0]);
    let accion = "";

    if ($("#idCliente").val() > 0) {
        accion = ruta + "actualizar";
        formData.append("idCliente", $("#idCliente").val());
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
                LimpiarCajas();
            }
        },
    });
};

var uno = (id) => {
    $.post(ruta + "uno", { idCliente: id }, (data) => {
        data = JSON.parse(data);
        $("#idCliente").val(data.id);
        $("#nombres").val(data.nombres);
        $("#apellidos").val(data.apellidos);
        $("#telefono").val(data.telefono);
        $("#correo").val(data.correo_electronico);
    });
};

var eliminar = (id) => {
    $.post(ruta + "eliminar", { idCliente: id }, (resp) => {
        resp = JSON.parse(resp);
        if (resp == "ok") {
            alert("Eliminado");
            CargaLista();
        }
    });
};

var LimpiarCajas = () => {
    $("#idCliente").val("");
    $("#nombres").val("");
    $("#apellidos").val("");
    $("#telefono").val("");
    $("#correo").val("");
    $("#ModalClientes").modal("hide");
};

init();