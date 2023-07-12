// $(document).ready(function () {
//   $('#tabloide').DataTable({
//     language: {
//       url: '//cdn.datatables.net/plug-ins/1.13.5/i18n/pt-BR.json',
//     },
//     fixedHeader: true
//   });
// });

// function agregarFila() {
//   // Capturar los valores de los campos de entrada
//   let cfn = $('#cfn').val();
//   let descri = $('#descri').val();
//   let qty = $('#qty').val();
//   let um = $('#um').val();
//   let lote = $('#lote').val();
//   let precio = parseFloat($('.precio-input').val()); // Obtener el precio como número
//   let subtotal = (precio * qty).toFixed(2); // Calcular el subtotal

//   // Validar que haya una cantidad
//   if (qty <= 0 || isNaN(qty)) {
//     alert('Por favor, insira uma quantidade.');
//     return; // Salir de la función sin agregar la fila
//   }
//   if (precio <= 0 || isNaN(precio)) {
//     alert(' Por favor, insira um preço.');
//     return; // Salir de la función sin agregar la fila
//   }
//   // Agregar el símbolo de R$ a los valores de precio y subtotal
//   precio = 'R$ ' + precio.toFixed(2);
//   subtotal = 'R$ ' + subtotal;


//   // Crear una nueva fila HTML con los valores capturados
//   let nuevaFila = `
//       <tr>
//         <td>${cfn}</td>
//         <td>${descri}</td>
//         <td>${qty}</td>
//         <td>${um}</td>
//         <td>${lote}</td>
//         <td>${precio}</td>
//         <td>${subtotal}</td>
//         <td>
//           <button class="btn btn-success btn-sm mr-1" id="btn-agregar" title="Adicionar">
//             <i class="fas fa-plus"></i>
//           </button>
//           <button class="btn btn-primary btn-sm mr-1" id="btn-editar" title="Editar">
//             <i class="fas fa-edit"></i>
//           </button>
//           <button class="btn btn-danger btn-sm" id="btn-eliminar" title="Eliminar">
//             <i class="fas fa-trash-alt"></i>
//           </button>
//         </td>
//       </tr>`;

//   // Agregar la nueva fila a la tabla
//   $('#tabloide tbody').append(nuevaFila);

//   // Limpiar los campos de entrada después de agregar la fila
//   $('#cfn').val('');
//   $('#descri').val('');
//   $('#qty').val('');
//   $('#um').val('');
//   $('#lote').val('');
//   $('.precio-input').val('');
//   $('.subtotal-input').val('');
// }

// // Evento click del botón "Adicionar"
// $(document).on('click', '#tabloide #btn-agregar', agregarFila);
// //Evento de editar
// $(document).on('click', '#tabloide #btn-editar', function () {
//   // Obtener la fila actual
//   let fila = $(this).closest('tr');

//   // Obtener los valores de las celdas de la fila
//   let cfn = fila.find('td:eq(0)').text();
//   let descri = fila.find('td:eq(1)').text();
//   let qty = fila.find('td:eq(2)').text();
//   let um = fila.find('td:eq(3)').text();
//   let lote = fila.find('td:eq(4)').text();
//   let precio = fila.find('td:eq(5)').text();

//   // Asignar los valores a los campos de entrada
//   $('#cfn').val(cfn);
//   $('#descri').val(descri);
//   $('#qty').val(qty);
//   $('#um').val(um);
//   $('#lote').val(lote);
//   $('.precio-input').val(precio);

//   // Eliminar la fila actual
//   fila.remove();
// });

// $(document).on('click', '#tabloide #btn-eliminar', function () {
//   // Confirmar si el usuario desea eliminar la fila
//   if (confirm('¿Estás seguro de que deseas eliminar esta fila?')) {
//     // Obtener la fila actual y eliminarla
//     $(this).closest('tr').remove();
//   }
// });

