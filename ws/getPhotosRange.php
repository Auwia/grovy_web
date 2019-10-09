<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");
  
  $conn = new mysqli("localhost", "u112031db1", "4i340So", "u112031db1");
  
  $from = $_GET["from"];
  $to =   $_GET["to"];

  $format = 'Y-m-d';
  $from_test = DateTime::createFromFormat($format, $from);
  $to_test = DateTime::createFromFormat($format, $to);

  if ($from_test && $to_test && $from_test->format($format) == $from && $to_test->format($format) == $to) {
    $result = $conn->query("select timestamp, images, now() from images where date(timestamp) between '" . $from . "' and '" . $to . "' and minute(timestamp)=0 order by timestamp desc");
  }
  
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