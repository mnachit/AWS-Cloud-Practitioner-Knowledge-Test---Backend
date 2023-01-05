<?php
    require_once "connection.php";


    class Question
    {
        public $conn;
        public $question;
        public $option;
        public $answer;

        public function __construct()
        {
            $this->conn = new DB;
        }

        public function getQustions()
        {
            $sql = "SELECT * from questions";
            $stm = $this->conn->connection()->query($sql);

            $questions = array();

            while($rows = $stm->fetch())
            {
                $question = array(
                "question" => htmlentities($rows['question']),
                "options" => explode(",", htmlentities($rows['options'])),
                "answer" => htmlentities($rows['answer'])
                );
                array_push($questions, $question);
            }
            return $questions;
        }
    }

    $Question1 = new Question();

    $Question2 = $Question1->getQustions();

    // echo "<pre>";
    echo json_encode($Question2,JSON_PRETTY_PRINT);
    // echo "<pre>";
?>