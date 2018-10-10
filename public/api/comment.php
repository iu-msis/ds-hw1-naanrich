<?php
require '../../app/common.php';
$comment = varchar($_GET['comment'] ?? 0);
// 1. Go to the database and get all teams
$commentArr = comment::getCommentByCommentId($commentId)
// 2. Convert to JSON
$json = json_encode($commentArr, JSON_PRETTY_PRINT);
// 3. Print
header('Content-Type: application/json');
echo $json;
