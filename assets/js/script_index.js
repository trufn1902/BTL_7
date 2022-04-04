// Slide Show
const slide_show = () => {
    let cnt = 1
    const btns = document.querySelectorAll('.manual-btn')
    btns.forEach(btn =>{
        btn.addEventListener('click', () =>{
            let forStr = btn.getAttribute('for').split('')
            cnt = forStr[forStr.length - 1]
        })
    })

    setInterval(() =>{
        document.getElementById('radio' + cnt).checked = true
        cnt++
        if (cnt > 8)
            cnt = 1
    }, 3000)
}

slide_show()

// Services under slide show
const services = document.querySelectorAll('.services-link')

services.forEach(service =>{
    let src1 = service.children[0].src
    let src2 = service.children[0].src.slice(0, -4) + '_2.png'
    service.addEventListener('mouseover', () =>{
        service.classList.add('services-enter')
        service.children[0].src = src2
    })

    service.addEventListener('mouseout', () =>{
        service.classList.remove('services-enter')
        service.children[0].src = src1
    })
})

// Search
const search = document.querySelector('.taginput-input')
const searchInput = document.querySelector('.search-input')
const tagInput = document.querySelector('.taginput')

search.addEventListener('focus', () =>{
    searchInput.className = 'search-input-focus'
    tagInput.className = 'taginput-focus'
})

search.addEventListener('focusout', () =>{
    searchInput.className = 'search-input'
    tagInput.className = 'taginput'
})
// ===========
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