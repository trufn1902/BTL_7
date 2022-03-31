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

function checkPhoneNumber(){
    const inputPhoneNumber = document.getElementsByName('phone')[0]
    const phoneNumber = inputPhoneNumber.value
    const phoneNumberRegex = /^0[0-9]{9}$/
    const clear = document.querySelector('.clearPhone')
    const statusOfPhone = document.querySelector('.statusOfPhone')
    
    if (phoneNumber.length == 0){
        statusOfPhone.textContent = 'Số điện thoại không được để trống'
        inputPhoneNumber.classList.add('has-error')
        clear.classList.add('hidden')
    }else{
        if (phoneNumberRegex.test(phoneNumber)){
            statusOfPhone.textContent = ''
            inputPhoneNumber.classList.remove('has-error')
        }else{
            statusOfPhone.textContent = 'Số điện thoại di động không khả dụng'
            inputPhoneNumber.classList.add('has-error')
        }
        clear.classList.remove('hidden')
    }

    clear.addEventListener('click', () =>{
        inputPhoneNumber.value = ''
        clear.classList.add('hidden')
        inputPhoneNumber.classList.add('has-error')
        statusOfPhone.textContent = 'Số điện thoại không được để trống'
    })
}

function isNumber(e) {
    var charCode = (e.which) ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function checkCode(){
    const inputCode = document.getElementsByName('code')[0]
    const code = inputCode.value
    const statusOfCode = document.querySelector('.statusOfCode')

    if (code.length == 0){
        inputCode.classList.add('has-error')
        statusOfCode.textContent = 'Mã xác minh không được để trống'
    }else{
        inputCode.classList.remove('has-error')
        statusOfCode.textContent = ''
    }
}

function checkUsername(){
    const inputUsername = document.getElementsByName('username')[0]
    const username = inputUsername.value
    const usernameRegex = /^[a-zA-Z0-9]{5,20}$/
    const statusOfUsername = document.querySelector('.statusOfUsername')
    const clear = document.querySelector('.clearUsername')
    
    if (username.length == 0){
        statusOfUsername.textContent = 'Tên đăng nhập không được để trống'
        inputUsername.classList.add('has-error')
        clear.classList.add('hidden')
    }else{
        if (usernameRegex.test(username)){
            statusOfUsername.textContent = ''
            inputUsername.classList.remove('has-error')
        }else{
            statusOfUsername.textContent = 'Tên người dùng cần có 5-20 chữ cái'
            inputUsername.classList.add('has-error')
        }
        clear.classList.remove('hidden')
    }

    clear.addEventListener('click', () =>{
        inputUsername.value = ''
        clear.classList.add('hidden')
        inputUsername.classList.add('has-error')
        statusOfUsername.textContent = 'Tên đăng nhập không được để trống'
    })
}

function checkPass(){
    const inputPass = document.getElementsByName('password')[0]
    const pass = inputPass.value
    const passRegex = /^[a-zA-z0-9]{6,}$/
    const passRegex_number = /[0-9]/
    const passRegex_char = /[a-zA-Z]/
    const statusOfPass = document.querySelector('.statusOfPass')
    
    if (pass.length == 0){
        statusOfPass.textContent = 'Mật khẩu không được để trống'
        inputPass.classList.add('has-error')
    }else{
        if (passRegex.test(pass)){
            if (!passRegex_char.test(pass) || !passRegex_number.test(pass)){
                statusOfPass.textContent = 'Mật khẩu phải bao gồm cả số và chữ cái'
                inputPass.classList.add('has-error')
            }else{
                statusOfPass.textContent = ''
                inputPass.classList.remove('has-error')
            }
        }else{
            statusOfPass.textContent = 'Mật khẩu ít nhất chứa 6 kí tự'
            inputPass.classList.add('has-error')
        }
    }
}

function checkEmail(){
    const clear = document.querySelector('.clearEmail')
    const inputEmail = document.getElementsByName('email')[0]
    const email = inputEmail.value
    const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+\.+[A-Z]{2,4}/igm
    const statusOfEmail = document.querySelector('.statusOfEmail')

    if (email.length != 0){
        if (emailRegex.test(email)){
            statusOfEmail.textContent = ''
            inputEmail.classList.remove('has-error')
        }else{
            statusOfEmail.textContent = 'Địa chỉ hộp thư không khả dụng'    
            inputEmail.classList.add('has-error')
        }
        clear.classList.remove('hidden')
    }else{
        statusOfEmail.textContent = ''
        clear.classList.add('hidden')
        inputEmail.classList.remove('has-error')
    }

    clear.addEventListener('click', () =>{
        inputEmail.value = ''
        clear.classList.add('hidden')
        inputEmail.classList.remove('has-error')
        statusOfEmail.textContent = ''
    })
}

function btnSubmit(e){
    const inputPhoneNumber = document.getElementsByName('phone')[0]
    const inputCode = document.getElementsByName('code')[0]
    const inputPassword = document.getElementsByName('password')[0]

    const statusOfPhone = document.querySelector('.statusOfPhone')
    const statusOfCode = document.querySelector('.statusOfCode')
    const statusOfPassword = document.querySelector('.statusOfPass')

    e.preventDefault()
    if (inputPhoneNumber.value.length == 0){
        statusOfPhone.textContent = 'Số điện thoại không được để trống'
        inputPhoneNumber.classList.add('has-error')
    }

    if (inputCode.value.length == 0){
        statusOfCode.textContent = 'Mã xác minh không được để trống'
        inputCode.classList.add('has-error')
    }

    if (inputPassword.value.length == 0){
        statusOfPassword.textContent = 'Mật khẩu không được để trống'
        inputPassword.classList.add('has-error')
    }
}