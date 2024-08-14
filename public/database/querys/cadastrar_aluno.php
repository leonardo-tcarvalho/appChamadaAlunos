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
$idade = $data['idade'] ?? null;
$cidade = $data['cidade'] ?? null;
$nomeResp = $data['nomeResp'] ?? null;
$codTurma = $data['codTurma'] ?? null;

$QUERY = "
INSERT INTO ALUNOS
  (NOME_COMPL, IDADE, CIDADE, NOME_RESP, COD_TURMA) 
VALUES
  (:nomeCompleto, :idade, :cidade, :nomeResp, :codTurma)
";
$statement = $Conexao->prepare($QUERY);

$statement->bindParam(':nomeCompleto', $nomeCompleto);
$statement->bindParam(':idade', $idade);
$statement->bindParam(':cidade', $cidade);
$statement->bindParam(':nomeResp', $nomeResp);
$statement->bindParam(':codTurma', $codTurma);

$statement->execute();
