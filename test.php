<?php
$token = '7536567492:AAHTGbJZXi2g7N_qY-AnpTBMZ6jHFYM42eM';
$chat_id = '8191508290';

$message = "✅ Test message from server.";

$url = "https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=" . urlencode($message);

$response = file_get_contents($url);

echo $response;
?>
