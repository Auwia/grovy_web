<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "u112031db1", "4i340So", "u112031db1");

$result = $conn->query("select timestamp, area, temperature, humidity from (SELECT timestamp, area, IFNULL(temperature, 0) as temperature, IFNULL(humidity, 0) as humidity from mis order by timestamp desc limit " . $_GET["num"] . ") as t order by timestamp asc");

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