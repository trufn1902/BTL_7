const contentlist = document.querySelector("#contentlist")

const arr = [
{
    stt:"1",
    code: "55043886653",
    phonenumber: "0988456723",
    ordervalue: "900.000",
    details: "... Địa chỉ nhận: Đường 23, phố Nguyễn Huệ, Hà Nội, ...",
    freight: "53.000",
    comeback: "0",
    status: "Mất",
    collection: "850.000",
    indemnify: "450.000",
},

{
    stt:"2",
    code: "848550438",
    phonenumber: "0345214568",
    ordervalue: "600.000",
    details: "... Địa chỉ nhận: Thôn 2, Kim Liên, Quốc Oai, Hà Nội, ...",
    freight: "22.000",
    comeback: "11.500",
    status: "Chuyển hoàn",
    collection: "0",
    indemnify: "0",
},
];

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
        <td>${ord.freight}</td>
        <td>${ord.comeback}</td>
        <td>${ord.status}</td>
        <td>${ord.collection}</td>
        <td>${ord.indemnify}</td>
        <td>
            <a href=""><i class="fa-solid fa-pencil"></i></a>
        </td>
        <td>
            <a href = ""><i class="fa-solid fa-trash-can"></i></a>
        </td>
    </tr>
     `;
});

contentlist.innerHTML = Expressdelivery.join("");

const morenew = document.querySelector("#morenew")
const isMorenew = false;
morenew.addEventListener("click", () => {
  isMorenew = !isMorenew;
  if (isMorenew) {
    addnew.classList.remove("form");
    addnew.classList.add("block");
  } else {
    addnew.classList.remove("block");
    addnew.classList.add("form");
  }
});

//thêm
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
    console.log(inputCode.value)
    let newlist = {
      stt: arr.length + 1,
      code: inputCode.value,
      phonenumber: inputPhoneNumber.value,
      ordervalue: inputOrderValue.value,
      details: inputDetails.value,
      freight: inputFreight.value,
      comeback: inputComeback.value,
      status: inputStatus.value,
      collection: inputCollection.value,
      indemnify: inputIndemnify.value,  
    };
  
    arr.push(newlist);
  
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
        <td>${ord.freight}</td>
        <td>${ord.comeback}</td>
        <td>${ord.status}</td>
        <td>${ord.collection}</td>
        <td>${ord.indemnify}</td>
        <td>
            <a href=""><i class="fa-solid fa-pencil"></i></a>
        </td>
        <td>
            <a href = ""><i class="fa-solid fa-trash-can"></i></a>
        </td>
    </tr>
     `;
});
    //
    contentlist.innerHTML = Expressdelivery.join("");
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