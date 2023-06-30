<?php
//Conexion DB
$connection = mysqli_connect("localhost", "root", "", "medsync");
// Query Sold-to e end Receiver
$term = $_GET['term']; // Obtenemos el termino de busqueda de CNPJ
// $term2 = $_GET['term2'];

// $cnpj = "SELECT CNPJ, SAP_CODE, Nombre, tipo_cliente FROM clientes WHERE CNPJ LIKE '%".$term."%' OR SAP_CODE LIKE '%".$term."%'";
$cnpj = "SELECT CNPJ, SAP_CODE, Nombre, tipo_cliente FROM clientes WHERE CNPJ LIKE '%".$term."%'";
$resultCliente = mysqli_query($connection, $cnpj);

$datos = array();
while ($row = mysqli_fetch_assoc($resultCliente)) {
    $item = array(
        'label' => $row['CNPJ'],
        'sapCode' => $row['SAP_CODE'],
        'nome' => $row['Nombre'],
        'tipoCliente' => $row['tipo_cliente']
    );
    $datos[] = $item;
}

echo json_encode($datos);
