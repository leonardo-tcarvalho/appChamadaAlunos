<?php
// Headers para permitir requisições CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Inclui o arquivo de conexão ao banco de dados
include_once '../conexao.php';

// Configuração do banco de dados
$BANCO = "ESCOLA";
$Conexao = Conexao::getConnection($BANCO);

// Captura o corpo da requisição
$data = json_decode(file_get_contents('php://input'), true);

// Verifica se os dados foram recebidos corretamente
if (!$data) {
  echo json_encode(["error" => "Nenhum dado recebido"]);
  exit();
}

// Atribui os valores recebidos às variáveis
$nomeCompleto = $data['nomeCompleto'] ?? null;
$idade = $data['idade'] ?? null;
$cidade = $data['cidade'] ?? null;
$nomeResp = $data['nomeResp'] ?? null;
$codTurma = $data['codTurma'] ?? null;

// Validação básica para garantir que todos os campos estão preenchidos
if (is_null($nomeCompleto) || is_null($idade) || is_null($cidade) || is_null($nomeResp) || is_null($codTurma)) {
  echo json_encode(["error" => "Todos os campos são obrigatórios"]);
  exit();
}

try {
  // Prepara a query para inserir os dados na tabela ALUNOS
  $QUERY = "
        INSERT INTO ALUNOS
        (NOME_COMPL, IDADE, CIDADE, NOME_RESP, COD_TURMA) 
        VALUES
        (:nomeCompleto, :idade, :cidade, :nomeResp, :codTurma)
    ";
  $statement = $Conexao->prepare($QUERY);

  // Vincula os parâmetros da query com os dados recebidos
  $statement->bindParam(':nomeCompleto', $nomeCompleto);
  $statement->bindParam(':idade', $idade);
  $statement->bindParam(':cidade', $cidade);
  $statement->bindParam(':nomeResp', $nomeResp);
  $statement->bindParam(':codTurma', $codTurma);

  // Executa a query
  $statement->execute();

  // Retorna uma resposta de sucesso
  echo json_encode(["success" => "Aluno cadastrado com sucesso"]);
} catch (PDOException $e) {
  // Captura qualquer exceção e retorna um erro com a mensagem
  echo json_encode(["error" => $e->getMessage()]);
}
