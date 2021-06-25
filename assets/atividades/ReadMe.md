**Estrutura do objeto de atividade**

**Qualquer alteração à sua estrutura quebra a aplicação e será necessário adaptar a aplicação para apresentar a nova estrutura de dados**

**Cada objeto deve estar inclúido na array "atividades" no ficheiro atividades.js nesta pasta ou não será utilizado**

{
dia: **dia em que decorre a atividade**,
imagem: require(**caminho relativo para a imagem ex: '../imagem.jpg**),
overlay: **true/false - ativar overlay, é recomendado para imagens claras**,
encontro: {
hora: **hora do encontro inicial ex: 9:00**,
local: **local do encontro inicial ex: Praça 8 de maio**,
},
despedida: {
hora: **hora de despedida/entrega aos pais ex: 17:30**,
local: **local de despedida/entrega aos pais ex: Biblioteca Municipal**,
},
}
