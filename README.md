# Share Eat - Cardápio

## Teste Técnico - Wine Locals

![image](https://user-images.githubusercontent.com/25160385/141389389-ab37bde8-cb3d-45bf-9ad5-da00ed81de0f.png)


### Sobre o Desafio Técnico

> Visando melhorar seu algoritmo de sugestão de lugares, o Wine Locals precisa conhecer o cardápio dos lugares (bares, restaurantes, lanchonetes, cafés, etc) exibidos no app. Para tanto, precisamos construir a seguinte funcionalidade:

#### Frontend

- Criar a tela de lista de lugares exibindo nome, quantidade de pratos , novo prato e visualizar o detalhe do lugar

- Criar a tela de exibição do detalhe de lugares

- Criar o formulário de cadastro de pratos com nome, descrição e preço

#### Funcionamento

- As telas devem ser responsivas a dispositivos desktop e mobile

- Ao clicar no card do lugar, deve exibir o detalhe do lugar

- Ao clicar no botão ( + ) na lista de lugares, deve exibir o formulário de cadastro do prato

- Ao clicar no botão ( + ) no detalhe do lugar, deve exibir o formulário de cadastro do prato

- O clicar no ícone < deve voltar pra tela anterior

### Como executar localmente

 1. Realize o clone do projeto em um diretório de sua preferência
 2. Dentro do diretório, execute ```yarn``` ou ```npm install```
 3. Execute o script ***start***. ```yarn start``` ou ```npm start```
 4. Seu navegador abra [http://localhost:3000](http://localhost:3000). 

### Criando o Build

 1. Execute ```yarn build``` ou ```npm run build```
 2. O build será gerado dentro da pasta ***dist***


 ## Sobre o Projeto

Projeto desenvolvido utilizado o create-react-app

### Tecnologias e Recursos

 - React v17
 - React Router Dom v6
 - StyledComponents

#### Qualidade de Código e Formatação
- Prettier
- EsLint Airbnb

### Metodologias aplicadas
#### Mobile First
Toda a interface foi desenvolvida focada no Mobile, tendo em seguida suas versões desktop criadas

#### Uso de Adapters
Partindo pelo princípio que a aplicação hoje utiliza informações locais, os adapters permitem facilidade de implementação de outras formas para a execução dessas ações, por exemplo, com um fecth em uma API.

#### Lógica desacoplada dos Componentes
Com o intuito de deixar os componentes responsáveis somente pela UI, todas as ações que envolvem regras de negócio, são alocados em Services.

### TODO
-[ ] Tratar caso o usuário informe via rota um id inexistente
-[ ] Testes da aplicação em dispositivos Apple (Safari)
-[ ] Implementação de Testes (funcionais, integração e end-to-end)