let users = [
    {
        username: 'admin',
        password: 'admin',
        permission: 'admin'
    },
    {
        username: 'trung',
        password: '123',
        permission: 'user',
    },
    {
        username: 'viet',
        password: '123',
        permission: 'user',
    },
    {
        username: 'hong',
        password: '123',
        permission: 'user',
    },
]

const data = {
    users: [
        {
            id: 1,
            name: 'Nguyễn Văn Trung',
            address: 'Hà Nội',
            email: 'trung@tlu.edu.vn',
            dob: '19th February, 2002'
        },
        {
            id: 2,
            name: 'Hoàng Bảo Việt',
            address: 'Hà Nội',
            email: 'viet@tlu.edu.vn',
            dob: '19th February, 1998'
        },
        {
            id: 3,
            name: 'Hoàng Thu Hồng',
            address: 'Hà Nội',
            email: 'hong@tlu.edu.vn',
            dob: '19th February, 2002'
        }
    ]
}

let json_data = JSON.stringify(data)
window.localStorage.setItem('db_users', JSON.stringify(data))

function check_user(username, password, users) {
    for (i in users) {
        let user = users[i];
        if (user.username == username && user.password == password) {
            return user;
        }
    }
    return false;
}

function login(){
    event.preventDefault()
    const userID = myForm.userID
    const password = myForm.password
    const statusOfUserID = document.querySelector('.statusOfUserID')
    const statusOfPass = document.querySelector('.statusOfPassword')
    const btnSubmit = document.querySelector('.btn-submit')

    const currentLang = document.querySelector('.active').getAttribute('data-lang')
    if (userID.value.length == 0){
        if (currentLang == 'vi')
            statusOfUserID.textContent = 'Tài khoản không được để trống'
        else
            statusOfUserID.textContent = 'Account is required'
        userID.classList.add('has-error')
    }

    if (password.value.length == 0){
        if (currentLang == 'vi')
            statusOfPass.textContent = 'Mật khẩu không được để trống'
        else
            statusOfPass.textContent = 'Password is required'
        password.classList.add('has-error')
    }

    let val = check_user(userID.value, password.value, users)

    if (userID.value.length != 0 && password.value.length != 0){
        if (val != false){
            if (val.permission == "admin") {
                location.href = "../../../Adminpage/Adminpage.html";
            } else if (val.permission == "user") {
                location.href = `../../../index.html?id=${users.indexOf(val)}`
            }
        }else {
            alert("Tài khoản hoặc mật khẩu không đúng");
        }
    }

}
