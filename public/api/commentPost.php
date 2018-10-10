<?php

$work = new comment($_POST);

$comment->create();
echo json_encode($comment);
