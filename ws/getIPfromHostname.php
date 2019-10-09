<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$ip = gethostbyname('e73173-mysql.services.easyname.eu');
echo json_encode($ip);

?>