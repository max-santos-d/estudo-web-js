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

Passo 3 (Opcional) - Criação do documento `.gitignore` e adicionar a pasta `node_modules`

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

Sem texto `--presets=@babel/env` o arquivo gerado seria iual ao inicial.

Passo 6 - Criação do arquivo `index.html` para incenção do script gerado

Passo 7 - Criação de script `"babel": "babel ./main.js -o ./bundle.js --presets=babel/env -w"` no arquivo `package.json` para automação da execulsão do **Passo 5**

~~~json
// Arquivo JSON

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "babel": "babel ./main.js -o ./bundle.js --presets=babel/env -w"
},
~~~
