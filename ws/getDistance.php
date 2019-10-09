<?php
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");
  
  $conn = new mysqli("localhost", "u112031db1", "4i340So", "u112031db1");
  
  $input = $_GET["period"];

  if (isset($_GET["sensor"])) { 
    $sensor = $_GET["sensor"];
  }
  
  $format = 'Y-m-d';
  $d = DateTime::createFromFormat($format, $input);
    
  if ($input == "Last 15") {
    $query = "select timestamp, distance from (SELECT timestamp, distance from mis_distance where area = 'Distance_{$sensor}' order by timestamp desc limit 30) as t order by timestamp asc";
  }
  
  if ($d && $d->format($format) == $input) {
    $query = "select timestamp, distance from mis_distance where date(timestamp) = '" . $input . "' and area ='Distance_{$sensor}' order by timestamp asc";
  }
  
  if ($input == "Month") {
    $query = "select date_format(timestamp, '%b %d') as timestamp, distance from mis_distance where MONTH(timestamp) = MONTH(now()) and YEAR(timestamp) = YEAR(now()) and area ='Distance_{$sensor}' GROUP BY YEAR(timestamp), MONTH(timestamp), DAY(timestamp) order by timestamp asc";
  }
  
  if ($input == "6 Months") {
    $query = "select date_format(timestamp, '%m/%d') as timestamp, distance from mis_distance a where a.timestamp > DATE_SUB(now(), INTERVAL 6 MONTH) and area ='Distance_{$sensor}' GROUP BY YEAR(timestamp), MONTH(timestamp), DAY(timestamp) order by a.timestamp asc";
  }
  
  if ($input == "Year") {
    $query = "select timestamp, distance from mis_distance where timestamp > DATE_SUB(now(), INTERVAL 1 YEAR) and area ='Distance_{$sensor}' GROUP BY YEAR(timestamp), MONTH(timestamp) order by timestamp asc";
  }
  
  $result = $conn->query($query);
  
  $outp = "";
  while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"timestamp":"'  . $rs["timestamp"] . '",';
    $outp .= '"distance":'. $rs["distance"]    . '}'; 
  }
  
  $outp ='['.$outp.']';
  $conn->close();
  echo($outp);    
?>