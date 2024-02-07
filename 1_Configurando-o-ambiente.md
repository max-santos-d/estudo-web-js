# Configurando o ambiente

## ìndice

- [Configurando o ambiente](#configurando-o-ambiente)
  - [ìndice](#ìndice)
  - [Instalando o Node e VSCode em ambiente linux](#instalando-o-node-e-vscode-em-ambiente-linux)
  - [Inicializando o Git em um projeto](#inicializando-o-git-em-um-projeto)
    - [Para criar um novo repositório no GitHub, siga os passos abaixo](#para-criar-um-novo-repositório-no-github-siga-os-passos-abaixo)
    - [Criação de chave SSH](#criação-de-chave-ssh)
  - [inicialização do npm](#inicialização-do-npm)

## Instalando o Node e VSCode em ambiente linux

Atualize o sistema:

~~~bash
# Código Bash

sudo apt update
sudo apt upgrade
~~~

Instale o Node.js usando o NodeSource:

~~~bash
# Código Bash

curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
~~~

Verifique a instalação do Node.js:

~~~bash
# Código Bash

node -v
npm -v
~~~

Instale o VSCode:

A instalação no Linux é relativamente simples, basta acessar o [site oficial do Visual Studio Code](https://code.visualstudio.com/) e fazer o Download da sua última versão, clicando no botão "Download for Linux".

Como resultado do Download você terá um pacote .deb na pasta Downloads. Abra um terminal, navegue até a mesma e execute o seguinte comando:

~~~bash
# Código Bash

sudo apt install ./ARQUIVO_BAIXADO.deb
~~~

Adicionando ao PATH
Podemos ainda adicionar o Visual Studio Code ao PATH para ter acesso ao comando code no terminal, podendo abrir diretamente pastas de lá no Visual Studio Code.

Abra seu menu de aplicativos e inicie o Visual Studio Code e na tela inicial dele pressione F1 para abrir a tela de execução de comandos.

Procure pelo comando Shell Command: Install 'code' command in PATH para adicionar o Visual Studio Code ao PATH do seu sistema operacional.

(Opcional) Atualize o VSCode regularmente:

~~~bash
# Código Bash

sudo apt update
sudo apt upgrade code
~~~

## Inicializando o Git em um projeto

Para inicializar o Git em um projeto, você precisa seguir os passos abaixo:

1 - Certifique-se de ter o Git instalado

Antes de começar, verifique se o Git está instalado no seu sistema. Se não estiver instalado, você pode baixá-lo e instalá-lo a partir do site oficial do Git.

2 - Crie um novo diretório do projeto

~~~bash
# Código Bash

mkdir meu-projeto
cd meu-projeto
~~~

3 - Inicialize um repositório Git

Execute o comando `git init` para iniciar um novo repositório Git no diretório do seu projeto:

~~~bash
# Código Bash

git init
~~~

sso criará um subdiretório oculto chamado `.git` no seu diretório do projeto, onde o Git armazenará metadados e configurações relacionadas ao repositório.

4 - Configure o nome e o endereço de email do usuário

Execute o seguinte comando para configurar o seu nome de usuário no Git. Substitua "Seu Nome" pelo seu próprio nome:

~~~bash
# Código Bash

git config --global user.name "Seu Nome"
~~~

Execute o seguinte comando para configurar o seu endereço de e-mail no Git. Substitua `"seu@email.com"` pelo seu próprio endereço de e-mail:

~~~bash
# Código Bash

git config --global user.email "seu@email.com"
~~~

Certifique-se de usar o mesmo e-mail que você usa para suas plataformas de hospedagem de repositório, como GitHub ou GitLab.

5 - Adicione arquivos ao repositório

Antes de poder fazer o primeiro commit, você precisa adicionar arquivos ao controle de versão. Você pode adicionar todos os arquivos do diretório atual usando:

~~~bash
# Código Bash

git add .
~~~

Ou adicionar arquivos específicos usando:

~~~bash
# Código Bash

git add nome-do-arquivo
~~~

6 - Faça o primeiro commit

Agora, você está pronto para fazer o primeiro commit. Execute o comando `git commit -m "Mensagem do commit"` para confirmar as alterações adicionadas com uma mensagem descritiva:

~~~bash
# Código Bash

git commit -m "Inicializando o repositório Git"
~~~

7 - Conecte o repositório local a um repositório remoto (opcional)

Se você planeja armazenar seu código em um repositório remoto, como GitHub, GitLab ou Bitbucket, você precisará conectar seu repositório local a um repositório remoto. Siga as instruções fornecidas pelo serviço de hospedagem de repositórios para criar um novo repositório remoto.

### Para criar um novo repositório no GitHub, siga os passos abaixo

1- Faça login na sua conta GitHub:

- Acesse GitHub e faça login na sua conta.

2- Vá para a página principal do GitHub:

- Clique no ícone "+" no canto superior direito da página e selecione "New repository" (Novo repositório).

3- Preencha as informações do repositório:

- Escolha um nome para o seu repositório.
- Adicione uma descrição opcional.
- Escolha a visibilidade do repositório (público ou privado).
- Inicialize este repositório com um README, um arquivo .gitignore ou uma licença, se desejar.
- Clique em "Create repository" (Criar repositório).

### Criação de chave SSH

Para salvar suas alteraçõe no repositório é necessario realizar uma configuração de chave SSH.

~~~bash
# Código Bash

ssh-keygen -f ~/.ssh/nome-da-chave_rsa -t rsa -b 4096 -C "seu_email@example.com"
~~~

Copie sua chave ssh.pub ao execultar o comando a seguir:

~~~bash
# Código Bash

cat ~/.ssh/nome-da-chave_rsa.pub
~~~

Adicionar a chave SSH ao GitHub

- Acesse sua conta GitHub e vá para "Settings" (Configurações).
- No menu lateral, clique em "SSH and GPG keys" (Chaves SSH e GPG).
- Clique em "New SSH key" (Nova chave SSH).
- Cole a chave SSH que você copiou anteriormente e dê um nome descritivo (por exemplo, "Meu Computador Pessoal").
- Clique em "Add SSH key" (Adicionar chave SSH).

Ao finalizar, execulte as configurações recomendadas pelo github e adicione o repósitório configurado, assim como demonstrado abaixo:

~~~bash
# Código Bash

git branch -M main
git remote add origin git@github.com:seu-usuario/seu-repositorio.git
~~~

Em seguida, você pode enviar suas alterações para o repositório remoto usando:

~~~bash
# Código Bash

git push -u origin main
~~~

Agora, seu projeto está sob controle de versão usando o Git, e você pode continuar a trabalhar no desenvolvimento, criando novos commits à medida que avança no projeto.

## inicialização do npm

A inicialização do npm (Node Package Manager) em um projeto é o primeiro passo para gerenciar as dependências do seu projeto Node.js. Aqui estão os passos básicos para iniciar o npm em um projeto:

1 - Navegue até o diretório do seu projeto

Abra o terminal e vá para o diretório do seu projeto usando o comando cd:

~~~bash
# Código Bash

cd caminho/do/seu/projeto
~~~

2 - Inicialize o npm

Execute o seguinte comando no terminal dentro do diretório do seu projeto para iniciar o npm. Isso criará um arquivo `package.json` que irá armazenar as informações do seu projeto, incluindo suas dependências.

~~~bash
# Código Bash

npm init
~~~

Você será solicitado a fornecer algumas informações sobre o projeto, como nome, versão, descrição, ponto de entrada (geralmente `index.js`), testes de comando, repositório, palavras-chave, autor e licença. Você pode simplesmente pressionar Enter para aceitar os valores padrão ou fornecer suas próprias informações.

Exemplo de um `package.json` gerado:

~~~json
// Código JSON

{
  "name": "meu-projeto",
  "version": "1.0.0",
  "description": "Descrição do meu projeto",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Seu Nome",
  "license": "MIT"
}
~~~

O npm também pode ser inicializado de forma automatica, sem solicitar informações, execultando o seguinte comando:

~~~bash
# Código Bash

npm init -y
~~~

3 - Instale as dependências do projeto

Uma vez que você tenha o `package.json`, você pode começar a adicionar dependências ao seu projeto. Por exemplo, para instalar o Express, um popular framework para Node.js, você pode usar o seguinte comando:

~~~bash
# Código Bash

npm install express
~~~

Isso instalará o Express e suas dependências no diretório `node_modules` do seu projeto, e essas dependências serão listadas no seu `package.json` sob a seção "dependencies".
