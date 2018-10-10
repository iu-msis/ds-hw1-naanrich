<?php
class comment
{
  public $id;
  public $comment;
  public function __construct($row) {
    $this->id = intval($row['id']);
    $this->comment = $row['comment'];
  }
  public static function create() {
    // 1. Connect to the database
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    $sql = 'INSERT INTO commenttable (id, comment)
            VALUES (?,?)';
    // 2. Prepare the query
    $statement = $db->prepare($sql);
    // 3. Run the query
    $success = $statement->execute({
      $this->id,
      $this->comment
    });
    public static function getCommentByCommentId(int $id) {
      $db = new PDO(DB_SERVER, DB_USER, DB_PW);
      $sql = 'SELECT * FROM commenttable WHERE id= ?';
      $statement = $db->prepare($sql);
      $success = $statement->execute(
        [$id]
    );
    }
    // 4. Handle the results
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      $commentItem =  new commenttable($row);
      array_push($arr, $commentItem);
    }
    return $arr;
  }

}
