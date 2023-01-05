<?php

    class DB1 {
        public $host = "localhost";
        public $user = "root";
        public $pass = "";
        public $dbname = "mini";

        public function connection()
        {
            try{
                $dsn = 'mysql:host='.$this->host.';dbname='.$this->dbname;
                $pdo = new PDO($dsn, $this->user, $this->pass);

                return $pdo;
            }
            catch(PDOException $e)
            {
                echo "Error: ". $e->getMessage();
            }
        }

        public function __destruct()
        {
            $this->pdo = NULL;
        }
    }

    // require_once "connection.php";


    class Question
    {
        public $conn;
        public $question;
        public $option;
        public $answer;

        public function __construct()
        {
            $this->conn = new DB1;
        }

        public function getQustions()
        {
            $sql = "SELECT answers.user_answer as option answers.question_id ,questions.* FROM questions JOIN answers ON questions.question = answers.question_id";
            $stm = $this->conn->connection()->query($sql);

            $questions = array();
            while ($row = $stm->fetch_assoc()) {
                // Récupérez la question et l'option
                $question = $row['question'];
                $option = $row['option'];

            if (!isset($questions[$question])) {
                $questions[$question] = array(
                  'question' => $question,
                  'options' => array()
                );
              }
            
              // Ajoutez l'option au tableau d'options de la question
              $questions[$question]['options'][] = $option;
            }
            
            // Transformez le tableau associatif en tableau indexé
            $questions = array_values($questions);

            return $questions;
        }
    }

    $Question1 = new Question();

    $Question2 = $Question1->getQustions();

    echo "<pre>";
    echo json_encode($Question2,JSON_PRETTY_PRINT);
    echo "<pre>";
?>