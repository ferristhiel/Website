const rotatingCard = document.getElementById('rotatingCard');
const loginForm = document.getElementById('loginForm');
const privacyBtn = document.getElementById('privacyBtn');
const privacyModal = document.getElementById('privacyModal');
const closePrivacy = document.getElementById('closePrivacy');
const loading = document.getElementById('loading');
const form = document.getElementById('form');
const form = document.getElementById('form');
const loading = document.getElementById('loading');


// Flip-Effekt (zum Anzeigen des Formulars)
rotatingCard.addEventListener('click', () => {
  rotatingCard.classList.add('hidden');
  loginForm.classList.remove('hidden');
});

// Datenschutz anzeigen
privacyBtn.addEventListener('click', () => {
  privacyModal.hidden = false;
});

closePrivacy.addEventListener('click', () => {
  privacyModal.hidden = true;
});

// Ladeanimation beim Abschicken
form.addEventListener('submit', (e) => {
  e.preventDefault();
  loading.hidden = false;

  const delay = Math.floor(Math.random() * 5000) + 1000;
  setTimeout(() => {
    loading.hidden = true;
    alert("Formular erfolgreich abgeschickt!");
    form.reset();
  }, delay);
});