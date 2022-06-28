const items = document.querySelectorAll('.item')

items.forEach(item => {
	item.addEventListener('click', () => {
		removeSelectClasses()
		item.classList.add('select')
	})
})

function removeSelectClasses() {
	items.forEach(item => {
		item.classList.remove('select')
	})
}