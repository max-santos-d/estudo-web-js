# Passo a passo realizado nesse projeto

Passo 1 - Inicialização do npm:

~~~bash
# Código Bash

npm init -y
~~~

Passo 2 - Instalação das dependências do Babel

~~~bash
# Código Bash

# pode-se utilizar sobrem "-D" no local "--save-dev"
npm install --save-dev @babel/core @babel/cli @babel/preset-env
~~~

Passo 3 - Criação do documento `.gitignore` e adicionar a pasta `node_modules` (Opcional)

~~~bash
# Código Bash

echo "node_modules" >> .gitignore
~~~

Passo 4 - Criação do script `main.js` para exemplificação

Passo 5 - Execução de comando para criação de arquivo Babel com nome bundle.js

~~~bash
# Código Bash

# pode-se utilizar sobrem "-o" no local "--out-file"
npx babel main.js --out-file bundle.js --presets=@babel/env
~~~
