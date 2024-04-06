// Importação do módulo 'path' para lidar com caminhos de arquivos e diretórios
const path = require('path'); // CommonJs

// Exportação do objeto de configuração do Webpack
module.exports = {
    // Modo de construção (development ou production)
    mode: 'development', // modo quando em desenvolvimento, quando for para produção utilizar 'production'
    // Ponto de entrada da aplicação
    entry: './src/app.js',
    // Configuração de saída
    output: {
        // Nome do arquivo de saída
        filename: 'bundle.js',
        // Caminho de saída absoluto
        path: path.resolve(__dirname, 'dist', 'assets', 'js')
    },
    // Configuração do módulo
    module: {
        // Regras para processamento de diferentes tipos de arquivos
        rules: [{
            // Exclui a pasta 'node_modules' do processamento
            exclude: /node_modules/,
            // Testa se o arquivo é JavaScript (.js)
            test: /\.js$/,
            // Usa o loader 'babel-loader' para transpilar o código JavaScript
            use: {
                loader: 'babel-loader',
                options: {
                    // Utiliza presets do Babel para configurar a transpilação
                    presets: ['@babel/env']
                }
            }
        }, {
            // Testa se o arquivo é CSS (.css)
            test: /\.css$/,
            // Usa os loaders 'style-loader' e 'css-loader' para processar o CSS
            use: ['style-loader', 'css-loader']
        }]
    },
    // Configuração da ferramenta de mapeamento de código-fonte
    devtool: 'source-map'
};
