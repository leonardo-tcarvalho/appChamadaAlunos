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

$codDocente = $data['codDocente'] ?? null;
$nomeTurma = $data['nomeTurma'] ?? null;
$grade = $data['grade'] ?? null;
$serie = $data['serie'] ?? null;

$QUERY = "
INSERT INTO TURMAS
  (COD_DOCENTE, DATA_INSERCAO, NOME_TURMA, GRADE, SERIE) 
VALUES
  (:codDocente, GETDATE(), :nomeTurma, :grade, :serie)
";
$statement = $Conexao->prepare($QUERY);

$statement->bindParam(':codDocente', $codDocente);
$statement->bindParam(':nomeTurma', $nomeTurma);
$statement->bindParam(':grade', $grade);
$statement->bindParam(':serie', $serie);

$statement->execute();
