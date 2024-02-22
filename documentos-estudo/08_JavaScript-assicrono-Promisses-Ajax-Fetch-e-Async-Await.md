# JavaScript assicrono - Promisses, Ajax, Fetch e Async/Await

Índice

- [JavaScript assicrono - Promisses, Ajax, Fetch e Async/Await](#javascript-assicrono---promisses-ajax-fetch-e-asyncawait)
  - [Promises](#promises)
    - [Promisses vs Calbacks](#promisses-vs-calbacks)
    - [Simplificação com Promises](#simplificação-com-promises)
    - [Exemplo de "Callback Hell" com Captura de Erros](#exemplo-de-callback-hell-com-captura-de-erros)
    - [Exemplo com Promises e Captura de Erros](#exemplo-com-promises-e-captura-de-erros)
  - [Métodos úteis para Promises](#métodos-úteis-para-promises)
    - [`Promise.all(iterable)` em JavaScript](#promisealliterable-em-javascript)
    - [`Promise.race(iterable)` em JavaScript](#promiseraceiterable-em-javascript)
    - [`Promise.resolve(value)` em JavaScript](#promiseresolvevalue-em-javascript)
    - [`Promise.reject(reason)` em JavaScript](#promiserejectreason-em-javascript)
  - [Asybc / Await](#asybc--await)
    - [`async`](#async)
    - [Refatoramento de código para Async/Await](#refatoramento-de-código-para-asyncawait)
  - [XMLHttpRequest + Promises](#xmlhttprequest--promises)
    - [Exercicio para fixar - XMLHttpRequest](#exercicio-para-fixar---xmlhttprequest)
  - [Fetch API (GET) em JavaScaript](#fetch-api-get-em-javascaript)
    - [Exercicio para fixar - Fetch API](#exercicio-para-fixar---fetch-api)
  - [Fetch API e Axios (JSON) em JavaScaript](#fetch-api-e-axios-json-em-javascaript)
    - [Utilizando Fetch API](#utilizando-fetch-api)
    - [Utilizando Axios](#utilizando-axios)
    - [Exercicio para fixar - Fetch API e Axios (JSON)](#exercicio-para-fixar---fetch-api-e-axios-json)

## Promises

Promises em JavaScript são objetos que representam o resultado de uma operação assíncrona. Elas são utilizadas para lidar com código assíncrono de uma maneira mais organizada e legível, facilitando o tratamento de resultados de operações que podem demorar para serem concluídas, como requisições HTTP, leitura de arquivos ou qualquer outra operação que envolva tempo.

Uma Promise pode estar em um de três estados:

- Pendente (Pending): O estado inicial, quando a Promise ainda está sendo processada.
- Resolvida (Fulfilled): Quando a operação assíncrona é bem-sucedida e a Promise é resolvida com um valor.
- Rejeitada (Rejected): Quando a operação assíncrona falha e a Promise é rejeitada com um erro.

A estrutura básica de uma Promise em JavaScript é a seguinte:

~~~javascript
// Código Javascript

const minhaPromise = new Promise((resolve, reject) => {
  // Execução da operação assíncrona
  // Se a operação for bem-sucedida, chame resolve com o resultado
  // Se a operação falhar, chame reject com o motivo do erro
});
~~~

Para consumir o resultado de uma Promise, podemos encadear chamadas aos métodos `.then()` e `.catch()`. O método `.then()` é usado para lidar com a resolução da Promise, enquanto o método `.catch()` é usado para lidar com a rejeição da Promise.

~~~javascript
// Código Javascript

minhaPromise
  .then(resultado => {
    // Lidar com o resultado da operação assíncrona bem-sucedida
  })
  .catch(erro => {
    // Lidar com o erro da operação assíncrona falha
  });
~~~

Além disso, podemos encadear múltiplos `.then()` para executar operações em série, e podemos usar o método `.finally()` para executar código independentemente da Promise ter sido resolvida ou rejeitada.

~~~javascript
// Código Javascript

minhaPromise
  .then(resultado => {
    // Lidar com o resultado da operação assíncrona bem-sucedida
    return novoResultado;
  })
  .then(novoResultado => {
    // Realizar operações adicionais com o resultado
  })
  .catch(erro => {
    // Lidar com o erro da operação assíncrona falha
  })
  .finally(() => {
    // Executar código independentemente da Promise ter sido resolvida ou rejeitada
  });
~~~

### Promisses vs Calbacks

Promises melhoraram significativamente a manipulação de código assíncrono em comparação com callbacks em JavaScript. Antes das Promises, callbacks eram comumente usados para lidar com operações assíncronas, resultando em um código profundamente aninhado e difícil de manter, conhecido como "callback hell" ou "pyramid of doom". Isso tornava o código difícil de entender, debugar e dar manutenção.

Com a introdução das Promises, o código assíncrono pôde ser estruturado de forma mais limpa e organizada. As Promises permitem encadear operações assíncronas de uma maneira mais linear, utilizando os métodos `.then()` e `.catch()`, em vez de aninhar callbacks um dentro do outro. Isso resulta em um código mais legível e fácil de entender.

Além disso, as Promises fornecem uma maneira elegante de lidar com erros, permitindo que os erros sejam capturados e tratados de forma centralizada no método `.catch()`, em vez de espalhados em callbacks individuais. Isso simplifica a lógica de tratamento de erros e melhora a manutenção do código.

Outra vantagem das Promises é a capacidade de encadear várias operações assíncronas em série, facilitando o controle do fluxo de execução. Isso é feito retornando uma nova Promise de dentro de um `.then()`, permitindo que a próxima etapa do processo seja executada apenas quando a Promise anterior for resolvida com sucesso.

Em resumo, as Promises melhoraram a forma como lidamos com código assíncrono em JavaScript, tornando-o mais legível, organizado e fácil de manter, em comparação com o uso de callbacks. Isso resultou em um desenvolvimento mais eficiente e menos propenso a erros em aplicações assíncronas.

Exemplo de "Callback Hell" com Captura de Erros

~~~javascript
// Código JavaScript

// Função para gerar números aleatórios
function rand(min = 1, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
};

// Função que retorna um callback resolvido após um certo tempo
function delay(msg, time, callback){
    setTimeout(() => {
        console.log(msg);
        if(callback) callback();
    }, time);
};

function funcaoUm(callback) {
    delay('Executando função um', rand(), callback);
};

function funcaoDois(callback) {
    delay('Executando função dois', rand(), callback);
};

function funcaoTres(callback) {
    delay('Executando função três', rand(), callback);
};

// Função principal com as chamadas aninhadas
function callbackHell() {
    funcaoUm(() => {
        funcaoDois(() => {
            funcaoTres(() => {
                console.log('Todas as funções foram executadas');
            });
        });
    });
};

// Chamada da função principal
callbackHell();
~~~

O código também poderia ficar com a seguinte estrutura:

~~~javascript
// Código JavaScript

function rand(min = 1, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function delay(msg, time, callback) {
    setTimeout(() => {
        console.log(msg);
        if (callback) callback();
    }, time);
}

delay('Executando função um', rand(), () => {
    delay('Executando função dois', rand(), () => {
        delay('Executando função três', rand(), () => {
            console.log('Todas as funções foram executadas');
        })
    })
});
~~~

### Simplificação com Promises

~~~javascript
// Código JavaScript

// Função para gerar números aleatórios
function rand(min = 1, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// Função que retorna uma Promise resolvida após um certo tempo
function delay(msg, time) {
    return new Promise((resolve, regect) => {
        setTimeout(() => {
            resolve(msg); // Rerona somente um parâmetro
        }, time);
    });
}

// Função um usando Promises
function funcaoUm() {
    return delay('Executando função um', rand()).then((response) => {
        console.log(response);
    });
}

// Função dois usando Promises
function funcaoDois() {
    return delay('Executando função dois', rand()).then((response) => {
        console.log(response);
    });
}

// Função três usando Promises
function funcaoTres() {
    return delay('Executando função três', rand()).then((response) => {
        console.log(response);
    });
}

// Função principal com chamadas encadeadas
function promiseExample() {
    return funcaoUm()
        .then(funcaoDois)
        .then(funcaoTres)
        .then(() => {
            console.log('Todas as funções foram executadas');
        });
}

// Chamada da função principal
promiseExample();
~~~

O código também poderia ficar com a seguinte estrutura:

~~~javascript
// Código JavaScript

function rand(min = 1, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// Função que retorna uma Promise resolvida após um certo tempo
function delay(msg, time) {
    return new Promise((resolve, regect) => {
        setTimeout(() => {
            resolve(msg); // Rerona somente um parâmetro
        }, time);
    });
}

delay('Executando função um', rand())
    .then(response => {
        console.log(response);
        return delay('Executando função dois', rand());
    })
    .then(response => {
        console.log(response);
        return delay('Executando função três', rand());
    })
    .then(response => {
        console.log(response);
    })
    .then(() => {
        console.log('Todas as funções foram executadas');
    })
~~~

### Exemplo de "Callback Hell" com Captura de Erros

~~~javascript
// Código JavaScript

function rand(min = 1, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
};

function delay(funcao, time, callback) {
    setTimeout(() => {
        console.log(`Executando ${funcao}`);
        const erro = Math.random() < 0.5; // Simulação de erro
        if (callback && erro) {
            callback(`Erro: ${funcao}`);
        } else {
            callback(null, `Resultado: ${funcao}`);
        }
    }, time);
};

function funcaoUm(callback) {
    delay('Conexão com o BD', rand(), callback);
};

function funcaoDois(callback) {
    delay('Buscando dados na BASE', rand(), callback);
};

function funcaoTres(callback) {
    delay('Tratando os dados', rand(), callback);
};

// Função principal com as chamadas aninhadas e captura de erros
function callbackHellWithErrors() {
    funcaoUm((err, resultadoUm) => {
        if (err) {
            console.error(err);
        } else {
            console.log(resultadoUm);
            funcaoDois((err, resultadoDois) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log(resultadoDois);
                    funcaoTres((err, resultadoTres) => {
                        if (err) {
                            console.error(err);
                        } else {
                            console.log(resultadoTres);
                            console.log('');
                            console.log('Exibindo dados na tela');
                        }
                    });
                }
            });
        }
    });
};

// Chamada da função principal
callbackHellWithErrors();
~~~

### Exemplo com Promises e Captura de Erros

~~~javascript
// Código JavaScript

function rand(min = 1, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
};

function delay(funcao, time) {
    return new Promise((resolve, regect) => {
        setTimeout(() => {
            console.log(`Execultando: ${funcao}`)
            const erro = Math.random() < 0.2;
            if (erro) {
                regect(`ERRO: ${funcao}`);
            } else {
                resolve(`RESULTADO: ${funcao}`); // Rerona somente um parâmetro
            }
        }, time);
    });
};

function funcaoUm() {
    return delay('Conexão com o BD', rand());
};

function funcaoDois() {
    return delay('Buscando dados na BASE', rand());
};

function funcaoTres() {
    return delay('Tratando os dados', rand());
};

// Função principal com chamadas encadeadas e captura de erros
function promiseExampleWithErrors() {
    return funcaoUm()
        .then(resultado => {
            console.log(resultado);
            return funcaoDois();
        })
        .then(resultado => {
            console.log(resultado)
            return funcaoTres();
        })
        .then(resultado => {
            console.log(resultado)
        })
        .then(() => {
            console.log('');
            console.log('Exibindo dados em tela.');
        })
        .catch(err => {
            console.error(err);
        });
};

// Chamada da função principal
promiseExampleWithErrors();
~~~

## Métodos úteis para Promises

`Promise.all`, `Promise.race`, `Promise.resolve` e `Promise.reject` são métodos estáticos fornecidos pela API de Promises em JavaScript para lidar com múltiplas Promises de maneira eficiente e realizar operações com Promises de forma conveniente. Aqui está uma explicação de cada um deles:

### `Promise.all(iterable)` em JavaScript

O método `Promise.all` recebe um iterável (geralmente um array) contendo Promises como argumento e retorna uma única Promise que resolve quando todas as Promises no iterável forem resolvidas ou rejeitadas assim que uma delas for rejeitada. O resultado é um array contendo os resultados das Promises na mesma ordem que foram passadas. É útil quando precisamos esperar por várias operações assíncronas para serem concluídas antes de prosseguir.

Exemplo:

~~~javascript
// Código JavaScript

function rand(min = 1, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
};

function delay(funcao, time) {
    return new Promise((resolve, regect) => {
        setTimeout(() => {
            const erro = Math.random() < 0.5;
            if (erro) {
                regect(`ERRO: ${funcao}`);
            } else {
                resolve(`RESULTADO: ${funcao}`); // Rerona somente um parâmetro
            }
        }, time);
    });
};

const promises = [
    'Valor Inicial do Array',
    delay('Promise 1', rand()),
    delay('Promise 2', rand()),
    'Valor Final do Array'
];

Promise.all(promises)
    .then(resultado => {
        console.log(resultado); // ['Valor Inicial do Array', 'RESULTADO: Promise 1', 'RESULTADO: Promise 2', 'Valor Final do Array']
    })
    .catch(err => {
        console.log(err);
    });
~~~

### `Promise.race(iterable)` em JavaScript

O método `Promise.race` também recebe um iterável como argumento e retorna uma única Promise que resolve ou rejeita assim que uma das Promises no iterável for resolvida ou rejeitada. Ou seja, a primeira Promise que resolver ou rejeitar define o resultado da Promise retornada. É útil quando queremos esperar apenas pela primeira operação assíncrona a ser concluída.

Exemplo:

~~~javascript
// Código JavaScript

function delay(funcao, time) {
    return new Promise((resolve, regect) => {
        setTimeout(() => {
            const erro = Math.random() < 0.5;
            if (erro) {
                regect(`ERRO: ${funcao}`);
            } else {
                resolve(`RESULTADO: ${funcao}`); // Rerona somente um parâmetro
            }
        }, time);
    });
};

const promises = [
    delay('Promise 1', 3000),
    delay('Promise 2', 1000),
    delay('Promise 3', 2000),
];

Promise.race(promises)
    .then(resultado => {
        console.log(resultado); // RESULTADO: Promise 2
    })
    .catch(err => {
        console.log(err);
    });
~~~

### `Promise.resolve(value)` em JavaScript

O método `Promise.resolve` retorna uma Promise resolvida com o valor passado como argumento. Se o valor passado for uma Promise, ele retorna essa mesma Promise. É útil quando queremos criar uma Promise resolvida imediatamente com um determinado valor.

Exemplo:

~~~javascript
// Código JavaScript

function rand(min = 1, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
};

function delay(funcao, time) {
    return new Promise((resolve, regect) => {
        setTimeout(() => {
            const erro = Math.random() < 0.5;
            if (erro) {
                regect(`ERRO: ${funcao}`);
            } else {
                resolve(`RESULTADO: ${funcao}`); // Rerona somente um parâmetro
            }
        }, time);
    });
};

function baixarPagina() {
    const emCache = true;

    if(emCache){
        return Promise.resolve('Página em cache <PAGINA>');
    }else{
        return delay('Arquivos da <PAGINA>');
    }
};

baixarPagina()
    .then(resposta => console.log(resposta)) // Página em cache <PAGINA>
    .catch(err => console.log(err)); 
~~~

### `Promise.reject(reason)` em JavaScript

O método `Promise.reject` retorna uma Promise rejeitada com o motivo passado como argumento. É útil quando queremos criar uma Promise rejeitada imediatamente com um determinado motivo de erro.

Exemplo:

~~~javascript
// Código JavaScript

function rand(min = 1, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
};

function delay(funcao, time) {
    return new Promise((resolve, regect) => {
        setTimeout(() => {
            const erro = Math.random() < 0.5;
            if (erro) {
                regect(`ERRO: ${funcao}`);
            } else {
                resolve(`RESULTADO: ${funcao}`); // Rerona somente um parâmetro
            }
        }, time);
    });
};

function baixarPagina() {
    const reject = true;

    if(reject){
        return Promise.reject('Página em cache <PAGINA>');
    }else{
        return delay('Arquivos da <PAGINA>');
    }
};

baixarPagina()
    .then(resposta => console.log(resposta)) // ERRO catch:  Página em cache <PAGINA>
    .catch(err => console.log('ERRO catch: ', err));
~~~

## Asybc / Await

`async` e `await` são recursos introduzidos no ECMAScript 2017 (ES8) para facilitar a escrita de código assíncrono em JavaScript, especialmente ao lidar com Promises. Vou explicar cada um deles:

### `async`

`async`/`await` é uma maneira de escrever código assíncrono de forma síncrona em JavaScript, tornando-o mais legível e fácil de entender. Essa sintaxe foi introduzida no ECMAScript 2017 (ES8) e é uma alternativa mais limpa e expressiva aos métodos tradicionais de manipulação de Promises, como `.then()` e `.catch()`.

A palavra-chave `async` é usada para definir uma função como assíncrona. Dentro de uma função marcada como `async`, você pode usar a palavra-chave `await`, que suspende a execução da função até que a Promise seja resolvida ou rejeitada. Isso permite que você escreva código assíncrono de forma síncrona, como se estivesse escrevendo código sequencial.

Aqui está um exemplo de como usar `async`/`await`:

Exemplo:

~~~javascript
// Código JavaScript

// Função assíncrona que retorna uma Promise após um certo tempo
async function minhaFuncao() {
  // Aguarda a Promise ser resolvida antes de prosseguir
  const resultado = await Promise.resolve('Olá mundo');
  console.log(resultado);
}

// Chamada da função assíncrona
minhaFuncao();
~~~

Neste exemplo, a função `minhaFuncao` é marcada como `async`, o que significa que ela retorna uma Promise implicitamente. Dentro dela, usamos await para aguardar a resolução da Promise retornada por `Promise.resolve()`. Uma vez que a Promise é resolvida, o valor resultante é armazenado na variável `resultado` e exibido no console.

A principal vantagem do async/await é que ele simplifica o código assíncrono e o torna mais legível, especialmente em casos onde temos que encadear várias operações assíncronas. Em vez de usar uma série de callbacks ou encadear chamadas `.then()`, podemos escrever código mais linear e fácil de entender usando `async`/`await`.

### Refatoramento de código para Async/Await

Antes:

~~~javascript
// Código JavaScript

function rand(min = 1, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
};

function delay(funcao, time) {
    return new Promise((resolve, regect) => {
        setTimeout(() => {
            console.log(`Execultando: ${funcao}`)
            const erro = Math.random() < 0.2;
            if (erro) {
                regect(`ERRO: ${funcao.toUpperCase()}`);
            } else {
                resolve(`RESULTADO: ${funcao.toUpperCase()} <DADOS>`); // Rerona somente um parâmetro
            }
        }, time);
    });
};

delay('Conexão com o BD', rand())
    .then(resultado => {
        console.log(resultado);
        return delay('Buscando dados na BASE', rand());
    })
    .then(resultado => {
        console.log(resultado)
        return delay('Tratando os dados', rand());
    })
    .then(resultado => {
        console.log(resultado)
    })
    .then(() => {
        console.log('');
        console.log('Exibindo dados em tela.');
    })
    .catch(err => {
        console.error(err);
    });
~~~

Depois:

~~~javascript
// Código JavaScript

function rand(min = 1, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
};

function delay(funcao, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Executando: ${funcao}`)
            const erro = Math.random() < 0.2;
            if (erro) {
                reject(`ERRO: ${funcao.toUpperCase()}`);
            } else {
                resolve(`RESULTADO: ${funcao.toUpperCase()} <DADOS>`); // Retorna somente um parâmetro
            }
        }, time);
    });
};

async function main() {
    try {
        let resultado = await delay('Conexão com o BD', rand());
        console.log(resultado);
        resultado = await delay('Buscando dados na BASE', rand());
        console.log(resultado);
        resultado = await delay('Tratando os dados', rand());
        console.log(resultado);
        console.log('');
        console.log('Exibindo dados em tela.');
    } catch (err) {
        console.error(err);
    }
}

main();
~~~

Neste código, a função `main` é marcada como `async`, o que nos permite usar `await` dentro dela para aguardar a resolução das Promises retornadas por `delay`. Isso torna o código mais limpo e fácil de entender, sem a necessidade de encadear várias chamadas `.then()`. O tratamento de erros é feito usando um bloco `try/catch` em torno do código assíncrono, permitindo que erros sejam tratados de forma adequada.

## XMLHttpRequest + Promises

O `XMLHttpRequest` é um objeto JavaScript usado para fazer requisições HTTP assíncronas ao servidor, permitindo que você atualize uma página da web sem precisar recarregá-la completamente. As requisições podem ser feitas de forma síncrona ou assíncrona, mas a abordagem assíncrona é mais comum e recomendada, pois não bloqueia a execução do código enquanto espera pela resposta do servidor.

1. Criando a função de requisição assíncrona com XMLHttpRequest:

    ~~~javascript
    // Código JavaScript

    function fazerRequisicaoGET(url) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest(); // Cria uma nova instância de XMLHttpRequest
            xhr.open('GET', url); // Configura a requisição para o método GET e a URL especificada
            xhr.onload = function () { // Define um callback para quando a requisição for concluída
                if (xhr.status >= 200 && xhr.status < 300) { // Verifica se o status da resposta está dentro do intervalo de sucesso (200-299)
                    resolve(xhr.response); // Resolve a Promise com a resposta da requisição
                } else {
                    reject(new Error(`Erro na requisição: ${xhr.status}`)); // Rejeita a Promise com um erro caso o status da resposta seja diferente de sucesso
                }
            };
            xhr.onerror = function () { // Define um callback para quando ocorrer um erro de rede durante a requisição
                reject(new Error('Erro de rede')); // Rejeita a Promise com um erro de rede
            };
            xhr.send(); // Envia a requisição para o servidor
        });
    }
    ~~~

2. Fazendo a requisição e tratando a resposta:

    ~~~javascript
    // Código JavaScript

    fazerRequisicaoGET('https://api.example.com/data')
        .then(response => {
            console.log('Resposta:', response); // Exibe a resposta da requisição no console
            // Faça o que precisar com a resposta, como processar dados ou atualizar a interface do usuário
        })
        .catch(error => {
            console.error('Erro:', error.message); // Exibe qualquer erro que ocorrer durante a requisição
            // Trate o erro de acordo com suas necessidades, como exibir uma mensagem de erro para o usuário
        });
    ~~~

    Neste exemplo, a função `fazerRequisicaoGET` recebe uma URL como argumento e retorna uma Promise que representa a requisição assíncrona. Dentro da função, configuramos os callbacks `onload` e `onerror` para lidar com o sucesso e os erros da requisição, respectivamente. Quando a requisição é bem-sucedida, resolvemos a Promise com a resposta da requisição usando `resolve(xhr.response)`. Se ocorrer algum erro durante a requisição, rejeitamos a Promise com um erro correspondente usando `reject(new Error('mensagem de erro'))`.

    No código de chamada, usamos `.then()` para lidar com a resposta da requisição e `.catch()` para lidar com qualquer erro que ocorra durante a requisição. Isso torna o código mais limpo e fácil de entender, além de permitir um melhor tratamento de erros e uma lógica mais clara de manipulação de dados.

3. Requisição POST usando `XMLHttpRequest` com Promises em JavaScript:

    ~~~javascript
    // Código JavaScript

    function fazerRequisicaoPOST(url, dados) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest(); // Cria uma nova instância de XMLHttpRequest
            xhr.open('POST', url); // Configura a requisição para o método POST e a URL especificada
            xhr.setRequestHeader('Content-Type', 'application/json'); // Define o cabeçalho Content-Type como JSON
            xhr.onload = function () { // Define um callback para quando a requisição for concluída
                if (xhr.status >= 200 && xhr.status < 300) { // Verifica se o status da resposta está dentro do intervalo de sucesso (200-299)
                    resolve(xhr.response); // Resolve a Promise com a resposta da requisição
                } else {
                    reject(new Error(`Erro na requisição: ${xhr.status}`)); // Rejeita a Promise com um erro caso o status da resposta seja diferente de sucesso
                }
            };
            xhr.onerror = function () { // Define um callback para quando ocorrer um erro de rede durante a requisição
                reject(new Error('Erro de rede')); // Rejeita a Promise com um erro de rede
            };
            xhr.send(JSON.stringify(dados)); // Envia a requisição para o servidor, convertendo os dados para JSON
        });
    }

    // Exemplo de uso da função
    const dadosParaEnviar = {
        nome: 'Usuário',
        email: 'usuario@example.com'
    };

    fazerRequisicaoPOST('https://api.example.com/enviar-dados', dadosParaEnviar)
        .then(response => {
            console.log('Resposta:', response); // Exibe a resposta da requisição no console
            // Faça o que precisar com a resposta, como processar dados ou atualizar a interface do usuário
        })
        .catch(error => {
            console.error('Erro:', error.message); // Exibe qualquer erro que ocorrer durante a requisição
            // Trate o erro de acordo com suas necessidades, como exibir uma mensagem de erro para o usuário
        });
    ~~~

    Neste exemplo, a função `fazerRequisicaoPOST` recebe uma URL e um objeto `dados` como argumentos e retorna uma Promise que representa a requisição assíncrona. Configuramos a requisição para o método POST e definimos o cabeçalho `Content-Type` como JSON para indicar que estamos enviando dados no formato JSON. Dentro dos callbacks `onload` e `onerror`, lidamos com o sucesso e os erros da requisição da mesma maneira que fizemos no exemplo anterior.

    Ao chamar a função `fazerRequisicaoPOST` com a URL e os dados para enviar, usamos `.then()` para lidar com a resposta da requisição e `.catch()` para lidar com qualquer erro que ocorra durante a requisição. Isso permite um melhor tratamento de erros e uma lógica mais clara de manipulação de dados, seguindo o padrão de uso de Promises em JavaScript.

### Exercicio para fixar - XMLHttpRequest

Exercício utilizando requisição XMLHttpRequest + Promises em mini projeto web:

- `projetos/08_/Projeto1` - [Projeto 01 - XMLHttpRequest](../projetos/08_/Projeto1/)

## Fetch API (GET) em JavaScaript

A `fetch API` em JavaScript fornece uma interface para fazer requisições HTTP de forma assíncrona, facilitando a interação com recursos remotos como APIs da web. Ela é mais moderna e poderosa do que a antiga `XMLHttpRequest`, e é baseada em Promises, o que a torna mais fácil de usar e mais flexível.

Aqui está um exemplo simples de como usar a `fetch API` para fazer uma requisição GET:

~~~javascript
// Código JavaScript

fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na requisição');
    }
    return response.json();
  })
  .then(data => {
    console.log('Dados recebidos:', data);
    // Faça o que precisar com os dados recebidos, como processar ou exibir na interface do usuário
  })
  .catch(error => {
    console.error('Erro:', error.message);
    // Trate o erro de acordo com suas necessidades, como exibir uma mensagem de erro para o usuário
  });
~~~

Neste exemplo:

- Usamos `fetch` para fazer uma requisição GET para a URL especificada (`https://api.example.com/data`).
- Encadeamos um `.then()` para lidar com a resposta da requisição. Dentro desse callback, verificamos se a resposta é "ok" (ou seja, se o status HTTP está entre 200 e 299). Se não estiver, lançamos um erro.
- Se a resposta estiver ok, usamos `response.json()` para extrair e analisar o corpo da resposta como JSON.
- Encadeamos outro `.then()` para lidar com os dados recebidos. Dentro desse callback, processamos ou exibimos os dados conforme necessário.
- Usamos `.catch()` para lidar com qualquer erro que ocorra durante a requisição ou o processamento dos dados.

Este é apenas um exemplo básico de como usar a fetch API. Ela oferece muitos recursos poderosos, como suporte para diferentes tipos de requisições (GET, POST, PUT, DELETE, etc.), envio de dados no corpo da requisição, configuração de cabeçalhos HTTP personalizados e muito mais. Ela é amplamente usada em aplicativos web modernos devido à sua simplicidade e flexibilidade.

### Exercicio para fixar - Fetch API

Exercício utilizando requisição Fetch API (GET) em um mini-projeto web:

- `projetos/08_/Projeto2` - [Projeto 02 - Fetch API](../projetos/08_/Projeto2/)

## Fetch API e Axios (JSON) em JavaScaript

A Fetch API e o Axios são duas bibliotecas populares em JavaScript para fazer requisições HTTP. Ambas permitem fazer requisições de forma assíncrona e têm suporte para Promises, tornando o código mais limpo e fácil de entender.

Vamos comparar a utilização da Fetch API e do Axios para fazer uma requisição GET para uma API que retorna dados em formato JSON:

### Utilizando Fetch API

~~~javascript
// Código JavaScript

fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na requisição');
    }
    return response.json();
  })
  .then(data => {
    console.log('Dados recebidos:', data);
  })
  .catch(error => {
    console.error('Erro:', error.message);
  });
~~~

### Utilizando Axios

~~~javascript
// Código JavaScript

axios.get('https://api.example.com/data')
  .then(response => {
    console.log('Dados recebidos:', response.data);
  })
  .catch(error => {
    console.error('Erro:', error.message);
  });
~~~

Ambos os exemplos fazem uma requisição GET para a URL especificada e lidam com a resposta e possíveis erros de maneira semelhante. No entanto, há algumas diferenças notáveis:

1. **Sintaxe**: A sintaxe do Axios é mais limpa e simplificada, com métodos específicos para diferentes tipos de requisição (e.g., `axios.get`, `axios.post`, `axios.put`, etc.), enquanto a Fetch API requer o uso de diferentes métodos (e.g., `fetch` para todas as requisições, `response.json()` para analisar a resposta como JSON, etc.).

2. **Interoperabilidade com Promises**: Ambas as bibliotecas têm suporte para Promises, mas a Fetch API é nativa do navegador, enquanto o Axios é uma biblioteca externa. Isso pode ser uma consideração importante ao decidir qual usar, dependendo das necessidades e restrições do projeto.

3. **Compatibilidade com navegadores**: A Fetch API é nativa dos navegadores modernos, mas pode exigir polifilos ou transpiladores para suportar navegadores mais antigos. Por outro lado, o Axios é independente do navegador e pode ser usado em qualquer ambiente JavaScript.

Em resumo, tanto a Fetch API quanto o Axios são boas opções para fazer requisições HTTP em JavaScript. A escolha entre elas depende das preferências pessoais, requisitos do projeto e necessidades de compatibilidade com o navegador.

### Exercicio para fixar - Fetch API e Axios (JSON)

Exercício utilizando requisição Fetch API e Axios em um mini-projeto web:

- `projetos/08_/Projeto3` - [Projeto 03 - Axios](../projetos/08_/Projeto3/)

Obs.: Necessario implementar o complemento do Axios para implementação no mini-projeto.
