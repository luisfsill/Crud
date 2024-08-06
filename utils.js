index = 1

function register() {
	personName = document.getElementById("personName").value;
	personDate = document.getElementById("birthday").value;

	table = document.getElementsByTagName("table")[0]
	tbody = document.getElementsByTagName("tbody")[0]
	tr = document.createElement("tr")
	tr.setAttribute("id", index)

	id = document.createElement("td")
	id.innerHTML = index

	user = document.createElement("td")
	user.innerHTML = `<a href='#'>${personName}</a>`

	birthday = document.createElement("td")
	birthday.innerHTML = personDate

	ctas = document.createElement("td")
	ctas.innerHTML = `<a class='btn-outline edit' href='#'>Editar</a><a class='btn-outline delete' href='#' onclick='remove(${index})'>Excluir</a>`

	tr.appendChild(id)
	tr.appendChild(user)
	tr.appendChild(birthday)
	tr.appendChild(ctas)
	tbody.appendChild(tr)

	index++
}

function remove(id) {
	node = document.getElementById(id)
	node.remove()
}

function opening() {
	modal = document.getElementsByClassName("modal")[0]
	state = modal.getAttribute("style")
	if (state == "display: none;") {
		modal.setAttribute("style", "display: block;")
	} else {
		modal.setAttribute("style", "display: none;")
	}
}