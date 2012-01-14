<?php
parse_str($_SERVER['QUERY_STRING'], $params);
$name = isset($params['name']) ? $params['name'] : 'output.wav';
$content = file_get_contents('php://input');
$fh = fopen('audio-out/'.$name, 'w') or die("can't open file");
fwrite($fh, $content);
fclose($fh);
?>
