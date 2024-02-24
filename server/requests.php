<?php 

$req = $_POST['req'];
include 'db.php';


if ($req == "renderPopularRequest") {
  $stmt = $connection->prepare("SELECT * FROM `art`");
  $stmt->execute();
  $result = $stmt->get_result();
  $data = $result->fetch_all(MYSQLI_ASSOC);
  echo json_encode($data);
}


?>
