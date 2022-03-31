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