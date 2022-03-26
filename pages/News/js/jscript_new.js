//Show more button

// goi nut button de gan su kien vao
const button = document.getElementById("buttonnew")

// gan su kien click cho button
button.addEventListener("click", function(){
    // goi cac subnew co class bonus ~ cac subnew duoc bi an di
    // hien gio trong mang. tat ca subnew dang co display = none

    const subnews = document.getElementsByClassName("bonus")
   
    // dem nhung subnew duoc hien ra
    let count = 0 ;

    // dem vi tri subnew trong mang;
    let i = 0;
    // xet tu dau toi cuoi mang ( bang i = 0 -> i < subnews.length)
    // va minh chi muon hien toi da 3 subnew moi lan click
    // => dat dieu kien count < 3
    while( i < subnews.length && count < 3 ){
        if( subnews[i].style.display != "table-row" ){
            subnews[i].style.display = "table-row"
            count++;
        }
        i++;
    }
    
   

    
})