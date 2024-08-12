<?php
include_once '../conexao.php';
$BANCO = "ESCOLA";
$Conexao = Conexao::getConnection($BANCO);

$nomeCompleto = $_POST['nomeCompleto'];
$idade = $_POST['idade'];
$cidade = $_POST['cidade'];
$nomeResp = $_POST['nomeResp'];
$codTurma = $_POST['codTurma'];

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
