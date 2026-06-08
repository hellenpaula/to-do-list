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
