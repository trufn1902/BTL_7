var contentlist = document.querySelector("#contentlist")

var arr = [
{
    stt:"1",
    code: "55043886653",
    phonenumber: "0988456723",
    ordervalue: "900.000",
    details: "... Địa chỉ nhận: Đường 23, phố Nguyễn Huệ, Hà Nội, ...",
    collection: "850.000",
    status: "Mất",
    freight: "53.000",
    comeback: "0",
    indemnify: "450.000",
},

{
    stt:"2",
    code: "848550438",
    phonenumber: "0345214568",
    ordervalue: "600.000",
    details: "... Địa chỉ nhận: Thôn 2, Kim Liên, Quốc Oai, Hà Nội, ...",
    collection: "0",
    status: "Chuyển hoàn",
    freight: "22.000",
    comeback: "11.500",
    indemnify: "0",
},
];

function delivery(){
    let Expressdelivery = arr.map ((ord,i) => {
        return`
        <tr>
            <td>${ord.stt}</td>
            <td>${ord.code}</td>
            <td>${ord.phonenumber}</td>
            <td>${ord.ordervalue}</td>
            <td>
                <a href=""><i class="fa-solid fa-eye"></i></a>
            </td>
            <td>${ord.collection}</td>
            <td>${ord.status}</td>
            <td>${ord.freight}</td>
            <td>${ord.comeback}</td>
            <td>${ord.indemnify}</td>
            <td>
                <a href = "#" onclick="editadd(this.id)" id="${ord.stt}" ><i class="fa-solid fa-pencil"></i></a>
            </td>
            <td>
                <a href = "#" onclick="deleteadd(this.id)" id="${ord.stt}" ><i class="fa-solid fa-trash-can"></i></a>
            </td>
        </tr>
         `;
    });
    contentlist.innerHTML = Expressdelivery.join("");
}

var morenew = document.querySelector("#morenew")
var isMorenew = false;
morenew.addEventListener("click", () => {
  isMorenew = !isMorenew;
  if (isMorenew) {
    addnew.classList.remove("form");
    addnew.classList.add("noform");
  } else {
    addnew.classList.remove("noform");
    addnew.classList.add("form");
  }
});

//Add
inputCode = document.querySelector("input[name=code]");
inputPhoneNumber = document.querySelector("input[name=phonenumber]");
inputOrderValue = document.querySelector("input[name=ordervalue]");
inputDetails = document.querySelector("textarea[name=details]");
inputFreight = document.querySelector("input[name=freight]");
inputComeback = document.querySelector("input[name=comeback]");
inputStatus = document.querySelector("input[name=status]");
inputCollection = document.querySelector("input[name=collection]");
inputIndemnify = document.querySelector("input[name=indemnify]");


let add = document.getElementById("add");
add.addEventListener("click", (e) => {
    e.preventDefault();
    let newlist = {
      stt: arr.length + 1,
      code: inputCode.value,
      phonenumber: inputPhoneNumber.value,
      ordervalue: inputOrderValue.value,
      details: inputDetails.value,
      collection: inputCollection.value,
      status: inputStatus.value,
      freight: inputFreight.value,
      comeback: inputComeback.value,
      indemnify: inputIndemnify.value,  
    };
  
    arr.push(newlist);
    delivery()
});
       


let submit = document.getElementById('add')
function disableBtn(){
    submit.disabled = true
  }
  
function enableBtn(){
    submit.disabled = false
}

let Code = document.getElementById('code')
let statusOfCode = document.getElementById('statusOfCode')
let checkCode = false

Code.addEventListener('focusout', () =>{
    let CodeRegex = /^[0-9]+$/

    if (CodeRegex.test(Code.value)){
        statusOfCode.textContent = ''
        statusOfCode.style.color = ''
        checkCode = true
    }else{
        statusOfCode.textContent = 'Vui lòng nhập thông tin theo gợi ý'
        statusOfCode.style.color = 'red'
        checkCode = false
    }
})

let Phonenumber = document.getElementById('phonenumber')
let statusOfPhonenumber = document.getElementById('statusOfPhonenumber')
let checkPhonenumber = false

Phonenumber.addEventListener('focusout', () =>{
    let PhonenumberRegex = /^[0-9]{10}$/

    if (PhonenumberRegex.test(phonenumber.value)){
        statusOfPhonenumber.textContent = ''
        statusOfPhonenumber.style.color = ''
        checkPhonenumber = true
    }else{
        statusOfPhonenumber.textContent = 'Vui lòng nhập thông tin theo gợi ý'
        statusOfPhonenumber.style.color = 'red'
        checkPhonenumber = false
    }
})


