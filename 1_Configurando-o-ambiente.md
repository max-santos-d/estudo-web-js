# Configurando o ambiente

Índice

- [Configurando o ambiente](#configurando-o-ambiente)
  - [Instalando o Node e VSCode em ambiente linux](#instalando-o-node-e-vscode-em-ambiente-linux)
  - [Git](#git)
    - [Inicializando o Git em um projeto](#inicializando-o-git-em-um-projeto)
    - [Criar um novo repositório no GitHub](#criar-um-novo-repositório-no-github)
    - [Criação de chave SSH para utilização do github](#criação-de-chave-ssh-para-utilização-do-github)
    - [Comandos git importantes](#comandos-git-importantes)
  - [inicialização do npm](#inicialização-do-npm)
  - [Extenções para o VSCode](#extenções-para-o-vscode)
  - [Comandos terminal](#comandos-terminal)

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

## Git

### Inicializando o Git em um projeto

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

### Criar um novo repositório no GitHub

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

### Criação de chave SSH para utilização do github

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

### Comandos git importantes

- Gerenciar repositórios remote
  - Verificação de controle remoto: `git remote -v`
  - Definir um novo controle remoto: `git remote add origin git@github.com:seu-usuario/seu-repositorio.git`
  - Alterar a URL de um repositório remoto.
    - Alternar URLs remotes de SSH para HTTPS: `git remote set-url origin https://github.com/OWNER/REPOSITORY.git`
    - Mudar as URLs remotas de HTTPS para SSH: `git remote set-url origin git@github.com:OWNER/REPOSITORY.git`
  - Renomear um repositório remoto: `git remote rename origin destination`
      - `origin`: Nome remoto existente.
      - `destination` : Novo nome para o remoto
  - Remover um repositório remoto: `git remote rm destination`
    - `destination` : Nome de repositório remoto
- Verificação de configurações git: 
  - `git config --list`
- Recuperar as alterações do repositório remoto: 
  - `git fatch`
- Mesclar as alterações baixadas pelo “git fetch” com o repositório local: 
  - `git merge`
- Realizar o “git fetch” e, em seguida, o “git merge” automaticamente:
  - `git pull`

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

## Extenções para o VSCode

- **Code Runner:** A extensão Code Runner para o Visual Studio Code é uma ferramenta que permite executar código de várias linguagens de programação diretamente no editor. Sua função principal é facilitar o processo de testar e executar pequenos trechos de código, fornecendo uma interface simples para compilar e executar programas sem a necessidade de sair do ambiente de desenvolvimento.
- **Code Time:** A extensão Code Time para o Visual Studio Code é uma ferramenta que ajuda os desenvolvedores a rastrear e analisar seu tempo de codificação diretamente no ambiente de desenvolvimento. Ele fornece métricas e insights sobre o tempo gasto em diferentes projetos, linguagens de programação e até mesmo nas atividades específicas dentro do código-fonte. Além disso, o Code Time pode ajudar os desenvolvedores a melhorar sua produtividade, fornecendo feedback e sugestões com base nos padrões de uso e nas melhores práticas de desenvolvimento.
- **EJS language suport:** A extensão EJS Language Support para o Visual Studio Code é uma ferramenta que oferece suporte aprimorado para a linguagem EJS (Embedded JavaScript). EJS é uma linguagem de modelo que permite a criação de páginas HTML dinâmicas utilizando JavaScript embutido. Com a extensão EJS Language Support, os desenvolvedores podem desfrutar de recursos como realce de sintaxe, formatação automática, IntelliSense e outras funcionalidades específicas para o desenvolvimento com EJS dentro do ambiente do VS Code. Isso facilita o processo de codificação e melhora a produtividade ao trabalhar com esse tipo de tecnologia.
- **Git Graph:** A extensão "Git Graph" para o Visual Studio Code é uma ferramenta que permite visualizar de forma interativa o histórico do Git dentro do ambiente de desenvolvimento. Com ela, os desenvolvedores podem visualizar e interagir com o histórico de commits, branches, merges e tags do repositório Git diretamente no editor. A extensão oferece recursos como gráficos de linha do tempo, informações detalhadas sobre commits e a capacidade de comparar diferentes branches, o que facilita a compreensão e a navegação dentro do histórico do projeto. Isso ajuda os desenvolvedores a entender melhor a evolução do código, colaborar com colegas de equipe e resolver problemas de forma mais eficiente.
- **StandardJS - JavaScript Standard Style:** A extensão "standardJS" para o Visual Studio Code é uma ferramenta que facilita a adesão ao JavaScript Standard Style dentro do ambiente de desenvolvimento. O JavaScript Standard Style é um conjunto de regras de estilo para o JavaScript, projetado para promover a consistência e a legibilidade do código. Com a extensão, os desenvolvedores podem formatar automaticamente o código conforme as diretrizes do JavaScript Standard Style, identificar e corrigir problemas de estilo enquanto codificam, o que ajuda a manter um código limpo e padronizado. Isso é especialmente útil para equipes de desenvolvimento que desejam seguir um estilo de codificação consistente em seus projetos JavaScript.
- **Reload:** A extensão "Reload" para o Visual Studio Code é uma ferramenta que permite recarregar automaticamente o Visual Studio Code quando arquivos ou configurações são alterados. Isso é útil para desenvolvedores que desejam ver as alterações aplicadas imediatamente sem a necessidade de fechar e reabrir o editor manualmente. A extensão ajuda a acelerar o fluxo de trabalho de desenvolvimento, especialmente durante a personalização do ambiente de desenvolvimento ou ao trabalhar em projetos que exigem alterações frequentes nos arquivos de configuração.
- **Live Server:** A extensão "Live Server" para o Visual Studio Code é uma ferramenta que permite aos desenvolvedores iniciar rapidamente um servidor local para visualizar e testar páginas da web em tempo real. Com essa extensão, você pode simplesmente clicar com o botão direito do mouse no arquivo HTML que deseja visualizar e selecionar "Open with Live Server" para iniciar um servidor local automaticamente e abrir a página no navegador padrão. Além disso, o Live Server atualiza automaticamente a página no navegador sempre que você fizer alterações no código-fonte, permitindo uma experiência de desenvolvimento mais dinâmica e eficiente. Essa extensão é útil para desenvolvedores da web que desejam visualizar instantaneamente as alterações em suas páginas sem a necessidade de recarregar manualmente o navegador a cada modificação.
- **Material Icon Theme:** A extensão "Material Icon Theme" para o Visual Studio Code é um conjunto de ícones que substitui os ícones padrão do editor por ícones inspirados no Material Design, o estilo de design desenvolvido pelo Google. Esses ícones são projetados para ajudar os desenvolvedores a identificar facilmente diferentes tipos de arquivos e pastas em seus projetos, tornando a navegação e a organização do código mais intuitivas e visuais. Com essa extensão, os desenvolvedores podem personalizar a aparência do Visual Studio Code de acordo com suas preferências estéticas e melhorar a experiência de uso do editor.

## Comandos terminal

Se você usa MacOS
- O macOs roda sobre Darwin OS (kernel XNU), que é um sistema UNIX-like. Então, 
todos os comandos abaixo também funcionam normalmente no MacOS. Recomendo
utilizar o gerenciador de pacotes homebrew caso necessário instalar algo.
Se quiser o mesmo terminal que eu (ZSH com Oh My ZSH), utilize este vídeo para 
configurar [https://youtu.be/bs1-Wxb_KIc](https://youtu.be/bs1-Wxb_KIc)

Se você usa Windows
- No Windows é possível utilizar o wsl2 e instalar uma versão do linux para 
acompanhar. Eu fiz alguns vídeos para você usar o Linux no Windows. 
Primeiro, siga este vídeo para ativar o WSL2 [https://youtu.be/05YN8F8ajBc](https://youtu.be/05YN8F8ajBc); depois, configure seu terminal com ZSH com este outro vídeo [https://youtu.be/y-w-gamp4U0](https://youtu.be/y-w-gamp4U0).  

GUI vs CLI  
- GUI - Graphical User Interface  
- CLI - Command Line Interface  

Comandos mais básicos e muito usados

Privilégios do usuário

- `sudo` - Permite executar programas c/ privilégios de outro usuário - por padrão,
  como o root). `sudo` significa "substitute user do" (usuário 
  substituto faça)  
  
Vídeo sobre su, sudo e sudoers. Nesse vídeo eu detalho mais sobre o comando su, sudo e o arquivo sudoers: [https://youtu.be/aTbEhjvlmxg](https://youtu.be/aTbEhjvlmxg)

Navegação

- `pwd` - print working directory (mostra o caminho do diretório atual)  
- `ls` - lista tudo no diretório atual  
  - `-a` - inclui entradas que o nome começa com ponto (arquivos ou diretórios ocultos)  
  - `-l` - lista em formato longo  
  - `-h` - com -l, é um sufixo de tamanho para facilitar a leitura   
  - `-@` - mostra atributos estendidos  

Vídeo sobre permissões no Linux. Isso vai te ajudar a entender melhor como o sistema de Usuários, grupos e permissões no Linux (Ubuntu):[https://youtu.be/S2h92LNcEz8](https://youtu.be/S2h92LNcEz8)

Mais comandos:

- `cd` - change directory
  - `.` - diretório atual
  - `..` - diretório acima
  - `/` - o diretório root ou a separação de diretórios
  - `~` - home (cd sem nada vai para a home)
  - `-` menos - volta para o diretório que anterior  
- `tree` - mostra a árvore do diretório atual  
  - `-d` - diretórios  
  - `-a` - mostra arquivos ocultos  
- `cat` - concatena e/ou mostra o conteúdo de um arquivo  
  - `-n` - enumera as linhas
- `tail` - lista as últimas linhas do arquivo  
  - `-NÚMERO` - mostra a quantidade de linhas que for adicionado em `NÚMERO`.
  - `-f` - continua assistindo o arquivo em busca de novos dados.  
- `wc` - conta linhas, palavras e caracteres
  - `-l` - linhas
  - `-m` - caracteres
  - `-w` - palavras

Manipulando arquivos e diretórios

- `cp` - copia arquivos ou diretórios  
  - `-R` - copia o diretório em modo recursivo  
  <sub><sup>**Obs.:** Segundo o `man` (manual) do `cp`, se tiver uma barra (/) no final do diretório original, `cp` pode copiar apenas o conteúdo do diretório e não o diretório em si (eu não vi isso ocorrer em testes).</sup></sub>  
- `mv` - move arquivos ou diretórios (com mv você pode renomear arquivos ou diretórios)  
- `mkdir` - cria um diretório (use aspas ou barra invertida para separar caracteres inválidos)  
  - `-p` - cria uma estrutura inteira sem gerar erros  
  <sub><sup>Obs.: você pode usar chaves para criar múltiplos sub-diretórios.</sup></sub>  
- `rm` - apaga arquivos e diretórios  
  - `-R` - modo recursivo para diretórios  
  - `-f` - modo forçado e silencioso  
- `touch` - muda os tempos de acesso e modificação de um arquivo. Grande parte dos casos, usamos este comando para criar um arquivo vazio.  

Alguns símbolos e operadores úteis

- `;` - permite executar vários comandos na mesma linha. Roda todos os comandos, mesmo se ocorrer algum erro.
- `&&` - permite executar vários comandos na mesma linha. Se o comando anterior não gerar nenhum erro, continua a corrente de comandos, do contrário, para no momento que ocorrer um erro.  
- `||` - permite executar vários comandos na mesma linha. Ele funciona de maneira oposta ao anterior, ou seja, se ocorrer algum erro no comando anterior, executa o próximo comando, do contrário, para no primeiro comando que **NÃO** gerar um erro.  
- `|` - Joga a saída (output) de um comando para a entrada (input) de outro.
- `>` - Joga a saída de um comando e redireciona para um arquivo. Apaga o arquivo todo e substitui seu conteúdo.
- `>>` - Joga a saída de um comando e redireciona para um arquivo. Não apaga o que estiver no arquivo, apenas adiciona o novo conteúdo na última linha.
- `&` - Joga para o background. Veja `jobs` e `fg` para complementar

Background e Foreground

- `jobs` - mostra trabalhos em execução  
- `fg %n` - leva o que estiver em background para o foreground  
- `bg %n` - continua um job em background  
- `kill %n` - mata um job

Outros comandos
- `nano` - editor de textos  
- `file` - mostra o tipo do arquivo  
- `history` - histórico de comandos já digitados  
- `pkill` - mata processos
- `whoami` - mostra seu usuário
- `hostname` - mostra o nome do seu computador
- `uname` - mostra dados sobre o sistema
- `ps aux` - mostra todos os processos rodando no sistema no momento da execução