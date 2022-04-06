//Show more button
const button = document.getElementById("buttonnew")

button.addEventListener("click", function(){
    const subnews = document.getElementsByClassName("bonus")
    let count = 0 ;
    let i = 0;
    while( i < subnews.length && count < 3 ){
        if( subnews[i].style.display != "table-row" ){
            subnews[i].style.display = "table-row"
            count++;
        }
        i++;
    }
})