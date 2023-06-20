<?php
error_reporting(E_ALL);
//Conexion DB
$pdo = new PDO("mysql:host=localhost;dbname=medsync", "root", "");

if (!$pdo) {
    die("Error de conexión: " . mysqli_connect_error());
} else {
    echo "¡Conexión exitosa a la base de datos!";
}

if (isset($_GET['term'])) {
    $term = $_GET['term'];

    $stmt = $pdo->prepare("SELECT CNPJ FROM clientes WHERE CNPJ LIKE :term");
    $stmt->bindValue(':term', '%' . $term . '%');
    $stmt->execute();

    $sugerencias = array();
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $sugerencias[] = $row['cnpj'];
    }

    echo json_encode($sugerencias);
}
?>
?>