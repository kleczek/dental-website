//Fuction expression to select elements
const selectElement = (s) => document.querySelector(s);
//Open menu on click
selectElement('.open').addEventListener('click', () => {
	selectElement('.nav-list').classList.add('active');
});
//Close menu on click
selectElement('.close').addEventListener('click', () => {
	selectElement('.nav-list').classList.remove('active');
});
//scroll menu
selectElement('nav a[href*="#"]').addEventListener('click',() {
		selectElement('html, body').animate({
			scrollTop: selectElement(selectElement(this).attr('href')).offset().top-100
		}, 2000);
	});