const nav_hovers = document.querySelectorAll('.item-link-effect')

nav_hovers.forEach(nav => {
    nav.addEventListener('mouseover', () => {
        if (!nav.classList.contains('link-active'))
            nav.classList.add('itementer')
    })

    nav.addEventListener('mouseout', () => {
        if (!nav.classList.contains('link-active'))
            nav.classList.remove('itementer')
    })
})

const chooseLang = document.querySelector('.fa-angle-down')
const rotate = chooseLang.parentElement

rotate.addEventListener('mouseover', () =>{
    chooseLang.style.transform = 'rotate(180deg)'
})

rotate.addEventListener('mouseout', () =>{
    chooseLang.style.transform = 'rotate(0)'
})

// =============
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const user_id = urlParams.get('id')

const data_from_localStorage = window.localStorage.getItem('db_users')
const obj_users = JSON.parse(data_from_localStorage)
let user_login = obj_users.users[user_id - 1]

const user = document.querySelector('.uname')
const user_link = document.createElement('span')
user_link.className = 'username-link'
const user_link_text = document.createElement('a')
user_link_text.className = 'item-style username-link-text'
user_link_text.textContent = user_login.name
user_link_text.href = `pages/user/profile.html?id=${user_id}`
user_link.appendChild(user_link_text)
const logout = document.createElement('span')
logout.className = 'logout'
const logout_text = document.createElement('span')
logout_text.textContent = 'Đăng xuất'
logout_text.onclick = () =>{
    location.href = 'index.html'
}
logout.appendChild(logout_text)

while (user.firstChild){
    user.removeChild(user.firstChild)
}
user.appendChild(user_link)
user.appendChild(logout)