<?php
class Person
{
  public $id;
  public $comment;
  public function __construct($data) {
    $this->id = intval($data['id']);
    $this->comment = $data['comment'];
  }
  public static function fetchAll() {
    // 1. Connect to the database
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    // 2. Prepare the query
    $sql = 'SELECT * FROM Comment';
    $statement = $db->prepare($sql);
    // 3. Run the query
    $success = $statement->execute();
    // 4. Handle the results
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      $theTeam =  new Comment($row);
      array_push($arr, $theComment);
    }
    return $arr;
  }
}
