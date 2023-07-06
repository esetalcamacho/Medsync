$(document).ready(function () {
    $('#tabloide').DataTable({
        language: {
            url: '//cdn.datatables.net/plug-ins/1.13.5/i18n/pt-BR.json',
        },
        fixedHeader: true
    });
});

function agregarFila() {
    // Capturar los valores de los campos de entrada
    let cfn = $('#cfn').val();
    let descri = $('#descri').val();
    let qty = $('#qty').val();
    let um = $('#um').val();
    let lote = $('#lote').val();
    let precio = parseFloat($('.precio-input').val()); // Obtener el precio como número
    let subtotal = (precio * qty).toFixed(2); // Calcular el subtotal

    // Validar que haya una cantidad
    if (qty <= 0 || isNaN(qty)) {
        alert('Por favor, insira uma quantidade.');
        return; // Salir de la función sin agregar la fila
    }
    if (precio <= 0 || isNaN(precio)) {
        alert(' Por favor, insira um preço.');
        return; // Salir de la función sin agregar la fila
    }
    // Agregar el símbolo de R$ a los valores de precio y subtotal
    precio = 'R$ ' + precio.toFixed(2);
    subtotal = 'R$ ' + subtotal;


    // Crear una nueva fila HTML con los valores capturados
    let nuevaFila = `
      <tr>
        <td>${cfn}</td>
        <td>${descri}</td>
        <td>${qty}</td>
        <td>${um}</td>
        <td>${lote}</td>
        <td>${precio}</td>
        <td>${subtotal}</td>
        <td>
          <button class="btn btn-success btn-sm mr-1" id="btn-agregar" title="Adicionar">
            <i class="fas fa-plus"></i>
          </button>
          <button class="btn btn-primary btn-sm mr-1" id="btn-editar" title="Editar">
            <i class="fas fa-edit"></i>
          </button>
          <button class="btn btn-danger btn-sm" id="btn-eliminar" title="Eliminar">
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>`;

    // Agregar la nueva fila a la tabla
    $('#tabloide tbody').append(nuevaFila);

    // Limpiar los campos de entrada después de agregar la fila
    $('#cfn').val('');
    $('#descri').val('');
    $('#qty').val('');
    $('#um').val('');
    $('#lote').val('');
    $('.precio-input').val('');
    $('.subtotal-input').val('');

}

    // Evento click del botón "Adicionar"
    $(document).on('click', '#tabloide #btn-agregar', agregarFila);
    //Evento de editar
    $(document).on('click', '#tabloide #btn-editar', function () {
        // Obtener la fila actual
        let fila = $(this).closest('tr');

        // Obtener los valores de las celdas de la fila
        let cfn = fila.find('td:eq(0)').text();
        let descri = fila.find('td:eq(1)').text();
        let qty = fila.find('td:eq(2)').text();
        let um = fila.find('td:eq(3)').text();
        let lote = fila.find('td:eq(4)').text();
        let precio = fila.find('td:eq(5)').text();

        // Asignar los valores a los campos de entrada
        $('#cfn').val(cfn);
        $('#descri').val(descri);
        $('#qty').val(qty);
        $('#um').val(um);
        $('#lote').val(lote);
        $('.precio-input').val(precio);

        // Eliminar la fila actual
        fila.remove();
    });

    $(document).on('click', '#tabloide #btn-eliminar', function () {
        // Confirmar si el usuario desea eliminar la fila
        if (confirm('¿Estás seguro de que deseas eliminar esta fila?')) {
            // Obtener la fila actual y eliminarla
            $(this).closest('tr').remove();
        }
    });
