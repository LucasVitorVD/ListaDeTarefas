const elementoInput = document.querySelector('.input')
const addBtn = document.querySelector('.addBtn')
const listaUl = document.querySelector('.ul-tasks')

const localStorageTarefas = JSON.parse(localStorage.getItem('tarefas'))
let tarefas = localStorage.getItem('tarefas') !== null ? localStorageTarefas : []

const mostrarTarefas = () => {
  let item = ''
  for (tarefa of tarefas) {
    const pos = tarefas.indexOf(tarefa)
    item += `<li class="task">${tarefa} <a onclick="excluirTarefa(${pos})">X</a></li>` 
  }

  listaUl.innerHTML = `${item}`
}

const updateLocalStorage = () => localStorage.setItem('tarefas', JSON.stringify(tarefas))

addBtn.addEventListener('click', () => {
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