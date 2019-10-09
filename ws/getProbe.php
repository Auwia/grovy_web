<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "u112031db1", "4i340So", "u112031db1");
  
$input = $_GET["probe"];

$result = $conn->query("select status from probe where name='" . $input . "'");

$rs = $result->fetch_array(MYSQLI_ASSOC);
  
$value = $rs["status"];
 
$outp = '{"status": '. $value . '}'; 

if ($input == 'water_level_0') {
  if ($value < 550) 
      $outp = '{"status": 80, "debug": '. $value . '}'; 
  if ($value <= 440) 
      $outp = '{"status": 60, "debug": '. $value . '}'; 
  if ($value <= 330) 
      $outp = '{"status": 40, "debug": '. $value . '}'; 
  if ($value <= 220) 
      $outp = '{"status": 20, "debug": '. $value . '}'; 
  if ($value <= 110) 
      $outp = '{"status": 0, "debug": '. $value . '}'; 
  if ($value >= 550) 
      $outp = '{"status": 100, "debug": '. $value . '}'; 
}
  
if ($input == 'water_level_1') {
  if ($value < 550) 
      $outp = '{"status": 80, "debug": '. $value . '}'; 
  if ($value <= 440) 
      $outp = '{"status": 60, "debug": '. $value . '}'; 
  if ($value <= 330) 
      $outp = '{"status": 40, "debug": '. $value . '}'; 
  if ($value <= 220) 
      $outp = '{"status": 20, "debug": '. $value . '}'; 
  if ($value <= 110) 
      $outp = '{"status": 0, "debug": '. $value . '}'; 
  if ($value >= 550) 
      $outp = '{"status": 100, "debug": '. $value . '}'; 
}

$conn->close();
  
echo($outp);
?>