function chooseLang(){
    const langs = document.querySelectorAll('.lang')

    const h2 = document.getElementsByTagName('h2')[0]
    const inputUserID = document.getElementsByName('userID')[0]
    const inputPassword = document.getElementsByName('password')[0]
    const forgotPass = document.querySelector('.forgot-pass')
    const register = document.querySelector('.register')
    const login = document.getElementsByTagName('button')[0]
    const statusOfUserID = document.querySelector('.statusOfUserID')
    const statusOfPass = document.querySelector('.statusOfPassword')

    langs.forEach(lang => {
        lang.addEventListener('click', () =>{
            const num = lang.id
            if (!lang.classList.contains('active')){
                lang.classList.add('active')
                langs[1-num].classList.remove('active')
            }

            if (lang.getAttribute('data-lang') == 'vi'){
                h2.textContent = 'Đăng nhập'
                inputUserID.placeholder = 'Số điện thoại / Email / Tên đăng nhập'
                inputPassword.placeholder = 'Mật khẩu'
                forgotPass.textContent = 'Quên mật khẩu'
                register.textContent = 'Đăng ký mới'
                login.textContent = 'Đăng nhập'
                if (statusOfUserID.textContent.length != 0)
                    statusOfUserID.textContent = 'Tài khoản không được để trống'
                if (statusOfPass.textContent.length != 0)
                    statusOfPass.textContent = 'Mật khẩu không được để trống'
            }else{
                h2.textContent = 'Login'
                inputUserID.placeholder = 'Email / Phone number / User name'
                inputPassword.placeholder = 'Password'
                forgotPass.textContent = 'Forget Password'
                register.textContent = 'Sign up'
                register.style.textTransform = 'uppercase'
                login.textContent = 'Login'
                if (statusOfUserID.textContent.length != 0)
                    statusOfUserID.textContent = 'Account is required'
                if (statusOfPass.textContent.length != 0)
                    statusOfPass.textContent = 'Password is required'
            }
        })
        
    })
}

// Ẩn hiện pass
function togglePass(){
    const eyeOpen = document.querySelector('.fa-eye')
    const eyeClose = document.querySelector('.fa-eye-slash')
    const inputPassword = document.getElementsByName('password')[0]

    eyeOpen.addEventListener('click', () =>{
        eyeOpen.classList.add('hidden')
        eyeClose.classList.remove('hidden')
        inputPassword.setAttribute('type', 'password')
    })

    eyeClose.addEventListener('click', () =>{
        eyeClose.classList.add('hidden')
        eyeOpen.classList.remove('hidden')
        inputPassword.setAttribute('type', 'text')
    })
}

// Clear input user
function clearUserID(){
    const clear = document.querySelector('.clear')
    const inputUserID = document.getElementsByName('userID')[0]
    const statusOfUserID = document.querySelector('.statusOfUserID')
    const currentLang = document.querySelector('.active').getAttribute('data-lang')
    
    if (inputUserID.value.length == 0){
        clear.classList.add('hidden')
        if (currentLang == 'vi')
            statusOfUserID.textContent = 'Tài khoản không được để trống'
        else
            statusOfUserID.textContent = 'Account is required'
        inputUserID.classList.add('has-error')
    }
    else{
        clear.classList.remove('hidden')
        statusOfUserID.textContent = ''
        inputUserID.classList.remove('has-error')
    }

    clear.addEventListener('click', () =>{
        inputUserID.value = ''
        clear.classList.add('hidden')
        inputUserID.classList.add('has-error')
        if (currentLang == 'vi')
            statusOfUserID.textContent = 'Tài khoản không được để trống'
        else
            statusOfUserID.textContent = 'Account is required'
    })
}

function checkPass(){
    const inputPassword = document.getElementsByName('password')[0]
    const statusOfPass = document.querySelector('.statusOfPassword')
    const currentLang = document.querySelector('.active').getAttribute('data-lang')

    if (inputPassword.value.length == 0){
        if (currentLang == 'vi')
            statusOfPass.textContent = 'Mật khẩu không được để trống'
        else
            statusOfPass.textContent = 'Password is required'
        inputPassword.classList.add('has-error')
    }
    else{
        statusOfPass.textContent = ''
        inputPassword.classList.remove('has-error')
    }
}

function checkAccount(e){
    const inputUserID = document.getElementsByName('userID')[0]
    const inputPassword = document.getElementsByName('password')[0]
    const statusOfUserID = document.querySelector('.statusOfUserID')
    const statusOfPass = document.querySelector('.statusOfPassword')
    const btnSubmit = document.querySelector('.btn-submit')
    
    e.preventDefault()
    const currentLang = document.querySelector('.active').getAttribute('data-lang')
    if (inputUserID.value.length == 0){
        if (currentLang == 'vi')
            statusOfUserID.textContent = 'Tài khoản không được để trống'
        else
            statusOfUserID.textContent = 'Account is required'
        inputUserID.classList.add('has-error')
    }

    if (inputPassword.value.length == 0){
        if (currentLang == 'vi')
            statusOfPass.textContent = 'Mật khẩu không được để trống'
        else
            statusOfPass.textContent = 'Password is required'
        inputPassword.classList.add('has-error')
    }
}