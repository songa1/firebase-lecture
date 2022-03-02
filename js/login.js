

const loginBtn = document.getElementById('loginBtn');
const email = document.getElementById('email');
const password = document.getElementById('password');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email.value, password.value).then(res => {
        location.href = 'dashboard/posts.html'
    }).catch(err => {
        alert(err.message)
    })
})