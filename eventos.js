const lista = document.getElementById('lista');
const btnAgregar = document.getElementById('btn-agregar');

lista.addEventListener('click', (e) => {
    //Como se le agrega el evento a toda la lista y no hay un prevent default todos los 
    //hijos de esa lista van a tener el mismo evento
    console.log(e.target.tagName)
    //si no se agrega esta validacion la lista va a tener un tag de activo
    if(e.target && e.target.tagName ==='A') {
        //toggle sirve tambien para agregar clases
        e.target.classList.toggle('activo');
    }
});

btnAgregar.addEventListener('click', () => {
	const elemento = `
		<a href="#">
			Elemento <i class="bi bi-check-square-fill"></i>
		</a>
	`;

	lista.innerHTML += elemento;
});