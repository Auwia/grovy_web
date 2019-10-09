<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "u112031db1", "4i340So", "u112031db1");
  
$input = $_GET["period"];

$format = 'Y-m-d';
$d = DateTime::createFromFormat($format, $input);
  
if ($input == "Last 15") {
  $query = "select timestamp, voltage, current, power, pph from (SELECT timestamp, voltage, current, power, pph  from mis_ele order by timestamp desc limit 30) as t order by timestamp asc";
}  

if ($input == "Month") {
  $query = "select date_format(timestamp, '%b %d') as timestamp, round(AVG(voltage), 2) as voltage, round(avg(current), 2) as current, round(avg(power), 2) as power, round(avg(pph), 2) as pph from mis_ele where MONTH(timestamp) = MONTH(now()) and YEAR(timestamp) = YEAR(now()) GROUP BY YEAR(timestamp), MONTH(timestamp), DAY(timestamp) order by timestamp asc";
}
  
if ($input == "6 Months") {
  $query = "select date_format(timestamp, '%m/%d') as timestamp, round(AVG(voltage), 2) as voltage, round(avg(current), 2) as current, round(avg(power), 2) as power, round(avg(pph), 2) as pph from mis_ele a where a.timestamp > DATE_SUB(now(), INTERVAL 6 MONTH) GROUP BY YEAR(timestamp), MONTH(timestamp), DAY(timestamp) order by a.timestamp asc";
}
  
if ($input == "Year") {
  $query = "select timestamp, round(AVG(voltage), 2) as voltage, round(avg(current), 2) as current, round(avg(power), 2) as power, round(avg(pph), 2) as pph from mis_ele where timestamp > DATE_SUB(now(), INTERVAL 1 YEAR) GROUP BY YEAR(timestamp), MONTH(timestamp) order by timestamp asc";
}

if ($d && $d->format($format) == $input) {
  $query = "select timestamp, voltage, current, power, pph from mis_ele where date(timestamp) = '" . $input . "' order by timestamp asc";
}
  
  
$result = $conn->query($query);

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"timestamp":"'  . $rs["timestamp"] . '",';
    $outp .= '"voltage":'   . $rs["voltage"]        . ',';
    $outp .= '"current":'. $rs["current"]     . ','; 
    $outp .= '"power":'. $rs["power"]     . ',';
    $outp .= '"pph":'. $rs["pph"]    . '}'; 
}
$outp ='['.$outp.']';
$conn->close();

echo($outp);
?>