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