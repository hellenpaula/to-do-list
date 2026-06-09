<h1 align="center">Projeto To-Do List </h1>

# Desenvolvimento:


## Implementação do Search:

## Objetivo

Implementar uma pesquisa de tarefas sem alterar ou perder os dados originais armazenados na aplicação.

---

## Problema Inicial

A primeira abordagem utilizada consistia em filtrar as tarefas e atualizar diretamente o state principal:

```javascript
setTodos(resultadoFiltrado);
```

Embora a pesquisa funcionasse, o array original era substituído pelo resultado filtrado.

### Exemplo

Estado inicial:

* Tarefa 1
* Tarefa 2
* Tarefa 3

Pesquisa:

```txt
Tarefa 1
```

Resultado:

* Tarefa 1

Ao apagar o conteúdo da pesquisa, as demais tarefas não podiam ser recuperadas, pois o state original já havia sido sobrescrito.

---

## Solução Adotada

Foi criada uma separação entre:

### State principal

Responsável por armazenar as tarefas reais da aplicação.

```javascript
todos
```

### State de exibição

Responsável apenas pelos dados que serão renderizados na tela.

```javascript
todosSearch
```

Dessa forma:

```txt
todos
↓
Dados reais da aplicação

todosSearch
↓
Dados exibidos na interface
```

---

## Fluxo da Pesquisa

1. O usuário digita no campo de busca.
2. A função `searchTarefa()` é executada.
3. O array `todos` é filtrado.
4. O resultado é armazenado em `todosSearch`.
5. A interface renderiza o conteúdo de `todosSearch`.

Fluxo simplificado:

```txt
Input
↓
searchTarefa()
↓
filter()
↓
newArray
↓
setTodosSearch(newArray)
↓
Renderização
```

---

## Alteração na Renderização

### Antes

A interface renderizava diretamente o state principal:

```javascript
todos.map(...)
```

### Depois

A interface passou a renderizar o state responsável pela pesquisa:

```javascript
todosSearch.map(...)
```

Essa alteração permitiu exibir resultados filtrados sem modificar os dados originais.

---

## Problema Encontrado Após a Implementação

Após a mudança para `todosSearch`, as funcionalidades de:

* Remover tarefa
* Completar tarefa
* Criar tarefa

pararam de funcionar corretamente.

### Motivo

As alterações estavam sendo realizadas apenas em um dos arrays.

Exemplo:

```txt
Pesquisa utiliza:
todos

Botões alteram:
todosSearch
```

Isso gerava inconsistências entre os estados.

---

## Solução de Sincronização

As funções responsáveis por criar, remover e modificar tarefas passaram a atualizar ambos os estados.

Fluxo:

```txt
Ação do usuário
↓
Novo array
↓
setTodos(...)
↓
setTodosSearch(...)
```

Dessa forma, os dados exibidos e os dados armazenados permanecem sincronizados.

---

## Aprendizados Obtidos

### 1. Não sobrescrever os dados originais

O resultado de uma pesquisa não deve substituir permanentemente os dados da aplicação.

### 2. Renderização depende do JSX

Criar um novo array não altera a interface.

A interface só muda quando o array utilizado no `map()` é alterado.

### 3. Escopo de variáveis

Arrays criados dentro de funções não podem ser utilizados diretamente pelo JSX.

Quando necessário, o valor deve ser armazenado em um state.

### 4. Separação de responsabilidades

Foi importante distinguir:

```txt
Dados reais
≠
Dados exibidos
```

Essa separação tornou a funcionalidade de pesquisa possível sem perda de informações.

---

## Pontos para Refatoração Futura

* Revisar a necessidade dos states:

  * `todoButtonsClicked`
  * `ButtonClicked`

* Avaliar uma forma de reduzir a duplicação entre:

  * `todos`
  * `todosSearch`

* Revisar a atualização da propriedade:

```javascript
todo.isCompleted = !todo.isCompleted
```

para seguir uma abordagem mais imutável e alinhada às boas práticas do React.

---

## Status Atual

Funcionalidades implementadas:

* Criar tarefas
* Remover tarefas
* Completar tarefas
* Pesquisar tarefas

Todas as funcionalidades estão operando em conjunto sem sobrescrever permanentemente os dados utilizados pela aplicação.

Perfeito! Para um README, normalmente vale a pena deixar mais enxuto que a análise completa, mantendo apenas o histórico de desenvolvimento, decisões tomadas e aprendizados. Ficaria assim:

---

# Implementação de Filtro por Status

## Objetivo

Implementar uma funcionalidade que permita filtrar as tarefas de acordo com seu status:

* Todas
* Completas
* Incompletas

A funcionalidade deveria funcionar em conjunto com as demais features já existentes no projeto:

* Criação de tarefas
* Remoção de tarefas
* Conclusão de tarefas
* Pesquisa por título

---

## Planejamento

Antes da implementação foi realizada uma análise da estrutura já existente para identificar:

* Componentes que poderiam ser reutilizados.
* Estados que já armazenavam informações necessárias.
* Possíveis impactos da nova funcionalidade sobre as funcionalidades já implementadas.

