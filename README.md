# Front-End - Avaliação Squid

## Descrição

Projeto desenvolvido em React para avaliação pela Squid, utilizando os assets e instruções localizados no repositório [FRONT BASIC](https://github.com/squidit/front-basic) e do framework e guia de estilo [SQUID CSS](https://css.squidit.com.br/).

Este projeto realiza uma requisição à API de teste da Squid, que retorna informações do feed do Instagram da conta [@squidinfluencers](https://www.instagram.com/squidinfluencers/). As informações obtidas são utilizadas para criar um feed de imagens interativo. Ao passar o mouse sobre uma imagem, são exibidas informações adicionais relacionadas à imagem, permitindo ao usuário visualizar detalhes do post do Instagram. Além disso, ao clicar na imagem, uma nova guia é aberta, direcionando para o post correspondente no Instagram.


## Instruções de execução

Para executar o projeto em seu ambiente local, siga as seguintes instruções:

Clone este repositório para o seu computador utilizando o comando `git clone https://github.com/danielpcs/front-basic.git`.

Instale as dependências necessárias executando o comando `npm install` ou `yarn install`.

Execute o projeto com o comando `npm start` ou `yarn start`.

Acesse o projeto em seu navegador utilizando o endereço http://localhost:3000.

É possível alterar o valor da variável de ambiente `REACT_APP_FEED_API` localizado no arquivo `.env` para realizar a requisição para uma API diferente.

## Funcionalidades

O projeto apresenta as seguintes funcionalidades:

- **Feed de imagens interativo:** O projeto exibe um feed de imagens obtidas através da API de teste da Squid, que corresponde ao feed do Instagram da conta @squidinfluencers.

- **Prévia das informações ao passar o mouse:** Ao posicionar o mouse sobre uma imagem no feed, são exibidos detalhes do post do Instagram associado. Esses detalhes incluem o usuário que fez o post, o número de curtidas recebidas, o número de comentários e a data em que o post foi publicado.

- **Redirecionamento para o post completo:** Ao clicar em uma imagem do feed, o projeto abre uma nova guia do navegador, direcionando o usuário para o post completo no Instagram. Isso facilita a visualização e interação com o conteúdo original.

- **Indicador de carregamento:** Durante a realização da requisição à API, o projeto exibe um loader para mostrar visualmente que a requisição está em andamento. Isso proporciona uma melhor experiência ao usuário, informando que os dados estão sendo carregados.

- **Tratamento de erros na API:** O projeto lida com possíveis respostas negativas da API, exibindo uma mensagem de erro caso ocorra algum problema ao obter os dados do feed.

- **Design responsivo:** Utilizei o framework e guia de estilos CSS da empresa para construir o site de forma responsiva, garantindo uma experiência consistente em diferentes dispositivos.


Essas funcionalidades proporcionam uma experiência interativa ao usuário, permitindo explorar o feed de imagens da conta @squidinfluencers, obter informações adicionais sobre cada imagem ao passar o mouse e acessar os posts completos no Instagram com facilidade.

## Tecnologias utilizadas

- [React](https://react.dev/)
- [Squid CSS](https://css.squidit.com.br/)
- [Axios](https://axios-http.com/)

## Decisões de design

Decidi adotar o Axios em substituição ao fetch() devido à minha maior familiaridade e aos recursos adicionais.

Em relação ao tratamento de datas, optei por não fazer uso de bibliotecas adicionais, pois o método Date.toLocaleString(), com a configuração correta, já me fornecia a representação da data de maneira suficientemente próxima do resultado desejado.

No desenvolvimento do projeto, criei um hook personalizado que se utiliza do useReducer() para gerenciar os estados da requisição.

Implementei os atributos srcset e size para otimizar o carregamento das imagens, garantindo que dispositivos com resoluções menores não precisem carregar imagens excessivamente grandes.

## Teste de responsividade

Testes de responsividade foram realizados em diferentes dispositivos e navegadores.

**Dispositivos Desktop:**
- Windows:
    - Google Chrome
    - Mozilla Firefox
    - Microsoft Edge

**Dispositivos Mobile:**
- Android:
  - Google Chrome
  - Samsung Internet
- iOS:
  - Safari
