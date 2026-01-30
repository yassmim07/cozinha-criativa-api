# API REST para receitas culinárias 


# Visão Geral ⭐
A API Cozinha Criativa oferece funcionalidades de CRUD para cadastro, login e gerenciamento de receitas. Você pode adicionar e salvar suas receitas favoritas, com suas respectivas descrições e ingredientes.

## Contexto de sua criação
Projeto desenvolvido em conjunto com Karol Silvano, no contexto da disciplina Programação Web Front-End, do curso técnico em Desenvolvimento de Sistemas – Senai Suiço-Brasileira.
Esta versão é mantida por mim para fins de estudo, evolução do código e portfólio.

# Requisitos para rodar o projeto 📃 
- Criar um banco de dados no MongoDB Atlas. Caso não saiba, recomendo assistir a este
<a href="https://www.youtube.com/watch?v=qW_NxiWKQak">vídeo</a>.
- Versão 18 ou superior do Node.js.

# Como rodar o projeto localmente 💻
- Com o banco de dados criado e tendo o link de sua conexão, crie o arquivo .env e siga este exemplo:

```
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>/<database>
PORT=3000
```

- No diretório raiz do projeto, execute o comando abaixo para instalar todas as dependências necessárias:
  
```
npm install
```

- Após o término da instalação, execute o comando:

```
node app.js
```

# Testando a API ▶️

> 💡 Observação: Durante o desenvolvimento, foi utilizada uma extensão do Visual Studio Code para realizar requisições HTTP. O passo a passo considera essa ferramenta, mas a API pode ser testada com outras soluções, como Postman ou Insomnia.
> 
### Passos para testar
- Certifique-se de que o servidor da API e o banco de dados estejam em execução.
- Caso utilize o Visual Studio Code, instale a extensão **REST Client**.
- Abra o arquivo `request.test`.
- Neste arquivo possui o passo a passo e exemplos práticos de como testar cada requisição da API. 

# EndPoints ⚙️
* `/`  - Home
* `/api/receitas` - Mostra todas as receitas
* `api/receitas/:id` - Mostra a receita buscando pelo ID

# Resposta da API 📦

**Ao realizar uma requisição `GET /receitas`, a API retorna um objeto JSON com as seguintes propriedades:**
    
### Campos
- **receitas** *(array)*: lista de receitas cadastradas.
- **nome_receita** *(string)*: nome da receita.
- **apresentacao** *(string)*: descrição ou apresentação da receita.
- **tempo_preparo** *(object)*: tempo estimado de preparo da receita.
  - **horas_receita** *(number)*: horas de preparo.
  - **minutos** *(number)*: minutos de preparo.
- **ingredientes** *(array)*: lista de ingredientes da receita.
  - **quantidade** *(number)*: quantidade do ingrediente.
  - **unidade** *(string)*: unidade de medida.
  - **descricao** *(string)*: nome ou descrição do ingrediente.
- **modo_de_preparo** *(array)*: passos para preparo da receita.
  - **passo** *(string)*: descrição de cada etapa.
- **categoria** *(string)*: categoria da receita (ex: sobremesa, prato principal).


# Erros ⚠️
- `404 Not Found:` Erro na requisição.
- `500 Internal Server Error:` Erro no servidor.

# Tecnologias e Linguagens utilizadas 🌐
<a>
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node" />
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
<img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="VSCode" />
</a>

