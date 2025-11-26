// --- Hamburger menu behavior ---
const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('header nav')
menuToggle.addEventListener('click', () => {
	const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
	menuToggle.setAttribute('aria-expanded', String(!expanded));
	primaryNav.classList.toggle('closed');
});

// Close when clicking outside
document.addEventListener('click', (e) => {
	if (!primaryNav.contains(e.target) && !menuToggle.contains(e.target)) {
		menuToggle.setAttribute('aria-expanded', 'false');
		primaryNav.classList.remove('open');
	}
});

// Close on Escape
document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		menuToggle.setAttribute('aria-expanded', 'false');
		primaryNav.classList.remove('open');
		menuToggle.focus();
	}
});