<?php
include_once '../conexao.php';
$BANCO = "ESCOLA";
$Conexao = Conexao::getConnection($BANCO);

$nomeCompleto = $_REQUEST['nomeCompleto'];
$idade = $_REQUEST['idade'];
$cidade = $_REQUEST['cidade'];
$nomeResp = $_REQUEST['nomeResp'];
$codTurma = $_REQUEST['turma'];

$QUERY = "
  INSERT INTO 
  ALUNOS
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

if ($statement->execute()) {
  echo json_encode(["message" => "Aluno cadastrado com sucesso!"]);
} else {
  echo json_encode(["message" => "Erro ao cadastrar aluno."]);
}
