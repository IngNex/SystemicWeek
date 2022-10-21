const form = document.querySelector('#form-search')
const codigo = document.querySelector('#codigo')
const result = document.querySelector('.result')
const info = document.querySelector('.info')
form.addEventListener('submit', async (e) => {
	e.preventDefault()
	if (codigo.value === '') {
		info.innerText = 'complete el formulario'
		result.classList.add('active')
	} else {
		result.innerHTML=""
		const formData = new FormData(form)
		const response = await fetch('./search.php', {
			method: 'POST',
			body: formData,
		})
		const data = await response.json()
		const template = `<div class="check"><span class="icon-ok"></span></div><h1>Código Verificado</h1><h3>El certificado fue otorgado y verificado por TDI Perú y toda su información es válida.</h3><p class="infoe">${data[0].curso}</p><hr><h1>Código:</h1><p class="infoc">${data[0].codigo}</p><hr><h1>Alumno:</h1><p class="infoc">${data[0].nombre}</p><hr><h1>Fecha de Entrega:</h1><p class="infod">${data[0].fecha}</p>`
		console.log(data)
		console.log(template)
		result.innerHTML=template
		result.classList.add('active')
	}
})
