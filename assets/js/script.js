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