Durante essa análise foi identificado que o componente `DropDown` já possuía praticamente toda a estrutura necessária para ser reutilizado no filtro de status.

---

## Refatoração do Componente DropDown

Inicialmente o componente havia sido desenvolvido especificamente para seleção de categorias durante a criação de tarefas.

Para permitir sua reutilização em outros contextos, foi realizada uma refatoração com os seguintes objetivos:

* Remover dependências específicas da categoria.
* Tornar os estados e props mais genéricos.
* Permitir que qualquer componente pai utilize o valor selecionado da forma que desejar.

### Resultado

O componente passou a ter apenas a responsabilidade de:

* Exibir opções.
* Capturar a seleção do usuário.
* Enviar o valor selecionado ao componente pai.

Toda a lógica específica passou a ficar fora do componente.

---

## Controle de Status

Foi criado um novo estado no componente `App.jsx` responsável por armazenar o status selecionado:

* Todas
* Completas
* Incompletas

O valor é recebido diretamente do componente `DropDown`.

---

## Uso do useEffect

Foi utilizado um `useEffect` para monitorar alterações no estado de status.

### Fluxo

1. Usuário seleciona uma opção no dropdown.
2. O estado `status` é atualizado.
3. O `useEffect` detecta a alteração.
4. A função de filtragem é executada automaticamente.

Essa abordagem permitiu separar a captura do valor da execução da lógica de filtragem.

---

## Implementação da Filtragem

Foi criada a função `selectStatus()` responsável por gerar um novo array contendo apenas os elementos correspondentes ao status selecionado.

### Regras aplicadas

#### Todas

Retorna todas as tarefas.

#### Completas

Retorna apenas tarefas cujo valor de `isCompleted` seja `true`.

#### Incompletas

Retorna apenas tarefas cujo valor de `isCompleted` seja `false`.

---

## Atualização da Interface

O resultado da filtragem é armazenado no estado:

```jsx
todosSearch
```

Esse estado é responsável pela renderização da lista de tarefas na tela.

### Estratégia adotada

* `todos` → fonte principal dos dados.
* `todosSearch` → dados atualmente exibidos na interface.

Essa mesma estratégia já havia sido utilizada na implementação da funcionalidade de pesquisa.

---

## Problema Encontrado

### Comportamento observado

Ao criar uma nova tarefa:

1. A tarefa era criada normalmente.
2. Porém, ao utilizar o filtro de status, a tarefa recém-criada desaparecia.

---

## Investigação

Após analisar o fluxo dos estados foi identificado que:

### Estado atualizado corretamente

```jsx
todosSearch
```

recebia as novas tarefas.

### Estado desatualizado

```jsx
todos
```

continuava armazenando a versão anterior da lista.

Como a função de filtragem utilizava o estado `todos`, as tarefas recém-criadas não participavam da filtragem.

---

## Solução Aplicada

Foi necessário manter ambos os estados sincronizados.

### Antes

A criação de tarefas atualizava apenas:

```jsx
todosSearch
```

### Depois

A criação de tarefas passou a atualizar:

```jsx
todos
```

e

```jsx
todosSearch
```

Dessa forma:

* O array principal permanece atualizado.
* Os filtros trabalham sempre com dados atuais.
* Novas tarefas participam normalmente da filtragem.

---

## Aprendizados

Durante o desenvolvimento desta funcionalidade foram praticados os seguintes conceitos:

### Reutilização de Componentes

Transformação de um componente específico em um componente genérico.

### Lifting State Up

Centralização da lógica principal no componente pai.

### Separação de Responsabilidades

* Componente filho: captura dados.
* Componente pai: processa os dados.

### useEffect

Execução automática de ações após alterações em estados específicos.

### Refatoração

Adequação da estrutura existente para suportar novas funcionalidades sem comprometer o funcionamento anterior.

### Gerenciamento de Estado

Identificação da necessidade de manter estados sincronizados quando ambos representam a mesma fonte de dados em momentos diferentes da aplicação.

---

## Resultado Final

A funcionalidade de filtro por status foi implementada com sucesso utilizando:

* Componente `DropDown` reutilizável.
* Estado dedicado ao controle de status.
* `useEffect` para monitoramento de mudanças.
* Filtragem dinâmica utilizando `filter()`.
* Atualização da interface através do estado `todosSearch`.
* Sincronização dos estados necessários para manter a consistência dos dados.

O código tornou-se mais organizado, reutilizável e preparado para a implementação de futuras funcionalidades.

---

## Observações de Desenvolvimento

Durante esta etapa ficou evidente a importância de analisar a estrutura da aplicação antes de implementar novas funcionalidades.

Em alguns momentos foi necessário refatorar partes já existentes para permitir a expansão do projeto de forma organizada. Esse processo reforçou a ideia de que o desenvolvimento não consiste apenas em adicionar código, mas também em reorganizar e adaptar estruturas existentes para facilitar a manutenção e a evolução da aplicação.

## 📌 Funcionalidade: Ordenação Alfabética das Tarefas

### Objetivo