$(document).ready(function () {
  cargarFilasDelLocalStorage(); // Cargar filas del localStorage al iniciar la página

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

    // Guardar los datos actualizados en el localStorage
    guardarFilasEnLocalStorage();
  });

  // $(document).on('click', '#tabloide #btn-eliminar', function () {
  //   // Confirmar si el usuario desea eliminar la fila
  //   if (confirm('¿Estás seguro de que deseas eliminar esta fila?')) {
  //     // Obtener la fila actual
  //     let fila = $(this).closest('tr');

  //     // Eliminar la fila de la tabla
  //     fila.remove();

  //     // Guardar los datos actualizados en el localStorage
  //     guardarFilasEnLocalStorage();
  //   }
  // });
  $(document).on('click', '#tabloide #btn-eliminar', function () {
    if (confirm('¿Estás seguro de que deseas eliminar esta fila?')) {
      $(this).closest('tr').remove();
      guardarFilasEnLocalStorage();
    }
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

  calcularTotal();

  // Guardar los datos en el localStorage
  guardarFilasEnLocalStorage();
}

function calcularTotal() {
  let subtotalTotal = 0;

  // Iterar sobre cada fila de la tabla
  $('#tabloide tbody tr').each(function() {
    // Obtener el subtotal de la fila y convertirlo a número
    let subtotal = $(this).find('td:nth-child(7)').text().replace('R$', '').trim();
    subtotal = parseFloat(subtotal.replace(',', '.'));

    // Verificar si el subtotal es un número válido
    if (!isNaN(subtotal)) {
      // Sumar al subtotal total si es un número válido
      subtotalTotal += subtotal;
    }
  });

  // Mostrar el total en el recuadro "Precio" o mostrar 0 si no hay subtotales válidos
  let precio = subtotalTotal > 0 ? 'Total: R$ ' + subtotalTotal.toFixed(2) : 'Total: R$ 0.00';
  $('#precio').text(precio);
}

// Llamar a la función para calcular el total inicial al cargar la página
calcularTotal();

// Actualizar el cálculo del total al agregar, editar o eliminar una fila
$(document).on('click', '#tabloide #btn-agregar, #tabloide #btn-editar, #tabloide #btn-eliminar', function () {
  calcularTotal();
});



function guardarFilasEnLocalStorage() {
  $('#tabloide tbody tr').each(function () {
    let fila = $(this);
    if (!fila.hasClass('fila-eliminada')) {
      let cfn = fila.find('td:eq(0)').text();
      let descri = fila.find('td:eq(1)').text();
      let qty = fila.find('td:eq(2)').text();
      let um = fila.find('td:eq(3)').text();
      let lote = fila.find('td:eq(4)').text();
      let precio = fila.find('td:eq(5)').text();
      let subtotal = fila.find('td:eq(6)').text();

      filas.push({
        cfn: cfn,
        descri: descri,
        qty: qty,
        um: um,
        lote: lote,
        precio: precio,
        subtotal: subtotal
      });
    }
  });

  localStorage.setItem('filas', JSON.stringify(filas));
}


// Llamar a la función para actualizar el precio inicialmente
actualizarPrecio();

function cargarFilasDelLocalStorage() {
  let filas = JSON.parse(localStorage.getItem('filas'));
  if (filas) {
    filas.forEach(function (fila) {
      let nuevaFila = `
        <tr>
          <td>${fila.cfn}</td>
          <td>${fila.descri}</td>
          <td>${fila.qty}</td>
          <td>${fila.um}</td>
          <td>${fila.lote}</td>
          <td>${fila.precio}</td>
          <td>${fila.subtotal}</td>
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
      $('#tabloide tbody').append(nuevaFila);
    });
  }
}



// // Función para limpiar los datos del LocalStorage
// function limpiarLocalStorage() {
//   localStorage.removeItem('filas'); // Eliminar el elemento 'filas' del LocalStorage
//   alert('Los datos se han limpiado correctamente.');
// }

// // Evento click del botón "Limpiar"
// $(document).on('click', '#btn-limpiar', function () {
//   if (confirm('¿Estás seguro de que deseas limpiar los datos?')) {
//     limpiarLocalStorage(); // Llamar a la función para limpiar el LocalStorage
//   }
// });

