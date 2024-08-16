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

$nomeAluno = $data['nomeAluno'] ?? null;


$QUERY = "
SELECT
  ALUNO,
  NOME_COMPL,
  IDADE,
  CIDADE,
  COD_TURMA,
  NOME_RESP
FROM 
  ALUNOS
WHERE NOME_COMPL LIKE '%' + :nomeAluno + '%'
";

$statement = $Conexao->prepare($QUERY);
$statement->bindParam(':nomeAluno', $nomeAluno);
$statement->execute();
$resultado = $statement->fetchAll(PDO::FETCH_ASSOC);

header('Content-Type: application/json');
echo json_encode(["ListaAlunos" => $resultado]);
