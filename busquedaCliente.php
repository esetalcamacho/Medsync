<?php

// Ejemplo de uso
$connection = mysqli_connect("localhost", "root", "", "medsync");

// Query Sold-to e end Receiver
$term = $_GET['term'];

$cnpjQuery = "SELECT CNPJ, SAP_CODE, Nombre, tipo_cliente FROM clientes WHERE CNPJ LIKE '%" . $term . "%'";
$resultCnpj = mysqli_query($connection, $cnpjQuery);

// $sapCodeQuery = "SELECT CNPJ, SAP_CODE, Nombre, tipo_cliente FROM clientes WHERE SAP_CODE LIKE '%" . $term . "%'";
// $resultSapCode = mysqli_query($connection, $sapCodeQuery);

$datos = array(); // Se crea el array para almacenar los resultados

while ($row = mysqli_fetch_assoc($resultCnpj)) {
    $item = array(
        'value' => $row['CNPJ'],
        'sapCode' => $row['SAP_CODE'],
        'nome' => $row['Nombre'],
        'tipoCliente' => $row['tipo_cliente']
    );
    $datos[] = $item;
}

// SAP CODE

// while ($row = mysqli_fetch_assoc($resultSapCode)) {
//     $item = array(
//         'value' => $row['SAP_CODE'],
//         'cnpj' => $row['CNPJ'],
//         'nome' => $row['Nombre'],
//         'tipoCliente' => $row['tipo_cliente']
//     );
//     $datos[] = $item;
// }

// Se encarga de seleccionar la direccion del cliente

foreach ($datos as &$item) {
    $cliente = $item['sapCode'];
    $direccionQuery = "SELECT Calle, Barrio, CEP, Ciudad, Estado FROM direcciones WHERE Cliente = '" . $cliente . "'";
    $resultDireccion = mysqli_query($connection, $direccionQuery);
    $direccion = mysqli_fetch_assoc($resultDireccion);
    $item['direccion'] = $direccion;
}

// Se toman los datos del array $datos
echo json_encode($datos);

// Cerrar la conexión
mysqli_close($connection);