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

  const output = document.getElementById("outputText");
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");

  // Tekst van Pokeball 1 (de standaardtekst)
  const text1 = "When its huge eyes waver, it sings a mysteriously soothing melody that lulls its enemies to sleep.";

  // Tekst van Pokeball 2 (nieuwe tekst)
  const text2 = "If it inflates to sing a lullaby, it can perform longer and cause sure drowsiness in its audience.";

  // Klik op Pokéball 1 → originele tekst
  btn1.addEventListener("click", () => {
    output.textContent = text1;
  });

  // Klik op Pokéball 2 → andere tekst
  btn2.addEventListener("click", () => {
    output.textContent = text2;
  });

