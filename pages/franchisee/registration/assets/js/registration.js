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
    }
    else{
        statusOfPhone.textContent = 'Số điện thoại di động không khả dụng'
        statusOfPhone.style.color = '#FF0000'
        chekcPhone = false
    }
})
