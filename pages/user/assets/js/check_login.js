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
            username: 'trung',
            name: 'Nguyễn Văn Trung',
            email: 'trung@tlu.edu.vn',
            phone: '0359052681'
        },
        {
            id: 2,
            username: 'viet',
            name: 'Hoàng Bảo Việt',
            email: 'viet@tlu.edu.vn',
            phone: '0359052681'
        },
        {
            id: 3,
            username: 'hong',
            name: 'Hoàng Thu Hồng',
            email: 'hong@tlu.edu.vn',
            phone: '0363334505'
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
                location.href = "../../Adminpage/Adminpage.html";
            } else if (val.permission == "user") {
                location.href = `../../index.html?id=${users.indexOf(val)}`
            }
        }else {
            alert("Tài khoản hoặc mật khẩu không đúng");
        }
    }

}
