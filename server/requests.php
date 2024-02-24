<?php 

$req = $_POST['req'];
include 'db.php';


if ($req == "renderPopularRequest") {
    $stmt = $connection->prepare("SELECT `id`, `name`, `img`, `short_desc`   FROM `art`");
    $stmt->execute();
    $result = $stmt->get_result();
    $data = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($data);
}

if ($req == "renderArt") {
    $artNum = $_POST['artNum'];
    $stmt = $connection->prepare("SELECT `id`, `name`, `descript` FROM `art` WHERE `id` = $artNum");
    $stmt->execute();
    $result = $stmt->get_result();
    $data = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($data);
}

?>
