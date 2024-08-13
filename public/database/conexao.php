<?php
define('DB_HOST', "localhost");
define('DB_USER', "sa");
define('DB_PASSWORD', "12345678@Leo");
define('DB_DATABASE', "ESCOLA"); // Nome do banco de dados

class Conexao
{
    private static $connection;

    private function __construct() {}

    public static function getConnection()
    {
        $serverName = "localhost"; // Endereço do servidor SQL
        $connectionOptions = array(
            "Database" => "ESCOLA", // Nome do banco de dados
            "Uid" => "sa", // Nome do usuário
            "PWD" => "1234578@Leo", // Senha do usuário
        );

        try {
            if (!self::$connection) {
                self::$connection = sqlsrv_connect($serverName, $connectionOptions);

                if (self::$connection === false) {
                    throw new Exception("Erro de conexão com o banco de dados.<br>" . print_r(sqlsrv_errors(), true));
                } else {
                    echo "Conexão com o banco de dados bem-sucedida!";
                }
            }
            return self::$connection;
        } catch (Exception $e) {
            echo "Erro na conexão: " . $e->getMessage();
            die();
        }
    }
}
