var inps = document.querySelectorAll('.form-input')
var form = document.getElementsByClassName('form-group')

console.log(inps)
console.log(form)

form[0].addEventListener('submit', function (e) {
    e.preventDefault()

    let username = inps[0].value
    let email = inps[1].value
    let password = inps[2].value
    let confirm_password = inps[3].value

    if (username == '') {
        document.getElementById('username_err').innerHTML = 'username cant be empty'
        inps[0].classList.add('error-border')
        return false
    }
    if (username.length > 6) {
        document.getElementById('username_err').innerHTML = 'username must be less than 6'
        inps[0].classList.add('error-border')
        return false;
    }
    else {
        document.getElementById('username_err').innerHTML = ''
        inps[0].classList.remove('error-border')
        inps[0].classList.add('success-border')
    }


    if (email == '') {
        document.getElementById('email_err').innerHTML = 'email cant be empty'
        inps[1].classList.add('error-border')
        return false;
    }
    if (email.indexOf('@') == -1) {
        document.getElementById('email_err').innerHTML = 'email is ivalid'
        inps[1].classList.add('error-border')
        return false;
    }
    else {
        document.getElementById('email_err').innerHTML = ''
        inps[1].classList.remove('error-border')
        inps[1].classList.add('success-border')
    }
    if (password == '') {
        document.getElementById('password_err').innerHTML = 'password cant be empty'
        inps[2].classList.add('error-border')
        return false;
    }
    if (isNaN(password)) {
        document.getElementById('password_err').innerHTML = 'password must be numbers'
        inps[2].classList.add('error-border')
        return false;
    }

    else {
        document.getElementById('password_err').innerHTML = ''
        inps[2].classList.remove('error-border')
        inps[2].classList.add('success-border')
    }

    if (password !== confirm_password) {
        document.getElementById('conf_pass_err').innerHTML = 'password didnt match'
        inps[3].classList.add('error-border')
        return false;
    }
    else {
        document.getElementById('conf_pass_err').innerHTML = ''
        inps[3].classList.remove('error-border')
        inps[3].classList.add('success-border')
    }


})