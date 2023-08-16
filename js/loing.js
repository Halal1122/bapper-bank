console.log('hlw')

document.getElementById('btn-click').addEventListener('click', function () {
    const emailField = document.getElementById('email-item');
    const email = emailField.value;
    const passwordField = document.getElementById('password-item');
    const password = passwordField.value;
    console.log(email, password);
    if (email === 'sontan@baapemail.com' && password === 'helal') {
        window.location.href = 'http://127.0.0.1:5500/dipo.html'
    } else {
        console.log('invild')

    }
})