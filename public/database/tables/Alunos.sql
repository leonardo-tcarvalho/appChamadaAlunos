CREATE TABLE ALUNOS (
  ALUNO INT IDENTITY(1, 1) PRIMARY KEY,
  NOME_COMPL VARCHAR(100),
  IDADE INT,
  CIDADE VARCHAR(100) TURMA VARCHAR(10),
  NOME_RESP VARCHAR(100),
  TURMA INT,
  FOREIGN KEY (TURMA) REFERENCES TURMAS(COD_TURMA)
);