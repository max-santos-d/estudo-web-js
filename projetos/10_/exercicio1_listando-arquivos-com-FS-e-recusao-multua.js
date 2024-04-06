// Importação do módulo 'fs' para manipulação de sistema de arquivos com suporte a promessas
const fs = require('fs').promises;
// Importação do módulo 'path' para lidar com caminhos de arquivos e diretórios
const path = require('path');

// Definição do diretório raiz a ser lido
const rootdir = '/home/maxsantos/Área de Trabalho/estudo-web-js';

// Função assíncrona para ler o diretório e seus subdiretórios recursivamente
async function readdir(rootDir) {
    // Define o diretório raiz como o diretório atual, se não for especificado
    rootDir = rootDir || path.resolve(__dirname);
    // Obtém a lista de arquivos no diretório
    const files = await fs.readdir(rootDir);
    // Chama a função 'walk' para percorrer recursivamente os arquivos e diretórios
    walk(files, rootDir);
};

// Função assíncrona para percorrer recursivamente os arquivos e diretórios
async function walk(files, rootDir) {
    // Loop pelos arquivos e diretórios
    for(let file of files){
        // Obtém o caminho completo do arquivo ou diretório
        const fileFullPath = path.resolve(rootDir, file);
        // Obtém informações sobre o arquivo ou diretório
        const stats = await fs.stat(fileFullPath);

        // Ignora pastas .git e node_modules
        if(/\.git/g.test(fileFullPath)) continue;
        if(/node_modules/g.test(fileFullPath)) continue;

        // Se for um diretório, chama recursivamente a função 'readdir' para continuar a leitura
        if(stats.isDirectory()){            
            readdir(fileFullPath);
            continue;
        }
        
        // Se não for um arquivo CSS, continua para o próximo arquivo
        if(!/\.css/g.test(fileFullPath)) continue;

        // Exibe o caminho completo do arquivo CSS
        console.log(fileFullPath);
    };
};

// Inicia o processo de leitura do diretório raiz
readdir(rootdir);
