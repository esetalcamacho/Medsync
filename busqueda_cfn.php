<?php
//Conexion DB
$connection = mysqli_connect("localhost", "root", "", "medsync");

// Obtener el término de búsqueda desde la solicitud
$term = $_GET['term'];

// Consulta para buscar en la tabla inventario
$query = "SELECT CFN, Descricao, LOTE FROM inventario WHERE CFN LIKE '%" . $term . "%'";
$result_cfn = mysqli_query($connection, $query);

// Se organizan los resultados del producto

$producto = array();

while ($row = mysqli_fetch_assoc($result_cfn)) {
    // Crear un array con los valores encontrados
    $cfn = array(
        'value' => $row['CFN'],
        'descricao' => $row['Descricao'],
        'lote' => $row['LOTE'],
    );

    $producto[] = $cfn;
    // Devolver los resultados en formato JSON
}

echo json_encode($producto);

mysqli_close($connection);