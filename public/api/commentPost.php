<?php

$work = new Comment($_POST);

$comment->create();
echo json_encode($comment);
