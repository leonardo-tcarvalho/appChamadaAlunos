<?php
define('DB_HOST', "localhost");
define('DB_USER', "sa");
define('DB_PASSWORD', "12345678@Leo");
define('DB_DRIVER', "sqlsrv");

class Conexao
{
    private static $connection = null;

    private function __construct() {}

    public static function getConnection($BANCO)
    {
        if ($BANCO == "ESCOLA") {
            $BANCO = "ESCOLA";
        }

        $pdoConfig  = DB_DRIVER . ":Server=" . DB_HOST . ";";
        $pdoConfig .= "Database=" . $BANCO . ";";

        try {
            if (self::$connection === null) {
                self::$connection = new PDO($pdoConfig, DB_USER, DB_PASSWORD);
                self::$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            }
            return self::$connection;
        } catch (PDOException $e) {
            $mensagem = "Drivers disponíveis: " . implode(",", PDO::getAvailableDrivers());
            $mensagem .= "\nErro: " . $e->getMessage();
            throw new Exception($mensagem);
        }
    }
}