Implementar uma funcionalidade que permita ordenar as tarefas em ordem alfabética:

* **Crescente (A → Z)**
* **Decrescente (Z → A)**

A ordenação deve reorganizar a tarefa completa (objeto inteiro), mantendo a associação correta entre título, categoria e status.

---

## 🧠 Processo de Análise

Antes de iniciar a implementação, foi necessário entender como as tarefas estavam estruturadas.

Cada tarefa é representada por um objeto:

```js
{
  id: 1,
  text: "Tarefa 1",
  category: "Estudo",
  isCompleted: false
}
```

Inicialmente, a tentativa foi ordenar apenas os títulos das tarefas.

Para isso, foi criado um array contendo somente os valores de `text`, que era ordenado e posteriormente reaplicado às tarefas exibidas na tela.

### Problema encontrado

Ao ordenar apenas os títulos, os demais dados da tarefa permaneciam em suas posições originais.

Exemplo:

Antes:

```text
Tarefa A - Estudo
Tarefa C - Trabalho
Tarefa B - Pessoal
```

Após ordenar somente os títulos:

```text
Tarefa A - Estudo
Tarefa B - Trabalho
Tarefa C - Pessoal
```

Os títulos mudavam de posição, mas as categorias permaneciam onde estavam, causando inconsistência nos dados exibidos.

---

## 💡 Mudança de Estratégia

Após analisar o problema, foi identificado que a ordenação deveria ocorrer sobre os objetos completos e não apenas sobre uma propriedade específica.

Em vez de mover apenas o texto das tarefas, a solução passou a reorganizar os próprios objetos dentro do array.

Dessa forma, todos os dados da tarefa permanecem juntos durante a ordenação:

```js
{
  id: 2,
  text: "Tarefa B",
  category: "Pessoal",
  isCompleted: false
}
```

---

## 🔄 Utilização do Método `sort()`

Foi utilizado o método nativo do JavaScript:

```js
array.sort()
```

Porém, como o array contém objetos, foi necessário informar ao método qual propriedade deveria ser utilizada na comparação.

Para isso, foi utilizada a função:

```js
localeCompare()
```

Responsável por comparar strings de forma adequada para ordenação alfabética.

---

## 📈 Ordenação Crescente (A → Z)

A ordenação crescente foi implementada comparando os títulos das tarefas:

```js
const newArrayOrdenado = [...todosSearch].sort(
  (a, b) => a.text.localeCompare(b.text)
);
```

### O que acontece?

1. É criada uma cópia do array utilizando o operador spread (`...`).
2. O método `sort()` percorre os objetos.
3. Os títulos (`text`) são comparados.
4. Os objetos são reorganizados em ordem alfabética crescente.
5. O novo array é salvo nos states utilizados pela aplicação.

---

## 📉 Ordenação Decrescente (Z → A)

Após compreender o funcionamento do `localeCompare()`, foi possível perceber que inverter a comparação também inverte a ordem da classificação.

Em vez de:

```js
a.text.localeCompare(b.text)
```

foi utilizada:

```js
b.text.localeCompare(a.text)
```

Exemplo:

```js
const newArrayDesordenado = [...todosSearch].sort(
  (a, b) => b.text.localeCompare(a.text)
);
```

### Resultado

A lista passa a ser exibida da última letra para a primeira:

```text
Z
Y
X
...
C
B
A
```

---

## ⚠️ Aprendizado Importante sobre Estados

Durante o desenvolvimento foi identificado que utilizar:

```js
todosSearch.sort(...)
```

modifica diretamente o array armazenado no state.

Isso pode causar comportamentos inesperados no React.

Por esse motivo foi adotada a estratégia:

```js
[...todosSearch].sort(...)
```

que cria uma cópia do array antes da ordenação.

### Benefícios

* Mantém a imutabilidade do state.
* Evita alterações diretas nos dados originais.
* Garante uma atualização correta da interface pelo React.

---

## ✅ Resultado Final

A funcionalidade de ordenação passou a:

* Ordenar tarefas em ordem crescente.
* Ordenar tarefas em ordem decrescente.
* Manter título, categoria e status associados corretamente.
* Utilizar boas práticas de manipulação de estados no React.
* Reutilizar a estrutura já existente do projeto através do componente `Order`.

---

## 📚 Principais Conceitos Aprendidos

* Ordenação de arrays de objetos.
* Diferença entre ordenar propriedades e ordenar objetos completos.
* Utilização do método `sort()`.
* Utilização do método `localeCompare()`.
* Importância da imutabilidade em estados React.
* Uso do operador spread (`...`) para criar cópias de arrays.
* Organização da lógica de ordenação no componente pai (`App.jsx`).
* Reutilização de componentes para novas funcionalidades.

### Evolução do raciocínio

A principal evolução nesta funcionalidade foi perceber que não era necessário criar arrays separados para cada propriedade da tarefa.

Em vez disso, a solução correta foi tratar cada tarefa como uma unidade única (objeto completo) e apenas reorganizar a posição desses objetos dentro do array.

Essa mudança simplificou significativamente a implementação e tornou a solução mais robusta para futuras funcionalidades.
