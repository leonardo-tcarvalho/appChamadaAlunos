<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

include_once '../conexao.php';

$BANCO = "ESCOLA";
$Conexao = Conexao::getConnection($BANCO);

$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
  echo json_encode(["error" => "Nenhum dado recebido"]);
  exit();
}

$nomeCompleto = $data['nomeCompleto'] ?? null;
$disciplina = $data['disciplina'] ?? null;

$QUERY = "
INSERT INTO DOCENTES
  (NOME_COMPL, DISCIPLINA) 
VALUES
  (:nomeCompleto, :disciplina)
";
$statement = $Conexao->prepare($QUERY);

$statement->bindParam(':nomeCompleto', $nomeCompleto);
$statement->bindParam(':disciplina', $disciplina);

$statement->execute();
