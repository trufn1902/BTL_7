const fullName = document.querySelector('.fullName')
fullName.textContent = user_login.name

const username = document.querySelector('.username')
username.textContent = user_login.username

const phone = document.querySelector('.phone')
phone.textContent = user_login.phone.slice(0, 2) + '*****' + user_login.phone.slice(8, 10)

const email = document.querySelector('.email')
email.textContent = user_login.email