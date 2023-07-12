// Esta funcion nos ayuda a order la informacion y llenar los cmapos con base en nuestra consulta
$(document).ready(function autocompletado() {
    $("#cnpjSold").autocomplete({
        source: "busquedaCliente.php",
        select: function (event, ui) {
            $("#sold-to").val(ui.item.sapCode);
            $("#nombre-sold").val(ui.item.nome);
            $("#tipo-cliente").val(ui.item.tipoCliente);
            $("#endereco").val(ui.item.direccion.Calle + ', ' + ui.item.direccion.Barrio + ', CEP: ' + ui.item.direccion.CEP);
            $("#cidade-cliente").val(ui.item.direccion.Ciudad + ', ' + ui.item.direccion.Estado);
        }
    });
    $("#cnpjShip").autocomplete({
        source: "busquedaCliente.php",
        select: function (event, ui) {
            $("#ship-to").val(ui.item.sapCode);
            $("#nombre-ship").val(ui.item.nome);
        }
    });
    $("#cnpjReceiver").autocomplete({
        source: "busquedaCliente.php",
        select: function (event, ui) {
            $("#end-receiver").val(ui.item.sapCode);
            $("#nombre-end").val(ui.item.nome);
        }
    });
    $("#sold-to").autocomplete({
        source: "busquedaCliente.php",
        select: function (event, ui) {
            $("#cnpjSold").val(ui.item.cnpj);
            $("#nombre-sold").val(ui.item.nome);
            $("#tipo-cliente").val(ui.item.tipoCliente);
        }
    });
    $("#end-receiver").autocomplete({
        source: "busquedaCliente.php",
        select: function (event, ui) {
            $("#cnpjReceiver").val(ui.item.cnpj);
            $("#nombre-end").val(ui.item.nome);
        }
    });
    $("#cfn").autocomplete({
        source: "busqueda_cfn.php",
        select: function (event, ui) {
            $("#descri").val(ui.item.descricao);
            $("#lote").val(ui.item.lote);
        }
    });

    // Obtener los datos de autocompletado desde el archivo PHP
});




