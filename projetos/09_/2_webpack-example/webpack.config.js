// Importa o módulo 'path' para lidar com caminhos de arquivos e diretórios
const path = require('path'); // CommonJs

// Exporta um objeto contendo as configurações para webpack
module.exports = {
    // Define o modo de construção do webpack, 'development' para ambiente de desenvolvimento
    mode: 'development', // modo quando em desenvolvimento, quando for para produção utilizar 'production'
    // Define o ponto de entrada para a aplicação
    entry: './src/app.js',
    // Define as configurações de saída para os arquivos gerados pelo webpack
    output: {
        // Define o nome do arquivo de saída
        filename: 'bundle.js',
        // Define o diretório de saída para os arquivos gerados
        path: path.resolve(__dirname, 'dist', 'assets', 'js')
    },
    // Define as regras para processamento de diferentes tipos de arquivos
    module: {
        // Define uma lista de regras
        rules: [{
            // Exclui a pasta 'node_modules' da aplicação para evitar processamento desnecessário
            exclude: /node_modules/,
            // Define a expressão regular para encontrar arquivos JavaScript
            test: /\.js$/,
            // Define o uso de um loader para processar arquivos JavaScript usando Babel
            use: {
                loader: 'babel-loader',
                // Define as opções para o loader Babel
                options: {
                    // Define os presets para o Babel, neste caso, usa-se o preset '@babel/env' para compatibilidade com os navegadores atuais
                    presets: ['@babel/env']
                }
            }
        }],
    },
    // Define o tipo de sourcemaps a serem gerados para facilitar a depuração de código
    devtool: 'source-map'
};