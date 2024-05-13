# Documento de Requisitos - Sistema de Manipulação de Planilhas

## Lista de Features

### 1. Criar Planilha a partir de JSON
- Permitir que o usuário carregue um arquivo JSON e gere uma planilha com os dados.

### 2. Criar Planilha a partir de Array
- Desenvolver uma funcionalidade que aceite arrays de dados (em memória) e crie uma planilha baseada nesses dados.

### 3. Relacionar Duas Planilhas a partir de Arrays
- Criar uma planilha que estabeleça relações entre duas planilhas existentes, baseadas em arrays distintos.
- Permitir que o usuário especifique quais colunas (headers) devem ser relacionadas e o tipo de relação (por exemplo, união, interseção, diferença).

### 4. Relacionar Duas Planilhas a partir de JSONs
- Similar à feature anterior, mas utilizando arquivos JSON como fonte de dados.
- O usuário pode definir quais colunas dos JSONs devem ser relacionadas e o tipo de relação desejada.

### 5. Filtragem e Pesquisa em Planilhas
- Incluir funcionalidades para filtrar e pesquisar dados dentro das planilhas criadas, com base em critérios definidos pelo usuário.

### 6. Exportar Planilhas para Formatos Comuns
- Permitir que as planilhas criadas sejam exportadas para formatos comuns, como CSV, XLSX, ou PDF.