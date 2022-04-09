// name
function checkName() {
    
    let memName = document.getElementById('mem_name')
    let statusOfName = document.getElementById('statusOfName')
    // let checkMember = false
     
    const memberNameRegex = /^[a-zA-Z\s]+$/
    if (memName.value.length==0) {
            statusOfName.textContent = 'Tên không được để trống'
            // checkMember =false
    }
    else{
        if (memberNameRegex.test(memName.value)) {
            statusOfName.textContent= ''
            // checkMember = true
        } else {
            statusOfName.textContent = 'tên không hợp lệ'
            // checkMember = false
        }
    }



        if(memberNameRegex.test(memName.value))
        {
            statusOfName.textContent = ' '
    
            checkMember = true
        }
        else{
            statusOfName.textContent = 'Tên không hợp lệ'
            statusOfName.style.color = '#FF0000'
            // checkMember = false
        }
    
}

//phone
let memPhone = document.getElementById('mem_phone')
let statusOfPhone = document.getElementById('statusOfPhone')
let chekcPhone = false
memPhone.addEventListener('focusout',()=>{
    let memPhoneRegex =  /^[0-9]{8,11}$/
    if (memPhoneRegex.test(memPhone.value)) {
        chekcPhone =true
        statusOfPhone.textContent=' '
    }
    else{
        statusOfPhone.textContent = 'Số điện thoại di động không khả dụng'
        statusOfPhone.style.color = '#FF0000'
        chekcPhone = false
    }
})

//email

let email = document.getElementById('mem_email')
let statusOfEmail = document.getElementById('statusOfEmail')
let checkEmail = false

email.addEventListener('focusout', () =>{
    let emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+\.+[A-Z]{2,4}/igm

    if (emailRegex.test(email.value)){
        statusOfEmail.textContent = ' '
        checkEmail = true
    }else{
        statusOfEmail.textContent = 'Email không hợp lệ'
        statusOfEmail.style.color = 'red'
        checkEmail = false
    }
})

//Job
let memJob = document.getElementById('mem_currentjob')
let statusOfJob = document.getElementById('statusOfJob')
let checkJob = false
memJob.addEventListener('focusout',()=>{
    let memJobRegex =  /[a-z]$/
    if (memJobRegex.test(memJob.value)) {
        statusOfJob.textContent=' '
        checkJob =true
    }
    // if (memJob.length!=0)
    // {
    //     checkJob = true
    // }
    else{
        statusOfJob.textContent = 'Nghề nghiệp không được để trống'
        statusOfJob.style.color = '#FF0000'
        checkJob = false
    }
})