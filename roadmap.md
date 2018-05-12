# COOL TODOLIST

## MODIFICAR TODO BOOTSTRAP POR:

https://github.com/reactstrap/reactstrap

Essa lib possui todas as funcionalidades porem nao utiliza jquery.js e bootstrap.js que sao um dos TOP5 maiores pacotes do projeto.

## Adicionar wrapper para segurar rotas especificas

https://github.com/mjrussell/redux-auth-wrapper

Esse é um wrapper para o react-router que adiciona seguranca a algumas rotas definidas.
Podemos implementar isso na mão, mas esse pacote parece bom e sem muito boilerplate desnecessario.


## Arrumar ou Deletar de vez o componente loadingBarReducer

https://github.com/mironov/react-redux-loading-bar 

O componente foi instalado porem estava com um bug onde a barra ficar posicionada de forma errada.
O codigo da feature foi deletada mas talvez seja uma boa ideia colocar mesmo ja tendo um spinner de loading.


## Adicionar persistencia na aplicacao

https://github.com/rt2zz/redux-persist

Hoje apenas persistimos o token de logado no locastorage e usamos essa referencia para validar um login
Isso é um anti padrao ja que nao usa o storage do redux. uma implementacao acima pode resolver esse problema.

## Adicionar SSR (server side rendering) para agilizar velocidade de carregamento

https://github.com/faceyspacey/react-universal-component

Devido a natureza simples da aplicacao essa funcionalidade provavelmente não é interessante já que o carregamento da mesma é praticamente imediato.
Porem se as paginas comecarem a demorar muito para renderizar (diferente de carregar imagens, css, etc) essa funcionalidade pode aumentar  significativamente a experiencia do usuario.