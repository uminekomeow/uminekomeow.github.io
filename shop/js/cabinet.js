const registrationForm = document.getElementById('registrationForm');
const loginForm = document.getElementById('loginForm');
const switchToLogin = document.getElementById('switchToLogin');
const switchToRegistration = document.getElementById('switchToRegistration');

switchToLogin.addEventListener('click', function () {
    registrationForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
});

switchToRegistration.addEventListener('click', function () {
    loginForm.classList.add('hidden');
    registrationForm.classList.remove('hidden');
});