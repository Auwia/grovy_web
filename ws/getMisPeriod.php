<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "u112031db1", "4i340So", "u112031db1");
  
$input = $_GET["period"];

$format = 'Y-m-d';
$d = DateTime::createFromFormat($format, $input);

if ($d && $d->format($format) == $input) {
  $query = "select area, timestamp, round(IFNULL(temperature, 0),2) as temperature, round(IFNULL(humidity, 0),2) as humidity from mis where date(timestamp) = '" . $input . "' order by timestamp asc";
}
  
if ($input == "Last 15") {
  $query = "SELECT timestamp, area, IFNULL(round(temperature, 2), 0) AS temperature, IFNULL(round(humidity, 2), 0) AS humidity FROM u112031db1.mis WHERE area in ('Left', 'Right', 'Middle', 'Outside') and timestamp BETWEEN (now() - interval 30 minute) AND now();";
}  

if ($input == "Month") {
  $query = "select area, date_format(timestamp, '%b %d') as timestamp, round(AVG(IFNULL(temperature, 0)), 2) as temperature, round(avg(IFNULL(humidity, 0)), 2) as humidity from mis where MONTH(timestamp) = MONTH(now()) and YEAR(timestamp) = YEAR(now()) GROUP BY area, YEAR(timestamp), MONTH(timestamp), DAY(timestamp) order by timestamp asc";
}
  
if ($input == "6 Months") {
  $query = "select area, date_format(timestamp, '%m/%d') as timestamp, round(AVG(IFNULL(temperature, 0)), 2) as temperature, round(avg(IFNULL(humidity, 0)), 2) as humidity from mis a where a.timestamp > DATE_SUB(now(), INTERVAL 6 MONTH) GROUP BY area, YEAR(timestamp), MONTH(timestamp), DAY(timestamp) order by a.timestamp asc";
}
  
if ($input == "Year") {
  $query = "select area, timestamp, round(AVG(IFNULL(temperature, 0)), 2) as temperature, round(avg(IFNULL(humidity, 0)), 2) as humidity from mis where timestamp > DATE_SUB(now(), INTERVAL 1 YEAR) GROUP BY area, YEAR(timestamp), MONTH(timestamp) order by timestamp asc";
}
  
$result = $conn->query($query);

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"timestamp":"'  . $rs["timestamp"] . '",';
    $outp .= '"area":"'   . $rs["area"]        . '",';
    $outp .= '"temperature":'. $rs["temperature"]     . ','; 
    $outp .= '"humidity":'. $rs["humidity"]     . '}'; 
}
$outp ='['.$outp.']';
$conn->close();

echo($outp);
?>