let Ordervalue = document.getElementById('ordervalue')
let statusOfOrdervalue = document.getElementById('statusOfOrdervalue')
let checkOrdervalue = false
Ordervalue.addEventListener('focusout', () =>{
    let OrdervalueRegex = /^\$?\d+((,\d{3})+)?(\.\d+)?$/

    if (OrdervalueRegex.test(ordervalue.value)){
        statusOfOrdervalue.textContent = ''
        statusOfOrdervalue.style.color = ''
        checkOrdervalue = true
    }else{
        statusOfOrdervalue.textContent = 'Vui lòng nhập thông tin theo gợi ý'
        statusOfOrdervalue.style.color = 'red'
        checkOrdervalue = false
    }
})

let Freight = document.getElementById('freight')
let statusOfFreight = document.getElementById('statusOfFreight')
let checkFreight = false
Freight.addEventListener('focusout', () =>{
    let FreightRegex = /^\$?\d+((,\d{3})+)?(\.\d+)?$/

    if (FreightRegex.test(freight.value)){
        statusOfFreight.textContent = ''
        statusOfFreight.style.color = ''
        checkFreight = true
    }else{
        statusOfFreight.textContent = 'Vui lòng nhập thông tin theo gợi ý'
        statusOfFreight.style.color = 'red'
        checkFreight = false
    }
})

let Comeback = document.getElementById('comeback')
let statusOfComeback = document.getElementById('statusOfComeback')
let checkComeback = false
Comeback.addEventListener('focusout', () =>{
    let ComebackRegex = /^\$?\d+((,\d{3})+)?(\.\d+)?$/

    if (ComebackRegex.test(comeback.value)){
        statusOfComeback.textContent = ''
        statusOfComeback.style.color = ''
        checkComeback = true
    }else{
        statusOfComeback.textContent = 'Vui lòng nhập thông tin theo gợi ý'
        statusOfComeback.style.color = 'red'
        checkComeback = false
    }
})

let Collection = document.getElementById('collection')
let statusOfCollection = document.getElementById('statusOfCollection')
let checkCollection = false
Collection.addEventListener('focusout', () =>{
    let CollectionRegex = /^\$?\d+((,\d{3})+)?(\.\d+)?$/

    if (CollectionRegex.test(collection.value)){
        statusOfCollection.textContent = ''
        statusOfCollection.style.color = ''
        checkCollection = true
    }else{
        statusOfCollection.textContent = 'Vui lòng nhập thông tin theo gợi ý'
        statusOfCollection.style.color = 'red'
        checkCollection = false
    }
})

setInterval(() =>{
    if (checkCode && checkPhonenumber && checkOrdervalue && checkFreight && checkComeback && checkCollection)
        enableBtn()
    else{
        disableBtn()
    }
}, 1)

function deleteadd(stt){
    arr = arr.filter(ord => ord.stt != stt )
    delivery()
}
//Edit
let sttedit

function editadd(stt){
    let orderedit = arr.filter(ord => ord.stt == stt)[0]
 
    sttedit = stt
    inputCode.value = orderedit.code
    inputPhoneNumber.value = orderedit.phonenumber
    inputOrderValue.value = orderedit.ordervalue
    inputDetails.value = orderedit.details
    inputCollection.value = orderedit.collection
    inputStatus.value = orderedit.status
    inputFreight.value = orderedit.freight
    inputComeback.value = orderedit.comeback
    inputIndemnify.value = orderedit.indemnify
    isMorenew = true;
    if (isMorenew) {
        addnew.classList.remove("form");
        addnew.classList.add("noform");
    } 
    const editOrder = document.getElementById("edit")
    editOrder.disabled = false;
}

function update(){
    let newlist = {
        stt: sttedit,
        code: inputCode.value ,
        phonenumber: inputPhoneNumber.value,
        ordervalue: inputOrderValue.value,
        details: inputDetails.value,
        collection: inputCollection.value,
        status: inputStatus.value,
        freight: inputFreight.value ,
        comeback: inputComeback.value,
        indemnify: inputIndemnify.value,
    };

    for( let i = 0 ; i < arr.length ; i++){
        if( arr[i].stt == sttedit){
            arr[i] = newlist
        }
    }
    delivery();
}

const editBtn = document.getElementById("edit")

editBtn.addEventListener("click", function(e){
    e.preventDefault()
    update()
})

delivery();
