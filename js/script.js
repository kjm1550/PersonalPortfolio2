const links = document.querySelectorAll('.nav-link');

function clickHandler(e) {
	e.preventDefault();
	const href = this.getAttribute('href');
	const offsetTop = document.querySelector(href).offsetTop;

	scroll({
		top: offsetTop,
		behavior: 'smooth',
	});
}

for (const link of links) {
	link.addEventListener('click', clickHandler);
}
