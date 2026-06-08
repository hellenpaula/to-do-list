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
