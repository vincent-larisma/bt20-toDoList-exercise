const gridContainer = document.querySelector('.grid-container')
const toDoHeader = document.querySelector('.todolist-header')
const toDoListInput = document.querySelector('[data-toDoList-input]')
const btnSubmit = document.querySelector('button')
const toDoList = document.querySelector('.todolist')

btnSubmit.addEventListener('click', () => {
	const listed = document.createElement('input')
	const deleted = document.createElement('div')
	const edit = document.createElement('div')
	listed.setAttribute('type', 'text')
	listed.readOnly = true
	listed.value = toDoListInput.value
	deleted.textContent = 'DELETE'
	edit.textContent = 'EDIT'
	toDoList.appendChild(listed)
	toDoList.appendChild(edit)
	toDoList.appendChild(deleted)
	toDoListInput.value = ''
	deleted.style.cursor = 'pointer'
	edit.style.cursor = 'pointer'
	deleted.addEventListener('click', () => {
		listed.remove()
		deleted.remove()
		edit.remove()
	})
	edit.addEventListener('click', () => {
		edit.textContent = 'SAVE'
		listed.readOnly = false

		edit.addEventListener('click', () => {
			edit.textContent = 'EDIT'
			listed.readOnly = true
		})
	})
})
