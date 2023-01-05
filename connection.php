<?php

    class DB {
        public $host = "localhost";
        public $user = "root";
        public $pass = "";
        public $dbname = "quiz";

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

?>