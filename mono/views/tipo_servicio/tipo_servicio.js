function init() {
    $("#form_tipo_servicio").on("submit", (e) => {
        GuardarEditar(e);
    });
}
const ruta = "../../controllers/tipo_servicio.controllers.php?op=";

$().ready(() => {
    $('#Tabla_Tipo_Servicio').DataTable({
        "aProcessing": true,
        "aServerSide": true,
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'pdfHtml5',
                text: 'PDF'
            },
            'excelHtml5',
            'csvHtml5',
            'print' 
        ],
        "ajax": {
            url: ruta + "todos",
            type: "post"
        },
        "bDestroy": true,
        "responsive": false,
        "bInfo": true,
        "iDisplayLength": 10,
        "order": [
            [0, "desc"]
        ],
        "language": {
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla",
            "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        }
    });
    
    $('#ModalTipo_Servicio').on('hidden.bs.modal', function () {
        LimpiarCajas();
        $("#tituloModal").html("Nuevo Servicio de Mecanica"); 
    });
});


var GuardarEditar = (e) => {
    e.preventDefault();
    var DatosFormularioServicio = new FormData($("#form_tipo_servicio")[0]);
    var accion = "";
    var id = document.getElementById("idTipoServicio").value;

    if (id > 0) {
        accion = ruta + "actualizar";
        DatosFormularioServicio.append("idTipoServicio", id);
    } else {
        accion = ruta + "insertar";
    }

    $.ajax({
        url: accion,
        type: "post",
        data: DatosFormularioServicio,
        processData: false,
        contentType: false,
        cache: false,
        success: (respuesta) => {

            respuesta = JSON.parse(respuesta);
            if (respuesta == "ok") {
                alert("Se guardó con éxito");
                $("#Tabla_Tipo_Servicio").DataTable().ajax.reload(null, false);
                $('#ModalTipo_Servicio').modal('hide');
                LimpiarCajas();
            } else {
                alert("Error al guardar el registro");
            }
        },
    });
};

var uno = (idTipoServicio) => {
    $.post(ruta + "uno", { id: idTipoServicio }, (tipo_servicio) => { 
        tipo_servicio = JSON.parse(tipo_servicio);
        console.log(tipo_servicio);
        document.getElementById("idTipoServicio").value = tipo_servicio.id;
        document.getElementById("detalle").value = tipo_servicio.detalle;
        document.getElementById("valor").value = tipo_servicio.valor;
        if (tipo_servicio.estado == 1) {
            document.getElementById("estado").checked = true;
        } else {
            document.getElementById("estado").checked = false;
        }
        updateEstadoLabel();
        $('#ModalTipo_Servicio').modal('show'); 
        $("#tituloModal").html("Editar Servicio de Mecanica"); 
    }).fail(function(xhr, status, error) {
        console.error("Error al obtener datos para edición:", xhr.responseText);
    });
};

var nuevoTipoServicio = () => {
    LimpiarCajas(); 
    $("#tituloModal").html("Nuevo Servicio de Mecanica"); 
}


var eliminar = (idTipoServicio) => {
    if (confirm("¿Estás seguro de eliminar el registro de forma permanente?")) {
        $.post(ruta + "eliminar", { idTipoServicio: idTipoServicio }, (respuesta) => {
            respuesta = JSON.parse(respuesta);
            if (respuesta == "ok") {
                alert("Se eliminó con éxito");
                $("#Tabla_Tipo_Servicio").DataTable().ajax.reload(null, false);
            } else {
                alert("Error al eliminar");
            }
        });
    }
};
var eliminarsuave = (idTipoServicio) => {
    if (confirm("¿Estás seguro de inhabilitar el registro?")) {
        $.post(ruta + "eliminarsuave", { idTipoServicio: idTipoServicio }, (respuesta) => {
            respuesta = JSON.parse(respuesta);
            if (respuesta == "ok") {
                alert("Se inhabilitó con éxito");
                $("#Tabla_Tipo_Servicio").DataTable().ajax.reload(null, false);
            } else {
                alert("Error al eliminar");
            }
        });
    }
};

var LimpiarCajas = () => {
    document.getElementById("idTipoServicio").value = "";
    document.getElementById("detalle").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("estado").checked = false; 
    updateEstadoLabel();
};

var updateEstadoLabel = () => {
    const estadoCheckbox = document.getElementById("estado");
    const estadoLabel = document.getElementById("lblEstado");

    if (estadoCheckbox.checked) {
        estadoLabel.textContent = "Activo";
    } else {
        estadoLabel.textContent = "No Activo";
    }
}

var imprimirTabla = () => {
    var tabla = document.getElementById("Tabla_Tipo_Servicio").innerHTML;
    var contenidoOriginal = document.body.innerHTML;
    document.body.innerHTML = tabla;
    window.print();
    document.body.innerHTML = contenidoOriginal;
}

init();














