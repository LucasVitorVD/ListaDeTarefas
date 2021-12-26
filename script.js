const elementoInput = document.querySelector('.input')
const botaoAdicionar = document.querySelector('.adicionarBtn')
const listaUl = document.querySelector('.ul')

const localStorageTarefas = JSON.parse(localStorage.getItem('tarefas'))
let tarefas = localStorage.getItem('tarefas') !== null ? localStorageTarefas : []

const mostrarTarefas = () => {
  let item = ''
  for (tarefa of tarefas) {
    const pos = tarefas.indexOf(tarefa)

    item += `<li>${tarefa} <a onclick="excluirTarefa(${pos})">X</a></li>` 
  }

  listaUl.innerHTML = `${item}`
}

const updateLocalStorage = () => localStorage.setItem('tarefas', JSON.stringify(tarefas))

botaoAdicionar.addEventListener('click', () => {
  tarefas.push(elementoInput.value)
  elementoInput.value = ''
  localStorage.setItem("tarefas", JSON.stringify(tarefas))
  
  mostrarTarefas()
  updateLocalStorage()
})

const excluirTarefa = (pos) => {
  tarefas.splice(pos, 1)
  updateLocalStorage()
  mostrarTarefas()
}

//comentario de teste...