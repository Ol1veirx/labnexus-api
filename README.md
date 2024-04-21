<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

### LabNexus: Sistema de Gestão de Projetos de Pesquisa Científica

## 1. Introdução

O LabNexus é uma plataforma online desenvolvida para atender às necessidades de pesquisadores e equipes de laboratório envolvidos em projetos de pesquisa científica. Este sistema oferece uma solução abrangente e integrada para o planejamento, execução e documentação de projetos de pesquisa, visando facilitar a colaboração entre os membros da equipe, otimizar o fluxo de trabalho e promover a excelência científica.

## 2. Objetivos

- Desenvolver uma plataforma centralizada para gestão de projetos de pesquisa científica.
- Permitir o planejamento detalhado de projetos, incluindo definição de objetivos, escopo, cronograma e recursos.
- Facilitar a colaboração entre membros da equipe, promovendo a comunicação eficiente e compartilhamento de informações.
- Oferecer ferramentas para o registro e rastreamento de amostras de laboratório, bem como a análise de dados experimentais.
- Garantir a segurança e integridade dos dados de pesquisa, com medidas robustas de controle de acesso e privacidade.

## 3. Estrutura de Dados

O LabManager utiliza uma estrutura de dados flexível e escalável para armazenar e organizar informações relacionadas aos projetos de pesquisa, membros da equipe, amostras de laboratório, dados experimentais e outros aspectos relevantes, agora incluindo a entidade "User" para gerenciar contas de usuário e permissões de acesso. Abaixo estão as entidades principais e seus respectivos atributos:

# Entidades e Atributos:

User:
- ID: Identificador único do usuário (chave primária)
- Nome: Nome completo do usuário
- E-mail: Endereço de e-mail do usuário (usado como identificador de login)
- Senha: Senha criptografada para acesso à conta do usuário
- Projetos: Lista de projetos criados pelo usuário
- Amostras: Lista de amostras associadas ao usuário
- Experimentos: Lista de experimentos realizados pelo usuário

Projeto:
- ID: Identificador único do projeto (chave primária)
- Título: Título do projeto de pesquisa
- Descrição: Descrição detalhada do projeto
- Objetivos: Objetivos específicos do projeto
- Escopo: Escopo do projeto, delimitando suas atividades e áreas de atuação
- Cronograma: Cronograma de atividades e marcos do projeto
- Status: Status atual do projeto (ativo, concluído, em andamento, etc.)
- ID do Usuário: ID do usuário que criou o projeto (chave estrangeira)

Membro:
- ID: Identificador único do membro (chave primária)
- Nome: Nome completo do membro da equipe
- Cargo: Cargo ou função desempenhada pelo membro no projeto
- Área de Atuação: Área de especialização ou expertise do membro
- E-mail: Endereço de e-mail do membro
- Telefone: Número de telefone do membro
- Projeto Associado: Projeto ao qual o membro está associado (chave estrangeira)


Amostra:
- ID: Identificador único da amostra (chave primária)
- Identificador: Identificador único da amostra no laboratório
- Descrição: Descrição detalhada da amostra, incluindo origem e características
- Localização: Localização física da amostra no laboratório
- Status: Status atual da amostra (disponível, em uso, descartada, etc.)
- ID do Usuário: ID do usuário que registrou a amostra (chave estrangeira)

Experimento:
- ID: Identificador único do experimento (chave primária)
- Título: Título ou nome do experimento
- Descrição: Descrição detalhada do experimento, incluindo metodologia e objetivos
- Dados Experimentais: Dados obtidos durante o experimento, armazenados em formato adequado (por exemplo, arquivos de texto, planilhas, imagens)
- Resultados: Resultados obtidos a partir da análise dos dados experimentais
- Análises Adicionais: Análises complementares realizadas após o experimento
- ID do Usuário: ID do usuário que realizou o experimento (chave estrangeira)


## 4. Casos de Uso

# Caso de Uso 1: Criar Projeto de Pesquisa
Descrição:
Este caso de uso permite que um pesquisador crie um novo projeto de pesquisa no sistema, inserindo informações detalhadas sobre o projeto.

Ator Principal:
Pesquisador

Fluxo Básico:
1. O pesquisador acessa a interface do LabManager e seleciona a opção de criar um novo projeto.
2. O pesquisador preenche um formulário com informações sobre o projeto, como título, descrição, objetivos, escopo e cronograma.
3. O pesquisador confirma os detalhes do projeto e finaliza o processo de criação.

Extensões:
- Se o pesquisador desejar adicionar membros da equipe ao projeto, ele pode convidá-los através do sistema.
Caso de Uso 2: Registrar Amostra de Laboratório

Descrição:
Este caso de uso permite que um membro da equipe registre uma nova amostra de laboratório no sistema, associando-a a um projeto específico.

Ator Principal:
Membro da Equipe

Fluxo Básico:
1. O membro da equipe acessa a interface do LabManager e seleciona o projeto ao qual a amostra será associada.
2. O membro da equipe preenche um formulário com informações sobre a amostra, como

 identificador, descrição, localização e status.
3. O membro da equipe confirma os detalhes da amostra e a registra no sistema.

Extensões:
- Se a amostra exigir análises adicionais, o membro da equipe pode registrar os resultados dos experimentos realizados.


