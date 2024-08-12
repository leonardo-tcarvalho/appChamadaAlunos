<?php
define('DB_HOST', "localhost");
define('DB_USER', "sa");
define('DB_PASSWORD', "50062493@Leo");
define('DB_DRIVER', "sqlsrv");

$v_linked_server_lyceum =  "ESCOLA.dbo.";

class Conexao
{
    private static $connection;

    private function __construct() {}

    public static function getConnection($BANCO)
    {
        $BANCO = "ESCOLA";
        $pdoConfig  = DB_DRIVER . ":" . "Server=" . DB_HOST . ";";
        $pdoConfig .= "Database=" . $BANCO . ";";

        try {
            if (!isset($connection)) {
                $connection =  new PDO($pdoConfig, DB_USER, DB_PASSWORD);
                $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            }
            return $connection;
        } catch (PDOException $e) {
            $mensagem = "Drivers disponiveis: " . implode(",", PDO::getAvailableDrivers());
            $mensagem .= "\nErro: " . $e->getMessage();
            throw new Exception($mensagem);
        }
    }
}
