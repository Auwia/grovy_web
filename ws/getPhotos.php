<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");
  
  $conn = new mysqli("localhost", "u112031db1", "4i340So", "u112031db1");
  
  $result = $conn->query("select timestamp, images, now() from images order by timestamp desc limit 100");
  
  $outp = "";
  
  while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"timestamp":"'  . $rs["timestamp"] . '",';
    $outp .= '"images":"data:image/png;base64,'. $rs["images"]    . '"}';
  }
  
  $outp = "[" . $outp . "]";
  
  $conn->close();
  
  echo($outp);
?>
