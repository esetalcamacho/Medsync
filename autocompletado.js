$(document).ready(function () {
    $("#cnpjSold").autocomplete({
        source: "conexion.php",
        select: function (event, ui) {
            $("#sold-to").val(ui.item.sapCode);
            $("#nombre-sold").val(ui.item.nome);
            $("#tipo-cliente").val(ui.item.tipoCliente);
        }
    });
    $("#cnpjReceiver").autocomplete({
        source: "conexion.php",
        select: function (event, ui) {
            $("#end-receiver").val(ui.item.sapCode);
            $("#nombre-end").val(ui.item.nome);
        }
    });
    $("#sold-to").autocomplete({
        source: "conexion.php",
        select: function (event, ui) {
            $("#cnpjSold").val(ui.item.label);
            $("#nombre-end").val(ui.item.nome);
        }
    });
});
