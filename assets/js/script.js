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